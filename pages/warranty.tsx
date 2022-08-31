import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";

const Warranty: NextPage = () => {
  return (
    <Layout title={"Guarantee and Warranty"}>
      <div className="container mx-auto">
        <h2 className="text-4xl mt-10 mb-4 text-primary">Guarantee and Warranty</h2>
        <hr />
        <div className="mt-5">
          <h3 className="font-bold my-6 mb-3">Warranty Devises Policy:</h3>
          <p>Devices warranty only 24 hours. If there is any manufacturer defect, replace the device without delivery fees (all disposable device out of warranty after leave the delivery guy)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Warranty;
