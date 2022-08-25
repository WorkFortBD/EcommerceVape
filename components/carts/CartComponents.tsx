import React from "react";
import Link from "next/link";
import CartItem from "./CartItem";

type Props = {};

export default function CartComponents({}: Props) {
  const carts = [
    {
      productSlug: "/noisy-product",
      productName: "NOISY - Cherry ICE (60ML) 3mg",
      productImage: "images/1.jpeg",
      productPrice: 80,
      productQty: 1,
    },
    {
      productSlug: "/noisy-product-2",
      productName: "NOISY - Cherry ICE (60ML) 3mg",
      productImage: "images/1.jpeg",
      productPrice: 100,
      productQty: 5,
    },
  ];

  return (
    <section className="cart-section">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-8/12 mt-7 sm:basis-1/3">
            <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 font-size">
              Add 54 to cart and get free shipping!
            </p>
            <div className="flex mt-10 uppercase border-b-2 py-5">
              <div className="basis-1/2">
                <p className="text-center">Product</p>
              </div>
              <div className="basis-1/2">
                <div className="flex">
                  <p className="basis-1/4">Price</p>
                  <p className="basis-1/2">Quantity</p>
                  <p className="basis-1/4">Subtotal</p>
                </div>
              </div>
            </div>

            {carts.map((cart, index) => (
              <CartItem cart={cart} key={index} />
            ))}

            <div className="flex justify-between mt-4 flex-col-reverse md:flex-row mx-2">
              <div className="flex">
                <input
                  type="search"
                  value=""
                  placeholder="Coupon code"
                  className="font-size p-3 border rounded-md border-slate-300 outline-none w-full mr-1"
                />
                <button className="bg-primary text-white p-3 rounded-md w-full hover:bg-gray-400 mx-1 uppercase">
                  Apply Coupon
                </button>
              </div>
              <div className="">
                <button className="w-full mb-2 md:mb-0 md:w-auto bg-primary text-white p-3 rounded-md hover:bg-gray-400 uppercase">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          <div className="md:basis-4/12 sm:basis-1/4 ml-4 border-4 p-5 mt-7">
            <h2 className="mt-3 uppercase text-2xl">Cart Totals</h2>
            <div className="flex justify-between mt-3 border-b-2 p-3 font-size">
              <p>Subtotal</p>
              <p>445</p>
            </div>
            <div className="flex justify-between mt-3 border-b-2 p-3 font-size">
              <p>Shipping</p>
              <p className="text-primary">Calculate shipping</p>
            </div>
            <div className="flex justify-between mt-3 p-3">
              <p>Total</p>
              <p className="text-primary">445</p>
            </div>
            <p className="text-end bottom-3 text-xs">
              (includes<span className="text-primary"> 58 </span>VAT)
            </p>
            <div className="flex justify-between mt-3 p-4 border">
              <a href="" className="text-gray-400 text-xs">
                or 4 interest-free payments of
                <b>
                  111.25 <br /> SAR.
                </b>
                <u>Learn more</u>
              </a>
              <a href="" className="bg-green-300 rounded">
                tabby
              </a>
            </div>
            <p className="teNamext-center mt-4 text-center bg-primary rounded p-3 text-white uppercase hover:bg-gray-400">
              <Link href="checkout">proceed to checkout</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
