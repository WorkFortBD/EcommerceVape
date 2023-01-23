import React from "react";

import dynamic from "next/dynamic";
import Layout from "../../components/layouts/Layout";
const OrderDetails = dynamic(() =>
  import("../../components/orders/OrderDetails")
);

export default function ManageOrder() {
  return (
    <Layout title={"My Orders"}>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-3">
                    <ProfileSideBar />
                </div> */}
          <div className="col-md-9">
            <OrderDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
}
