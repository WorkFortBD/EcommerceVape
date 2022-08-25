import type { NextPage } from "next";
import HomeComponent from "../components/home/HomeComponent";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Home Page"}>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
