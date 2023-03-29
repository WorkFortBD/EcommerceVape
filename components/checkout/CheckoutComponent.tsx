/**Internal Dependency */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";

/**External Dependency */
// import { getLocationData } from "../../store/profileaccountsetting/action";
import { createOrder } from "../../store/order/action";
import { getUserDataAction } from "../../store/users/action";
import { isSignedIn } from "../../store/auth/action";
import { formatCurrency } from "../../utils/currency";
import { getCartsAction } from "../../store/cart/action";
import { IRootReducer } from "../../interfaces/reducers";
// import CustomSelect from "../master/custom-select/CustomSelect";
import Spinner from "../master/spinner/Spinner";

type Props = {};

export default function CheckoutComponent({ }: Props) {
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
  const [shippingDifferent, setShippingDifferent] = useState(false);

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(isSignedIn());
    if (userData == null) {
      router.replace("/sign-in");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      country_id: "",
      address: "",
      city: "",
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
        .min(2, "Last name should be at least 2 characters")
        .max(40, "Up to 40 characters"),
      address: yup
        .string()
        .required("Required")
        .min(5, "Address should be at least 5 characters")
        .max(40, "Up to 40 characters"),
      email: yup
        .string()
        .email()
        .required("Required"),
      city: yup
        .string()
        .required("Required"),
      phone_no: yup
        .string()
        .required("Required"),
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
        {/* <div className="flex p-4">
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
        </div> */}
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="flex flex-col md:flex-row mt-7">
            <div className="basis-1/2 mt-3 p-4">
              <h2 className="mt-10 uppercase text-xl border-b border-solid border-primary pb-2 mb-3">Billing details</h2>

              <div className="billing-form">
                <div className="flex">
                  <div className="basis-1/2">
                    <label htmlFor="first-name">
                      First name
                      <sub className="text-xl text-red-500"> *</sub>
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
                      Last name <sub className="text-xl text-red-500"> *</sub>
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
                  <label htmlFor="street-address">
                    Street Address
                    <sub className="text-xl text-red-500"> *</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    id="address"
                    // placeholder="House number and Street name"
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
                  <label htmlFor="city">City
                    <sub className="text-xl text-red-500"> *</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="number">
                    Phone Number
                    <sub className="text-xl text-red-500"> *</sub>
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
                  <label htmlFor="email">Email
                    <sub className="text-xl text-red-500"> *</sub>
                  </label>
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
                  {formik.errors.email && formik.touched.email && (
                    <ValidationError>{formik.errors.email}</ValidationError>
                  )}
                </div>
              </div>

              <h2 className="mt-10 uppercase text-xl border-b border-solid border-primary pb-2 mb-3">Shipping details</h2>
              <input
                type="checkbox"
                name="shipping_different"
                id="shipping_different"
                onChange={(e) => {
                  setShippingDifferent(e.target.checked)
                }}
                onBlur={(e) => {
                  setShippingDifferent(e.target.checked)
                }}
                checked={shippingDifferent}
              />
              <label htmlFor="shipping_different" className="ml-2 cursor-pointer">
                Ship to different address
              </label>
              {
                shippingDifferent &&
                <div className="shipping-form">
                  <div className="flex">
                    <div className="basis-1/2">
                      <label htmlFor="first-name">
                        First name
                        <sub className="text-xl text-red-500"> *</sub>
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
                        Last name <sub className="text-xl text-red-500"> *</sub>
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
                    <label htmlFor="street-address">
                      Street Address
                      <sub className="text-xl text-red-500"> *</sub>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      // placeholder="House number and Street name"
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
                    <label htmlFor="city">City
                      <sub className="text-xl text-red-500"> *</sub>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="number">
                      Phone Number
                      <sub className="text-xl text-red-500"> *</sub>
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
                    <label htmlFor="email">Email
                      <sub className="text-xl text-red-500"> *</sub>
                    </label>
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
                    {formik.errors.email && formik.touched.email && (
                      <ValidationError>{formik.errors.email}</ValidationError>
                    )}
                  </div>
                </div>
              }

              <div className="mt-5">
                <label htmlFor="notes">Order Notes(optional)</label>
                <br />
                <textarea
                  name="ordernotes"
                  id="notes"
                  cols={5}
                  rows={6}
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ordernotes}
                ></textarea>
              </div>
            </div>

            <div className="basis-1/2 ml-4 bg-slate-50 h-full p-4 mt-6">
              <h2 className="mt-10 uppercase text-xl text-center">
                Your Order
              </h2>
              <div className="bg-white">
                <div className="flex justify-between mt-5 border-b-2 p-4 uppercase text-xl">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                {carts.map((cart, index) => (
                  <div key={index} className="flex justify-between mt-3 border-b p-4 text-gray-400 ">
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
                      id="stc"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.payment}
                    />
                    <label htmlFor="stc"> STC Pay</label>
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
                      id="cod"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.payment}
                    />
                    <label htmlFor="cod"> Cash On Delivery</label>
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
                  <sub className="text-xl text-red-500">*</sub>
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
                  <sub className="text-xl text-red-500">*</sub>
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
