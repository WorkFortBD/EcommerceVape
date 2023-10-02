/**
 * External dependencies.
 */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "./CartItem";
import { Progress } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Internal dependencies.
 */
import { formatCurrency } from "../../utils/currency";
import {
  deleteCartItemAction,
  getCartsAction,
  toggleAllCartSelection,
} from "../../store/cart/action";
import { IRootReducer } from "../../interfaces/reducers";

type Props = {};

export default function CartComponents({ }: Props) {
  const dispatch = useDispatch();
  const { carts, checkedAllCarts, totalPrice, totalQuantity } = useSelector(
    (state: IRootReducer) => state.carts
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteCartProduct = (productID: number) => {
    dispatch(deleteCartItemAction(productID));
    setShow(false);
  };

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const checkHandler = () => {
    dispatch(toggleAllCartSelection(!cart.isChecked, cart.productID));
  };

  return (
    <section className="cart-section">
      {carts.length > 0 ? (
        <div className="container mx-auto mt-5">
          <h2 className="p-6 text-2xl">Carts</h2>
          <div className="flex flex-col md:flex-row">
            <div className="basis-8/12 md:w-8/12 mt-2 p-6">
              <div className="flex mt-2 uppercase py-2 bg-primary text-white">
                <div className="basis-1/2">
                  <p className="text-center text-sm md:text-base lg:text-lg">Product</p>
                </div>
                <div className="basis-1/2">
                  <div className="flex">
                    <p className="basis-1/4 mr-2 text-sm md:text-base lg:text-lg">Price</p>
                    <p className="basis-1/4 mr-2 text-sm md:text-base lg:text-lg">Quantity</p>
                    <p className="basis-1/4 mr-2 text-sm md:text-base lg:text-lg">Attribute</p>
                    <p className="basis-1/4 mr-2 text-sm md:text-base lg:text-lg">Subtotal</p>
                    <p className="basis-1/4 text-sm md:text-base lg:text-lg">Action</p>
                  </div>
                </div>
              </div>


              {carts.length > 0 && (
                <>
                  {carts.map((cart, index) => (
                    <CartItem cart={cart} key={index} />
                  ))}

                  <div className="flex justify-between mt-4 flex-col-reverse md:flex-row mx-2"></div>
                </>
              )}
            </div>
            {carts.length > 0 && (
              <div className="basis-4/12 md:w-4/12 p-6 mt-7">
                <div className="border-4 p-3">
                  <h2 className="mt-3 uppercase text-2xl">Cart Totals</h2>
                  <div className="flex justify-between mt-3 border-b-2 p-3">
                    <p>Subtotal</p>
                    <p>{formatCurrency(totalPrice ?? 0.00)}</p>
                  </div>
                  <div className="flex justify-between mt-3 p-3">
                    <p>Total</p>
                    <p className="text-primary">{formatCurrency(totalPrice) ?? 0.00}</p>
                  </div>
                  <p className="transition-all cursor-pointer text-center mt-4 bg-primary hover:bg-primary-light rounded p-3 text-white uppercase">
                    <Link href="/checkout">Proceed to checkout</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-5">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 mx-auto mt-2 p-6">
              <div className="bg-red-400 text-white py-6 rounded-lg text-center">
                <h1 className="text-4xl uppercase">Cart Is Empty</h1>
                <p className="text-lg mt-4">Your shopping cart is currently empty.</p>
                <p className="text-lg mt-2">Start shopping now and fill your cart with amazing products!</p>
                {/* Add a shopping link/button here */}
                <Link href={`/`}>
                  <button
                    className="mt-4 inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition duration-300 ease-in-out"
                  >
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>

  );
}
