import React, { ReactElement } from "react";

interface Props {}

export default function ProductList({}: Props): ReactElement {
  const products = [
    {
      title: "Noisy Vape",
      price: 190,
      offerPrice: 180,
      image: "/images/4.jpeg",
    },
    {
      title:
        "Noisy Vape another awesome jkdbjksdhjs djhsdhjs dhjsvdjhsbdghvs djhbsvdjhsd",
      price: 190,
      offerPrice: 180,
      image: "/images/1.jpeg",
    },
    {
      title: "Noisy Vape",
      price: 190,
      offerPrice: 180,
      image: "/images/2.jpeg",
    },
    {
      title: "Noisy Vape Final",
      price: 190,
      offerPrice: 180,
      image: "/images/3.jpeg",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap mx-2 md:mx-4">
      {/* Single Item */}
      {products.map((product, index) => (
        <div className="mt-3 border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75">
          <img
            src={product.image}
            alt=""
            className="w-60 rounded rounded-b-none"
          />
          <div className="mt-3 p-3">
            <div>
              <p className="cursor-pointer text-center">{product.title}</p>
              <span className="block text-center cursor-pointer">3mg</span>
              <span className="block text-center cursor-pointer">
                {product.price}
              </span>
            </div>
            <p className="text-center">
              <button className="uppercase mt-3 p-2 bg-primary rounded-md text-white">
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
