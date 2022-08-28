import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import WishList from "../components/wishlist/WishList";

const Cart: NextPage = () => {
  return (
    <Layout title={"Wishlist"}>
      <WishList />
    </Layout>
  );
};

export default Cart;
