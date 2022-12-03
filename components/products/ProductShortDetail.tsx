import Link from "next/link";
import React, { ReactElement } from "react";
import { IProduct } from "../../interfaces/products";
import { formatCurrency } from "../../utils/currency";

interface Props {
  product: IProduct;
}

export default function ProductShortDetail({ product }: Props): ReactElement {
  return (
    <div className="group mb-6 border border-gray-100 shadow-sm rounded-lg mr-3 transition hover:shadow-md group-hover:opacity-75 max-w-[230px]">
      <Link href={"/products/single"}>
        <div className="">
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt=""
              className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded rounded-b-none w-full h-60"
            />
          </div>
          <div className="mt-1 p-1 text-center">
            <p className="cursor-pointer text-gray-800 hover:text-gray-600 overflow-hidden h-12 ">
              {product.name}
            </p>
          </div>
        </div>
      </Link>
      <div className="text-center mt-3">
        <span className="block text-primary-light">
          {formatCurrency(product.price)}
        </span>
        <p>
          <button className="cursor-pointer transition-all uppercase mx-3 mt-3 hover:bg-primary-light text-sm mb-3 py-2 px-4 bg-primary rounded-md text-white hover:px-8">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
}
