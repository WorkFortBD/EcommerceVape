import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  product: object;
}

export default function ProductShortDetail({ product }: Props): ReactElement {
  return (
    <div className="mt-3 border border-gray-100 shadow-sm rounded-lg mr-3 transition hover:shadow-md group-hover:opacity-75 max-w-[230px]">
      <Link href={"/products/single"}>
        <div>
          <img
            src={product.image}
            alt=""
            className="cursor-pointer rounded rounded-b-none w-full h-60"
          />
          <div className="mt-1 p-1 text-center">
            <p className="cursor-pointer text-gray-800 hover:text-gray-600 overflow-hidden h-12 ">
              {product.title}
            </p>
          </div>
        </div>
      </Link>
      <div className="text-center">
        <span className="block text-primary">{product.price}</span>
        <p>
          <button className="uppercase mt-3 hover:bg-gray-400 transition-all mb-3 p-2 bg-primary rounded-md text-white">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
}
