import type { NextPage } from "next";
import CheckoutComponents from "../components/checkout/CheckoutComponents";
import Layout from "../components/layouts/Layout";

const Checkout: NextPage = () => {
  return (
    <Layout title={"Checkout"}>
      <CheckoutComponents />
    </Layout>
  );
};

export default Checkout;
