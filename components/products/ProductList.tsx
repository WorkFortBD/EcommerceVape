import React, { ReactElement, useEffect, useState } from "react";
import ProductShortDetail from "./ProductShortDetail";
import { GetServerSideProps } from 'next';

interface Props {
  product: any;
}

export default function ProductList({ product }: Props): ReactElement {
  console.log('Product',product);
  // const [products, setProducts] = useState([
  //   {
  //     title: "VGOD – Pod 4K BERRY BOMB ICE – 4000 puffs",
  //     price: 100,
  //     offerPrice: 90,
  //     image: "/images/products/4.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 80,
  //     offerPrice: 100,
  //     image: "/images/products/5.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K DRY TOBACCO – 4000 puffs",
  //     price: 90,
  //     offerPrice: 180,
  //     image: "/images/products/7.jpeg"
  //   },
  //   {
  //     title: "SvoëMesto – Kayfun X RTA",
  //     price: 200,
  //     offerPrice: 180,
  //     image: "/images/products/4.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 500,
  //     offerPrice: 180,
  //     image: "/images/products/5.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs Final",
  //     price: 190,
  //     offerPrice: 180,
  //     image: "/images/products/6.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 500,
  //     offerPrice: 180,
  //     image: "/images/products/7.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 300,
  //     offerPrice: 180,
  //     image: "/images/products/8.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 400,
  //     offerPrice: 180,
  //     image: "/images/products/7.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 100,
  //     offerPrice: 180,
  //     image: "/images/products/1.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K BERRY BOMB ICE – 4000 puffs",
  //     price: 190,
  //     offerPrice: 180,
  //     image: "/images/products/4.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 250,
  //     offerPrice: 180,
  //     image: "/images/products/5.jpeg"
  //   },

  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 300,
  //     offerPrice: 180,
  //     image: "/images/products/8.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 400,
  //     offerPrice: 180,
  //     image: "/images/products/7.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 100,
  //     offerPrice: 180,
  //     image: "/images/products/1.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K BERRY BOMB ICE – 4000 puffs",
  //     price: 190,
  //     offerPrice: 180,
  //     image: "/images/products/4.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 250,
  //     offerPrice: 180,
  //     image: "/images/products/5.jpeg"
  //   },

  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 300,
  //     offerPrice: 180,
  //     image: "/images/products/8.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 400,
  //     offerPrice: 180,
  //     image: "/images/products/7.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K LUSH ICE – 4000 puffs",
  //     price: 100,
  //     offerPrice: 180,
  //     image: "/images/products/1.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K BERRY BOMB ICE – 4000 puffs",
  //     price: 190,
  //     offerPrice: 180,
  //     image: "/images/products/4.jpeg"
  //   },
  //   {
  //     title: "VGOD – Pod 4K PURPLE BOMB ICE – 4000 puffs",
  //     price: 250,
  //     offerPrice: 180,
  //     image: "/images/products/5.jpeg"
  //   }
  // ]);

  // useEffect(
  //   () => {
  //     const updatedProducts = [];

  //     for (let index = 0; index < count; index++) {
  //       const product = products[index];
  //       updatedProducts.push(product);
  //     }

  //     setProducts(updatedProducts);
  //   },
  //   [count]
  // );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
      {/* {products.map((product, index) =>
        <ProductShortDetail product={product} key={index} />
      )} */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const productBySlug = encodeURIComponent(context.params.productBySlug);
  // const uri = `${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${productBySlug}`;
  const uri = `http://localhost:8000/api/v1/get-items?p=1&paginate_no=20`;
  // Don't delete the base api_url from here.

  try {
      const res = await fetch(uri);
      const dataJSON = await res.json();
      const data = dataJSON.data;
      if(!data) {
          return {
              notFound: true
          }
      }
      return {
          props: { product: data }
      }
  } catch (error) {
      return {
          notFound: true
      }
  }
  

}
