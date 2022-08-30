import type { NextPage } from "next";
import Edit from "../components/dashboard/Edit";
import MyAccount from "../components/dashboard/MyAccount";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"edit"}>
      <Edit />
    </Layout>
  );
};

export default Cart;
