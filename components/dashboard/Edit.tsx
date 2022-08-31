import Link from "next/link";
import React from "react";
import DashboardLayout from "./DashboardLayout";

type Props = {};

export default function Edit({}: Props) {
  return (
    <DashboardLayout title="Edit">
      <div className="ml-5">
        <form action="" className="mt-4">
          <div className="flex">
            <div className="basis-1/2">
              <label htmlFor="first-name">
                First name
                <sub className="text-2xl text-red-500">*</sub>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="first-name"
                className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
              />
            </div>
            <div className="basis-1/2">
              <label htmlFor="lastt-name">
                Last name <sub className="text-2xl text-red-500">*</sub>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="last-name"
                className="w-full text-gray-500 border outline-none rounded-md p-2 mt-2 mr-2 ml-3"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="country">
              Country / Region
              <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="text"
              name="country"
              id="contry"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="street-address">
              Street Address
              <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="text"
              name="address"
              id="street-address"
              placeholder="House number and Street name"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 font-size mr-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="town">
              Town / City <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="text"
              name="town"
              id="town"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="state">
              State / County
              <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="text"
              name="state"
              id="state"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="postcode">Postcode / Zip(optional)</label>
            <br />
            <input
              type="text"
              name="postecode"
              id="postecode"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="number">
              Billing Mobile Number
              <sub className="text-2xl text-red-500">*</sub>
            </label>
            <br />
            <input
              type="text"
              name="number"
              id="number"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="email">Billing Email(optional)</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>
          <button className="mt-3 bg-primary hover:bg-gray-400 text-white p-3 rounded-md uppercase">
            Save Address
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
