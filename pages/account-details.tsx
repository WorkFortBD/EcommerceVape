import type { NextPage } from "next";
import AccountDetails from "../components/dashboard/AccountDetails";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"Account Details"}>
      <AccountDetails />
    </Layout>
  );
};

export default Cart;
