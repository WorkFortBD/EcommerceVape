import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";

const ReturnPolicy: NextPage = () => {
  return (
    <Layout title={"Return Policy"}>
      <div className="container mx-auto">
        <h2 className="text-4xl mt-10 mb-4 text-primary">Return Policy</h2>
        <hr />
        <div className="mt-5">
          <h3 className="font-bold my-6 mb-3">Exchange & Refund Period:</h3>
          <p>24 hours from the date of receipt</p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
