import Link from "next/link";
import React, { ReactElement } from "react";

interface ICartItem {
  /**
   * Cart Product Name.
   */
  productName: string;

  productPrice: number;

  productSlug: string;

  productQty: number;
}

interface Props {
  cart: ICartItem;
}

export default function CartItem({ cart }: Props): ReactElement {
  return (
    <div className="flex border-b p-3">
      <div className="flex basis-1/2">
        <Link href="/product-detail">
          <div className="flex flex-col md:flex-row cursor-pointer justify-center items-center">
            <img src="images/1.jpeg" alt="" className="w-20 ml-10 mt-3" />
            <span className="mt-2 ml-3 text-sm hover:text-slate-500">
              {cart.productName}
            </span>
          </div>
        </Link>
      </div>
      <div className="flex basis-1/2 mt-14 text-slate-500">
        <p className="basis-1/4 font-size">{cart.productPrice}</p>
        <p className="basis-1/2 font-size">
          <span className="border px-2 py-1 hover:bg-primary hover:text-white">
            -
          </span>
          <span className="border px-2 py-1">{cart.productQty}</span>
          <span className="border px-2 py-1 hover:bg-primary hover:text-white">
            +
          </span>
        </p>
        <p className="basis-1/4 text-primary">
          {cart.productPrice * cart.productQty}
        </p>
      </div>
    </div>
  );
}
