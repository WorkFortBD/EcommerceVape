import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import AddressComponet from "../components/dashboard/AddressComponent";

const Cart: NextPage = () => {
  return (
    <Layout title={"Address"}>
      <AddressComponet />
    </Layout>
  );
};

export default Cart;
