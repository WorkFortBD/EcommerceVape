import Link from "next/link";
import React from "react";
import DashboardLayout from "./DashboardLayout";

type Props = {};

export default function AccountDeatials({}: Props) {
  return (
    <DashboardLayout title="Account Deatials">
      <form action="">
        <div className="ml-3">
          <div className="mt-4">
            <label htmlFor="number" className="text-gray-800">
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
          <div className="flex">
            <div className="basis-1/2">
              <label htmlFor="first-name" className="text-gray-800">
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
              <label htmlFor="lastt-name" className="text-gray-800 ml-2">
                Last name <sub className="text-2xl text-red-500">*</sub>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="last-name"
                className="w-full text-gray-500 border outline-none rounded-md p-2 mt-2 mr-2 ml-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="number" className="text-gray-800">
              Display Name
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
          <p className="text-gray-500">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
          <div className="mt-5">
            <label htmlFor="email" className="text-gray-800">
              Email Address
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
            />
          </div>
        </div>
        <fieldset>
          <legend className="ml-3 mt-5 uppercase text-2xl">
            Password Change
          </legend>
          <div className="ml-3">
            <div className="mt-2">
              <label htmlFor="email" className="text-gray-800">
                Current password (leave blank to leave unchanged)
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-gray-800">
                New password (leave blank to leave unchanged)
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-gray-800">
                Confirm new passwords
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                className="text-gray-500 border w-full outline-none rounded-md p-2 mt-2 mr-2"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </DashboardLayout>
  );
}
