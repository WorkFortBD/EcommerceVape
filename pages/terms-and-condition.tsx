import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";

const TermsOfService: NextPage = () => {
  return (
    <Layout title={"Terms of Service"}>
      <div className="container mx-auto p-3">
        <h2 className="text-4xl mt-10 mb-4 text-primary">Terms of Service</h2>
        <hr />
        <div className="mt-5">
          <h3 className="font-bold my-6 mb-3">
            Warranty, Exchange & Refund Polices
          </h3>
          <p>
            We can’t exchange for any opened products. and if there is any wrong
            from our store on your order, So we will change it without any
            delivery fees.
          </p>
          <p>
            After received your order if you would like to exchange or refund
            some items or all the order, You have to pay delivery fees (E-Juice
            & Disposable device not include in exchange or refund policy)
          </p>
          <h3 className="font-bold my-6 mb-3">Exchange & Refund Period:</h3>
          <p>24 hours from the date of receipt</p>
          <h3 className="font-bold my-6 mb-3">Warranty Devises Policy:</h3>
          <p>
            Devices warranty only 24 hours. If there is any manufacturer defect,
            replace the device without delivery fees (all disposable device out
            of warranty after leave the delivery guy)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
