import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import { CategoryComponent } from "../components/category/CategoryComponent";

const Home: NextPage = () => {
  return (
    <Layout title={"Category"}>
      <CategoryComponent />
    </Layout>
  );
};

export default Home;
