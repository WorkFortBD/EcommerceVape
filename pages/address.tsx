import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import AddressComponent from "../components/dashboard/AddressComponent";

const Cart: NextPage = () => {
  return (
    <Layout title={"Address"}>
      <AddressComponent />
    </Layout>
  );
};

export default Cart;
