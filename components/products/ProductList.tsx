import React, { ReactElement, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/products";
import ProductShortDetail from "./ProductShortDetail";
import { GetServerSideProps } from 'next';

interface Props {
  products: Array<IProduct>
}

export default function ProductList({ products }: Props): ReactElement {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
      {/* {products.map((product, index) =>
        <ProductShortDetail product={product} key={index} />
      )} */}
    </div>
  );
}
