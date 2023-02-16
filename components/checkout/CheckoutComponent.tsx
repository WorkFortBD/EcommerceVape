/**Internal Dependency */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Progress } from "flowbite-react";
import Link from "next/link";
import { formatCurrency } from "../../utils/currency";
import { getCartsAction } from "../../store/cart/action";
import { IRootReducer } from "../../interfaces/reducers";
import CustomSelect from "../master/custom-select/CustomSelect";

/**External Dependency */
import { useFormik } from "formik";
import * as yup from "yup";
import { getLocationData } from "../../store/profileaccountsetting/action";
import { createOrder } from "../../store/order/action";
import { getUserDataAction } from "../../store/users/action";
import { isSignedIn } from "../../store/auth/action";
import Spinner from "../master/spinner/Spinner";

type Props = {};

export default function CheckoutComponent({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { carts, totalPrice, totalQuantity } = useSelector(
    (state: IRootReducer) => state.carts
  );
  const { countryList, divisionList, cityList, areaList } = useSelector(
    (state) => state.userProfile
  );
  const { couponData, shippingCost, coupon, isSubmitting } = useSelector(
    (state) => state.order
  );
  const { userData } = useSelector((state) => state.user);
  const status = useSelector((state) => state.auth.isSignedIn);

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(isSignedIn());
    if (userData == null) {
      router.replace("/sign-in");
    }
    if (countryList.length === 0) {
      dispatch(getLocationData("countries", null, null));
    }
    if (divisionList.length === 0) {
      dispatch(getLocationData("divisions", null, null));
    }
    if (cityList.length === 0) {
      dispatch(getLocationData("cities", null, null));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      country: "",
      country_id: "",
      address: "",
      division: "",
      division_id: "",
      city: "",
      city_id: "",
      postecode: "",
      email: "",
      ordernotes: "",
      payment: "",
      condition: "",
      age: "",
    },
    validationSchema: yup.object().shape({
      first_name: yup
        .string()
        .required("Required")
        .min(2, "Name should be at least 2 characters")
        .max(40, "Up to 40 characters"),
      last_name: yup
        .string()
        .required("Required")
        .min(2, "Name should be at least 2 characters")
        .max(40, "Up to 40 characters"),
      address: yup
        .string()
        .required("Required")
        .min(5, "Address should be at least 5 characters")
        .max(40, "Up to 40 characters"),
      division: yup.string().required("Required"),
      country: yup.string().required("Required"),
      phone_no: yup
        .string()
        .required("Required")
        .test("phone_no", "required ex: 01712345678", (value) => {
          const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

          let isValidPhone = phoneRegex.test(value);

          if (!isValidPhone) return false;
          return true;
        }),
    }),
    onSubmit: (values) => {
      dispatch(
        createOrder(
          values,
          carts,
          totalQuantity,
          shippingCost,
          totalPrice,
          couponData,
          userData
        )
      );
    },
  });
  return (
    <section className="cart-section">
      <div className="container mx-auto mt-6">
        <div className="flex p-4">
          <h2 className="font-bold">Returning customer?</h2>
          <Link href="">
            <u className="ml-2 text-primary">Click here to login</u>
          </Link>
        </div>
        <div className="flex mt-3 p-4">
          <h2 className="font-bold">Have a coupon?</h2>
          <Link href="">
            <u className="ml-2 text-primary">Click here to login</u>
          </Link>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="flex flex-col md:flex-row mt-7">
            <div className="basis-1/2 mt-3 p-4">
              <h2 className="mt-10 uppercase text-2xl">Billing & Shipping</h2>

              <div className="flex">
                <div className="basis-1/2">
                  <label htmlFor="first-name">
                    First name
                    <sub className="text-2xl text-red-500">*</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                  {formik.errors.first_name && formik.touched.first_name && (
                    <ValidationError>
                      {formik.errors.first_name}
                    </ValidationError>
                  )}
                </div>
                <div className="basis-1/2">
                  <label htmlFor="lastt-name" className="ml-1">
                    Last name <sub className="text-2xl text-red-500">*</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="w-full border transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2 ml-1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                  {formik.errors.last_name && formik.touched.last_name && (
                    <ValidationError>{formik.errors.last_name}</ValidationError>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="country">
                  Country / Region
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <CustomSelect
                  id="country"
                  name="country"
                  onChange={(option) => {
                    formik.setFieldValue("country", option.label);
                    formik.setFieldValue("country_id", option.value);
                  }}
                  value={formik.values.country_id}
                  options={countryList}
                />
                {formik.errors.country && formik.touched.country && (
                  <ValidationError>{formik.errors.country}</ValidationError>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="street-address">
                  Street Address
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="House number and Street name"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.errors.address && formik.touched.address && (
                  <ValidationError>{formik.errors.address}</ValidationError>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="town">
                  State/County <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <CustomSelect
                  id="division"
                  name="division"
                  onChange={(option) => {
                    formik.setFieldValue("division", option.label);
                    formik.setFieldValue("division_id", option.value);
                  }}
                  value={formik.values.division_id}
                  options={divisionList}
                />
                {formik.errors.division && formik.touched.division && (
                  <ValidationError>{formik.errors.division}</ValidationError>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="state">
                  Town / City
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <CustomSelect
                  id="city"
                  name="city"
                  onChange={(option) => {
                    formik.setFieldValue("city", option.label);
                    formik.setFieldValue("city_id", option.value);
                  }}
                  value={formik.values.city_id}
                  options={cityList}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="postcode">Postcode / Zip(optional)</label>
                <br />
                <input
                  type="text"
                  name="postecode"
                  id="postecode"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postecode}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="number">
                  Billing Mobile Number
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="phone_no"
                  id="phone_no"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_no}
                />
                {formik.errors.phone_no && formik.touched.phone_no && (
                  <ValidationError>{formik.errors.phone_no}</ValidationError>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="email">Billing Email(optional)</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <h2 className="mt-6 text-3xl">Additional Information</h2>
              <div className="mt-5">
                <label htmlFor="notes">Order Notes(optional)</label>
                <br />
                <textarea
                  name="ordernotes"
                  id="notes"
                  cols="5"
                  rows="6"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ordernotes}
                ></textarea>
              </div>
            </div>

            <div className="basis-1/2 ml-4 bg-slate-50 h-full p-4 mt-6">
              <h2 className="mt-10 uppercase text-2xl text-center">
                Your Order
              </h2>
              <div className="bg-white">
                <div className="flex justify-between mt-5 border-b-2 p-4 uppercase text-xl">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                {carts.map((cart, index) => (
                  <div className="flex justify-between mt-3 border-b p-4 text-gray-400 ">
                    <p>
                      {cart.productName}
                      <br />
                      {cart.sku}
                    </p>
                    {cart.isOffer ? (
                      <p className="text-primary">
                        {formatCurrency(cart.offerPrice)}
                      </p>
                    ) : (
                      <p className="text-primary">
                        {formatCurrency(cart.price)}
                      </p>
                    )}
                  </div>
                ))}
                <div className="flex justify-between mt-3 border-b p-4 ">
                  <p>Subtotal</p>
                  <p className="text-primary">{formatCurrency(totalPrice)}</p>
                </div>
                <div className="flex justify-between mt-3 border-b p-4 ">
                  <p>Shipping Cost</p>
                  <p className="text-primary">{formatCurrency(0)}</p>
                </div>
                <div className="flex justify-between mt-3 p-4 text-xl">
                  <p>Total</p>
                  <p className="text-primary">{formatCurrency(totalPrice)}</p>
                </div>
              </div>
              <div className="mt-8 border-b p-3">
                <div className="flex mt-5">
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="apple"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.payment}
                    />
                    <label htmlFor="apple"> STC Pay</label>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="mt-4 border-b p-3 text-gray-400">
                      Make your payment directly into our STC Pay account.
                      Please use your Order ID as the payment reference. Your
                      order will not be shipped until the funds have cleared in
                      our account. +966558449919
                    </p>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="apple"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.payment}
                    />
                    <label htmlFor="apple"> Cash On Delivery</label>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="mt-4 border-b p-3 text-gray-400">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  name="condition"
                  id="condition"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.condition}
                />
                <label htmlFor="condition" className="ml-2">
                  I have read and agree to the website terms and conditions
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="checkbox"
                  name="age"
                  id="age"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                />
                <label htmlFor="age" className="ml-2">
                  I am 21 years old.
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                {isSubmitting == true ? (
                  <button
                    disabled
                    className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <Spinner />
                    Placeing Order....
                  </button>
                ) : (
                  <button
                    className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Place Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function ValidationError(props) {
  return <small className="text-red-500">{props.children}</small>;
}
