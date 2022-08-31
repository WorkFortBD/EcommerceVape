import type { NextPage } from "next";
import CheckoutComponent from "../components/checkout/CheckoutComponent";
import Layout from "../components/layouts/Layout";

const Checkout: NextPage = () => {
  return (
    <Layout title={"Checkout"}>
      <CheckoutComponent />
    </Layout>
  );
};

export default Checkout;
