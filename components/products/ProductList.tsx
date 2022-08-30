import React, { ReactElement } from "react";
import ProductShortDetail from "./ProductShortDetail";

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
      image: "/images/4.jpeg",
    },
    {
      title: "Noisy Vape",
      price: 190,
      offerPrice: 180,
      image: "/images/2.jpeg",
    },
    {
      title: "Noisy Vape",
      price: 190,
      offerPrice: 180,
      image: "/images/4.jpeg",
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
        <ProductShortDetail product={product} key={index} />
      ))}
    </div>
  );
}
