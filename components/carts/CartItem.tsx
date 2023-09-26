/**
 * Internal dependencies.
 */
import Link from "next/link";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

/**
 * External dependenncies.
 */
import { ICart } from "../../interfaces/carts";
import { deleteCartItemAction, updateCartQtyAction } from "../../store/cart/action";
import { formatCurrency } from "../../utils/currency";

interface Props {
  cart: ICart;
}

export default function CartItem({ cart }: Props): ReactElement {
  const dispatch = useDispatch();

  const updateQuantity = (quantity: number) => {
    dispatch(updateCartQtyAction(cart.productID, quantity));
  }

  const handleDeleteCartProduct = (productID) => {
    dispatch(deleteCartItemAction(productID));
    // dispatch(handleShippingCost())
  }


  return (
    <div className="flex border-b p-3">
      <div className="flex basis-1/2">
        <Link href="/product-detail">
          <div className="flex flex-col md:flex-row cursor-pointer justify-center items-center">
            <img
              src={cart.productImage}
              alt={cart.productName}
              className="w-20 ml-10 mt-3"
            />
            <span className="mt-2 ml-3 text-sm hover:text-slate-500">
              {cart.productName}
            </span>
          </div>
        </Link>
      </div>
      <div className="flex basis-1/2 items-center text-slate-500">
        <p className="basis-1/4 font-size">
          {cart.isOffer ? formatCurrency(cart.offerPrice) : formatCurrency(cart.price)}
        </p>
        <p className="basis-1/2 font-size">
          <button
            className="border px-2 py-1 hover:bg-primary hover:text-white"
            disabled={cart.quantity <= 1 ? true : false}
            onClick={() => updateQuantity(cart.quantity - 1)}>
            -
          </button>
          <span className="border px-2 py-1">{cart.quantity}</span>
          <button className="border px-2 py-1 hover:bg-primary hover:text-white"
            onClick={() => updateQuantity(cart.quantity + 1)}
          >
            +
          </button>
        </p>
        <p className="basis-1/4 font-size text-primary">
          {cart.attribute ?cart.attribute.value + ""+ cart.attribute.code: 'N/A'}
        </p>
        <p className="basis-1/4 text-primary">
          {formatCurrency((cart.isOffer ? cart.offerPrice : cart.price) * cart.quantity)}
        </p>
        <p className="basis-1/4 text-primary">
          <button className="text-danger ml-4" style={{ padding: '5px 10px' }} onClick={() => handleDeleteCartProduct(cart.productID)}>Remove</button>
        </p>
      </div>
    </div>
  );
}
