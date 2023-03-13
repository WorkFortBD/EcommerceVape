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

export default function CartComponents({}: Props) {
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
    // dispatch(handleShippingCost())
  };

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const checkHandler = () => {
    dispatch(toggleAllCartSelection(!cart.isChecked, cart.productID));
    // dispatch(handleShippingCost())
  };

  return (
    <section className="cart-section">
      {carts.length > 0 ?(
      <div className="container mx-auto mt-5">
        <h2 className="p-6 text-2xl">Carts</h2>
        <div className="flex flex-col md:flex-row">
            <div className="basis-8/12 mt-2 p-6">
              {/* <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 ">
            Add 54 to cart and get free shipping!
            <Progress progress={45} />
          </p> */}
              <div className="flex mt-2 uppercase py-2 bg-red-400 text-white">
                <div className="basis-1/2">
                  <p className="text-center">Product</p>
                </div>
                <div className="basis-1/2">
                  <div className="flex">
                    <p className="basis-1/4 mr-2">Price</p>
                    <p className="basis-1/2">Quantity</p>
                    <p className="basis-1/4 ml-2">Subtotal</p>
                    <p className="basis-1/4 ml-2">Action</p>
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
            <div className="basis-4/12 p-6 mt-7">
              <div className="border-4 p-3">
                <h2 className="mt-3 uppercase text-2xl">Cart Totals</h2>
                <div className="flex justify-between mt-3 border-b-2 p-3 ">
                  <p>Subtotal</p>
                  <p>{formatCurrency(totalPrice)}</p>
                </div>
                <div className="flex justify-between mt-3 p-3">
                  <p>Total</p>
                  <p className="text-primary">{formatCurrency(totalPrice)}</p>
                </div>
                <p className="transition-all cursor-pointer text-center mt-4 bg-primary hover:bg-primary-light rounded p-3 text-white uppercase">
                  <Link href="checkout">Proceed to checkout</Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      ):
      (<div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row">
          <div className="basis-8/12 mt-2 p-6">
            {/* <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 ">
          Add 54 to cart and get free shipping!
          <Progress progress={45} />
        </p> */}
            <div className="flex mt-2 uppercase py-2 bg-red-400 text-white w-4/5 mx-auto">
              <div className="basis-1/2 text-center">
                <h1 className="text-4xl">Cart Is Empty</h1>
                {/* <div className="flex">
                  <p className="basis-1/4 mr-2">Price</p>
                </div> */}
              </div>
            </div>
          </div>
        
      </div>
    </div>)}
    </section>
  );
}
