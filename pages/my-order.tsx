import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import MyOrder from "../components/orders/MyOrder";

const Cart: NextPage = () => {
  return (
    <Layout title={"My Orders"}>
      <MyOrder />
    </Layout>
  );
};

export default Cart;
