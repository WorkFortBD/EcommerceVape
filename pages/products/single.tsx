import type { NextPage } from "next";
import Layout from "../../components/layouts/Layout";
import ProductDeatails from "../../components/products/ProductDeatails";

const Cart: NextPage = () => {
  return (
    <Layout title={"Product Deatails"}>
      <ProductDeatails />
    </Layout>
  );
};

export default Cart;
