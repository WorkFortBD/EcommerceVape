import type { NextPage } from "next";
import MyAccount from "../components/dashboard/MyAccount";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"My Account"}>
      <MyAccount />
    </Layout>
  );
};

export default Cart;
