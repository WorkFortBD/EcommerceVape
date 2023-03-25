import type { NextPage } from "next";
import Link from "next/link";
import SignUp from "../components/auth/SignUp";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Sign Up"}>
      <SignUp/>
    </Layout>
  );
};

export default Home;
