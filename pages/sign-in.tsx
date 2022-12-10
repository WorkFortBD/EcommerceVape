import type { NextPage } from "next";
import Link from "next/link";
import SignIn from "../components/auth/Signin";
import Layout from "../components/layouts/Layout";

const Login: NextPage = () => {
  return (
    <Layout title={"Sing Up"}>
      <SignIn />
    </Layout>
  );
};

export default Login;
