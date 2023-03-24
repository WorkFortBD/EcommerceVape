/**
 * External dependencies.
 */
import Link from "next/link";
import { ReactElement, useState } from "react";

/**
 * Internal dependencies.
 */
import { IProduct } from "../../interfaces/products";
import { formatCurrency } from "../../utils/currency";
import { CartButton } from "../carts/CartButton";

interface Props {
  product: IProduct;
}

export default function ProductShortDetail({ product }: Props): ReactElement {

  const[modalOpen,setModalOpen]=useState(false);
console.log('modalOpen', modalOpen)
  const openModal=()=>{
    setModalOpen(true);
  }
  
  return (
    <div className=" relative group mb-6 border border-gray-100 shadow-sm rounded-lg mr-3 transition hover:shadow-md group-hover:opacity-75 max-w-[135px] md:max-w-[230px]">
      <Link href={`/products/${product.sku}`}>
        <div className="">
          <div className="overflow-hidden">
            <img
              src={
                `${process.env.NEXT_PUBLIC_URL}images/products/` +
                product.featured_image
              }
              alt=""
              className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded rounded-b-none w-full h-60"
            />
          </div>
          <div className="mt-1 p-1 text-center">
            <p className="cursor-pointer text-gray-800 hover:text-gray-600 overflow-hidden h-12 text-sm md:text-base">
              {product.name}
            </p>
          </div>
        </div>
      </Link>
      <div className="text-center mt-3">
        {!product.is_offer_enable ||
        product.offer_selling_price == 0 ||
        !(product.offer_selling_price < product.default_selling_price) ? (
          <span className="block text-primary-light">
            {formatCurrency(product.default_selling_price)}
          </span>
        ) : (
          <span>
            <span className="block text-primary-light">
              {formatCurrency(product.offer_selling_price)}
            </span>

            <del className="block text-slate-300">
              {formatCurrency(product.default_selling_price)}
            </del>
          </span>
        )}
        {/* <div class="px-6 py-4 bg-gray-100 group-hover:opacity-100 opacity-0 transition-opacity"> */}
          <button onClick={openModal} className="transition-all bg-primary group-hover:opacity-100 p-2 scale-90 opacity-0 transition-opacity w-32 px-4 ml-2 rounded-md text-white">
            View Details
          </button>
        {/* </div> */}
        <p className="my-3">
          <CartButton product={product} />
        </p>
      </div>
    </div>
  );
}
