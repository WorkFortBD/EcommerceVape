import type { NextPage } from "next";
import CartComponents from "../components/carts/CartComponents";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"Cart"}>
      <CartComponents />
    </Layout>
  );
};

export default Cart;
