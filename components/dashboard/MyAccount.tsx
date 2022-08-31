import {
  faList,
  faMap,
  faSignOutAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import DashboardLayout from "./DashboardLayout";

export default function MyAccount() {
  return (
    <DashboardLayout title="My Account">
      <div className="p-4">
        <h3>
          Hello <strong>Jahangir</strong>{" "}
          <Link href="/">
            <span className="text-blue-400 cursor-pointer">
              (not Jahangir? Log out)
            </span>
          </Link>
        </h3>

        <p className="mt-4">
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>

        <div className="mt-4 flex flex-col md:flex-row flex-wrap justify-center items-center">
          <div className="basis-1/3">
            <div className="transition shadow hover:shadow-lg p-4 m-4 ml-0 flex flex-col opacity-75 items-center justify-center">
              <Link href={"my-order"}>
                <div className="cursor-pointer hover:opacity-100">
                  <FontAwesomeIcon
                    icon={faList}
                    size={"3x"}
                    width={50}
                    className="text-slate-400"
                  />
                  <h2 className="text-2xl mt-3 text-slate-500">Orders</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="transition shadow hover:shadow-lg p-4 m-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faMap}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-slate-500">Address</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="transition shadow hover:shadow-lg p-4 m-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faUserAlt}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-slate-500">Account Details</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="transition shadow hover:shadow-lg p-4 m-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-slate-500">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
