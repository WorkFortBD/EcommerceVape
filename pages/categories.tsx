import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import { CategoryComponent } from "../components/category/CategoryComponent";
import { Head } from "next/document";

const Home: NextPage = () => {
  return (
    <Layout title={"Category"}>
      <Head>
        <link rel="canonical" href="https://vapestoreksa.com" />
      </Head>
      <CategoryComponent />
    </Layout>
  );
};

export default Home;
