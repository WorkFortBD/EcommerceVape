import type { NextPage } from "next";
import Head from 'next/head';
import CartComponents from "../components/carts/CartComponents";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"Cart"}>
      <Head>
        <link rel="canonical" href="https://vapeshopsa.com" />
      </Head>
      <CartComponents />
    </Layout>
  );
};

export default Cart;
