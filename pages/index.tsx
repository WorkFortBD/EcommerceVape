import type { NextPage } from "next";
import HomeComponent from "../components/home/HomeComponent";
import Layout from "../components/layouts/Layout";
import content from '../content.json';

const Home: NextPage = () => {
  return (
    <Layout title={content.name}>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
