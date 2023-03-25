import type { NextPage } from "next";
import SignIn from "../components/auth/SignIn";
import Layout from "../components/layouts/Layout";

const Login: NextPage = () => {
  return (
    <Layout title={"Sign IN"}>
      <SignIn />
    </Layout>
  );
};

export default Login;
