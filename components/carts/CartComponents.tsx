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
import { deleteCartItemAction, getCartsAction, toggleAllCartSelection } from "../../store/cart/action";
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
    // dispatch(handleShippingCost())
  }

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const checkHandler = () => {
    dispatch(toggleAllCartSelection(!cart.isChecked, cart.productID));
    // dispatch(handleShippingCost())
  }

  return (
    <section className="cart-section">
      <div className="container mx-auto mt-5">
        <h2 className="p-6 text-2xl">Carts</h2>
        <div className="flex flex-col md:flex-row">
          <div className="basis-8/12 mt-2 p-6">
            {/* <p className="border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4 ">
              Add 54 to cart and get free shipping!
              <Progress progress={45} />
            </p> */}
            <div className="flex mt-2 uppercase border-b-2 py-5">
              <div className="basis-1/2">
                <p className="text-center">Product</p>
              </div>
              <div className="basis-1/2">
                <div className="flex">
                  <p className="basis-1/4 mr-2">Price</p>
                  <p className="basis-1/2">Quantity</p>
                  <p className="basis-1/4 ml-2">Subtotal</p>
                </div>
              </div>
            </div>

            {
              carts.length > 0 &&
              (
                <>
                  {carts.map((cart, index) => (
                    <CartItem cart={cart} key={index} />
                  ))}

                  <div className="flex justify-between mt-4 flex-col-reverse md:flex-row mx-2">
                    {/* <div className="flex">
                      <input
                        type="search"
                        value=""
                        placeholder="Coupon code"
                        className=" p-3 border rounded-md border-slate-300 outline-none w-full mr-1"
                      />
                      <button className="transition-all bg-primary text-white p-3 rounded-md w-full hover:bg-primary-light mx-1 uppercase">
                        Apply Coupon
                      </button>
                    </div> */}
                    {/* <div className="">
                      <button className="transition-all w-full mb-2 md:mb-0 md:w-auto bg-primary text-white p-3 rounded-md hover:bg-primary-light uppercase">
                        Update Cart
                      </button>
                    </div> */}
                  </div>
                </>
              )
            }
          </div>

          {
            carts.length > 0 &&
            <div className="basis-4/12 p-6 mt-7">
              <div className="border-4 p-3">
                <h2 className="mt-3 uppercase text-2xl">Cart Totals</h2>
                <div className="flex justify-between mt-3 border-b-2 p-3 ">
                  <p>Subtotal</p>
                  <p>{formatCurrency(totalPrice)}</p>
                </div>
                {/* <div className="flex justify-between mt-3 border-b-2 p-3 ">
                <p>Shipping</p>
                <p className="text-primary">Calculate shipping</p>
              </div> */}
                <div className="flex justify-between mt-3 p-3">
                  <p>Total</p>
                  <p className="text-primary">{formatCurrency(totalPrice)}</p>
                </div>
                {/* <p className="text-end bottom-3 text-xs">
                (includes
                <span className="text-primary"> {formatCurrency(58)}</span>VAT)
              </p> */}
                {/* <div className="flex justify-between mt-3 p-4 border">
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
              </div> */}
                <p className="transition-all cursor-pointer text-center mt-4 bg-primary hover:bg-primary-light rounded p-3 text-white uppercase">
                  <Link href="checkout">Proceed to checkout</Link>
                </p>
              </div>
            </div>
          }

        </div>
      </div>
    </section>
  );
}
