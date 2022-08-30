import Link from "next/link";
import React from "react";
import DashboardLayout from "./DashboardLayout";
import Edit from "./Edit";

type Props = {};

export default function AddressComponet({}: Props) {
  return (
    <DashboardLayout title="Address">
      <div className="ml-5">
        <p className="text-gray-500">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="flex mt-5">
          <h2 className="text-3xl uppercase text-gray-600">Billing address</h2>
          <Link href="edit">
            <button className="ml-4 bg-green-600 px-4 rounded-2xl text-white hover:text-primary">
              Edit
            </button>
          </Link>
        </div>
        <p className="text-gray-400 mt-2">Jahangir</p>
      </div>
    </DashboardLayout>
  );
}
