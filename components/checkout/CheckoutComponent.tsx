/**Internal Dependency */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Progress } from "flowbite-react";
import Link from "next/link";
import { formatCurrency } from "../../utils/currency";
import { getCartsAction } from "../../store/cart/action";
import { IRootReducer } from "../../interfaces/reducers";

/**External Dependency */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

type Props = {};

export default function CheckoutComponent({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { carts, totalPrice, totalQuantity } = useSelector(
    (state: IRootReducer) => state.carts
  );
  const initialValues = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    password: "",
    password_confirmation: "",
    otp: "",
    offer: false,
    policy: true,
  };
  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const onSubmit = async (values, actions) => {}
  // const validationSchema = [
  //   yup.object().shape({
  //     first_name: yup
  //       .string()
  //       .required("Required")
  //       .min(2, "Name should be at least 2 characters")
  //       .max(40, "Up to 40 characters"),
  //     last_name: yup
  //       .string()
  //       .required("Required")
  //       .min(2, "Name should be at least 2 characters")
  //       .max(40, "Up to 40 characters"),
  //     phone_no: yup
  //       .string()
  //       .required("Required")
  //       .test("phone_no", "Please input a valid phone number", (value) => {
  //         const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

  //         let isValidPhone = phoneRegex.test(value);

  //         if (!isValidPhone) return false;
  //         return true;
  //       }),
  //     email: yup.string().email("Please Input a valid email"),
  //     policy: yup
  //       .boolean()
  //       .oneOf([true], "You must accept the terms and condition."),
  //   }),
  //   yup.object().shape({
  //     otp: yup
  //       .string()
  //       .required("Required")
  //       .min(6, "Input 6 digit OTP")
  //       .max(6, "Input 6 digit OTP")
  //       .test(
  //         "otp-code",
  //         "Please input a valid OTP",
  //         async (value, context) => {
  //           if (value && !IS_VALID_OTP && value.length === 6) {
  //             try {
  //               const otpBody = {
  //                 otp: context.parent.otp,
  //                 phone_no: context.parent.phone_no,
  //               };

  //               const res = await Axios.post(`auth/check-otp`, otpBody);

  //               if (res.data.status) {
  //                 IS_VALID_OTP = true;
  //                 return Promise.resolve(true);
  //               } else {
  //                 return Promise.resolve(false);
  //               }
  //             } catch (error) {
  //               return Promise.resolve(false);
  //             }
  //           }

  //           if (value && value.length < 6) {
  //             IS_VALID_OTP = false;
  //           }

  //           return Promise.resolve(true);
  //         }
  //       ),
  //     password: yup
  //       .string()
  //       .required("Required")
  //       // .matches(LOWERCASEREGEX, 'At least one lowercase character required')
  //       // .matches(UPPERCASEREGEX, 'At least one uppercase character required')
  //       // .matches(NUMERICREGEX, 'At least one numeric value required')
  //       // .matches(NUMERICREGEX, 'At least one numeric value required')
  //       .min(8, "Minimum 8 characters required")
  //       .test("password", "space not allowed", (value) => {
  //         if (value === undefined || value === null) return false;

  //         if (/\s/g.test(value)) return false;

  //         return true;
  //       }),
  //     password_confirmation: yup
  //       .string()
  //       .oneOf(
  //         [yup.ref("password"), null],
  //         "Password confirmation does not match password!"
  //       )
  //       .required("Required"),
  //   }),
  // ];
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
        <div className="flex flex-col md:flex-row mt-7">
          <div className="basis-1/2 mt-3 p-4">
            <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 ">
              Add {formatCurrency(54)} to cart and get free shipping!
              <Progress progress={45} />
            </p>
            {/* <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            ></Formik> */}
            <h2 className="mt-10 uppercase text-2xl">Billing & Shipping</h2>

            <form action="" className="mt-4">
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
                  />
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
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="country">
                  Country / Region
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                />
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
                  id="street-address"
                  placeholder="House number and Street name"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="town">
                  Town / City <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="town"
                  id="town"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="state">
                  State / County
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
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
                  name="number"
                  id="number"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="email">Billing Email(optional)</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
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
                ></textarea>
              </div>
            </form>
          </div>

          <div className="basis-1/2 ml-4 bg-slate-50 h-full p-4 mt-6">
            <h2 className="mt-10 uppercase text-2xl text-center">Your Order</h2>
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
                    <p className="text-primary">{formatCurrency(cart.price)}</p>
                  )}
                </div>
              ))}
              <div className="basis-1/2">
                  <label htmlFor="first-name">
                    Apply Coupon(If Any)
                  </label>
                  <br />
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    className="border w-full transition-all outline-none focus:outline-none focus:ring-0 focus:border-primary-light rounded-md p-2 mt-2 mr-2"
                  />
                </div>
              <div className="flex justify-between mt-3 border-b p-4 ">
                <p>Subtotal</p>
                <p className="text-primary">{formatCurrency(totalPrice)}</p>
              </div>
              <div className="flex justify-between mt-3 border-b p-4 ">
                <p>Shipping Cost</p>
                <p className="text-primary">{formatCurrency(0)}</p>
              </div>
              <div className="flex justify-between mt-3 border-b p-4 ">
                <p>Discount Fee</p>
                <p className="text-primary">{formatCurrency(0)}</p>
              </div>
              <div className="flex justify-between mt-3 p-4 text-xl">
                <p>Total</p>
                <p className="text-primary">{formatCurrency(totalPrice)}</p>
              </div>
            </div>
            <div className="mt-8 border-b p-3">
              <div className="flex">
                <div>
                  <input type="radio" name="payment" id="creditcard" />
                  <label htmlFor="creditcard"> Credit Card | MADA</label>
                </div>
                <img
                  src="images/common/checkout.svg"
                  alt=""
                  id="creditcard"
                  className="w-44 ml-2"
                />
              </div>
              <div className="flex mt-5">
                <div>
                  <input type="radio" name="payment" id="apple" />
                  <label htmlFor="apple"> STC Pay</label>
                </div>
                <img
                  src="images/Apple-STC-1.svg"
                  alt=""
                  id="apple"
                  className="w-44 ml-2"
                />
              </div>
              <div className="flex mt-5">
                <div>
                  <input type="radio" name="payment" id="apple" />
                  <label htmlFor="apple"> Cash On Delivery</label>
                </div>
              </div>
            </div>

            <p className="mt-4 border-b p-3 text-gray-400">
              Your personal data will be used to process your order, support
              your experience throughout this website.
            </p>
            <div className="mt-3">
              <input type="checkbox" name="condition" id="condition" />
              <label htmlFor="condition" className="ml-2">
                I have read and agree to the website terms and conditions
                <sub className="text-2xl text-red-500">*</sub>
              </label>
              <br />
              <input type="checkbox" name="condition" id="condition" />
              <label htmlFor="condition" className="ml-2">
                I am 21 years old.<sub className="text-2xl text-red-500">*</sub>
              </label>
              <p className="text-center cursor-pointer mt-5 mb-3 bg-primary hover:bg-primary-light rounded p-3 text-white uppercase">
                <Link href="" className="text-center uppercase">
                  place order
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
