import type { NextPage } from "next";
import AccountDeatials from "../components/dashboard/AccountDeatials";
import Layout from "../components/layouts/Layout";

const Cart: NextPage = () => {
  return (
    <Layout title={"Account Deatials"}>
      <AccountDeatials />
    </Layout>
  );
};

export default Cart;
