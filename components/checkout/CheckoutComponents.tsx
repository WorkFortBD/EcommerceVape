import React from "react";

type Props = {};

export default function CheckoutComponents({}: Props) {
  return (
    <section className="cart-section">
      <div className="container mx-auto mt-10">
        <div className="flex font-size">
          <h2 className="font-bold">Returning customer?</h2>
          <a href="" className="ml-2 text-primary">
            <u>Clicck here to login</u>
          </a>
        </div>
        <div className="flex font-size mt-7">
          <h2 className="font-bold">Have a coupon?</h2>
          <a href="" className="ml-2 text-primary">
            <u>Click here to login</u>
          </a>
        </div>
        <div className="flex sm:flex-col md:flex-row mt-7">
          <div className="basis-1/2 mt-6">
            <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 font-size">
              Add 54 to cart and get free shipping!
            </p>
            <h2 className="mt-10 uppercase text-2xl">Billing & Shipping</h2>

            <form action="" className="mt-4">
              <div className="flex">
                <div className="basis-1/2">
                  <label htmlFor="first-name" className="font-size">
                    First name
                    <sub className="text-2xl text-red-500">*</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                  />
                </div>
                <div className="basis-1/2">
                  <label htmlFor="lastt-name" className="font-size">
                    Last name <sub className="text-2xl text-red-500">*</sub>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="last-name"
                    className="w-full border outline-none rounded-md p-2 mt-2 mr-2 ml-3"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="country" className="font-size">
                  Country / Region
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="country"
                  id="contry"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="street-address" className="font-size">
                  Street Address
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="address"
                  id="street-address"
                  placeholder="House number and Street name"
                  className="border w-full outline-none rounded-md p-2 mt-2 font-size mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="town" className="font-size">
                  Town / City <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="town"
                  id="town"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="state" className="font-size">
                  State / County
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="postcode" className="font-size">
                  Postcode / Zip(optional)
                </label>
                <br />
                <input
                  type="text"
                  name="postecode"
                  id="postecode"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="number" className="font-size">
                  Billing Mobile Number
                  <sub className="text-2xl text-red-500">*</sub>
                </label>
                <br />
                <input
                  type="text"
                  name="number"
                  id="number"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="font-size">
                  Billing Email(optional)
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border w-full outline-none rounded-md p-2 mt-2 mr-2"
                />
              </div>
              <h2 className="mt-6 text-3xl">Additional Information</h2>
              <div className="mt-5">
                <label htmlFor="notes" className="font-size">
                  Order Notes(optional)
                </label>
                <br />
                <textarea
                  name="ordernotes"
                  id="notes"
                  cols="5"
                  rows="6"
                  className="font-size border w-full outline-none rounded-md p-2 mt-2 mr-2"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="basis-1/2 ml-4 bg-slate-50 h-full p-5 mt-6">
            <h2 className="mt-10 uppercase text-2xl text-center">Your Order</h2>
            <div className="bg-white">
              <div className="flex justify-between mt-5 border-b-2 p-4 uppercase text-xl">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="flex justify-between mt-3 border-b p-4 text-gray-400 font-size">
                <p>
                  TWIST - Honeydew Melon(30ML) <br />
                  20mg - 20mg x 4
                </p>
                <p className="text-primary">330</p>
              </div>
              <div className="flex justify-between mt-3 border-b p-4 font-size">
                <p>Subtotal</p>
                <p className="text-primary">330</p>
              </div>
              <div className="flex justify-between mt-3 p-4 text-xl">
                <p>Total</p>
                <p className="text-primary">445</p>
              </div>
            </div>
            <div className="mt-8 border-b p-3">
              <div className="flex">
                <div>
                  <input type="radio" name="creditcard" id="creditcard" />
                  <label htmlFor="creditcard">Credit Card | MADA</label>
                </div>
                <img
                  src="images/CC-1.svg"
                  alt=""
                  id="creditcard"
                  className="w-44 ml-2"
                />
              </div>
              <div className="flex mt-5">
                <div>
                  <input type="radio" name="apple" id="apple" />
                  <label htmlFor="apple">STC Pay</label>
                </div>
                <img
                  src="images/Apple-STC-1.svg"
                  alt=""
                  id="apple"
                  className="w-44 ml-2"
                />
              </div>
            </div>

            <p className="mt-4 border-b p-3 font-size text-gray-400">
              Your personal data will be used to process your order, support
              your experience throughout this website.
            </p>

            <input
              type="checkbox"
              name="condition"
              id="condition"
              className="mt-7"
            />
            <label htmlFor="condition" className="font-size ml-2">
              I have read and agree to the website terms and conditions
              <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="checkbox"
              name="condition"
              id="condition"
              className="mt-7"
            />
            <label htmlFor="condition" className="font-size ml-2">
              I am 21 years old.<sub className="text-2xl text-red-500">*</sub>
            </label>
            <p className="text-center mt-4 bg-primary rounded p-3 text-white uppercase hover:bg-gray-400">
              <a href="" className="text-center uppercase">
                place order
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
