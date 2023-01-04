/**Internal dependencies */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from "./DashboardLayout";
/**External Dependencies */
import {
  faList,
  faMap,
  faSignOutAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getUserDataAction } from '../../store/users/action';
import { isSignedOut } from '../../store/auth/action';


export default function MyAccount() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  // console.log('userData', userData)
  // const {first_name,last_name,email}=userData;
  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);
  const handleLogOut = () => {
    dispatch(isSignedOut());
    window.location.replace("/");
  }
  return (
    <DashboardLayout title="My Account">
      <div className="p-4 pt-10">
        <h3>
          Hello <strong>{userData.first_name +' '+ userData.last_name??'N/A'}</strong>
          <Link href="#" onClick={()=>handleLogOut()}>
            <span className="text-blue-400 cursor-pointer">
              (not {userData.first_name??'N/A'}? Log out)
            </span>
          </Link>
        </h3>

        <p className="mt-4">
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>

        <div className="mt-4 flex md:flex-row flex-wrap justify-center items-center">
          <div className="basis-1/2 md:basis-1/3">
            <div className="transition w-full min-h-[50px] min-w-[200px] shadow hover:shadow-lg p-4 m-4 ml-0 flex flex-col opacity-75 items-center justify-center">
              <Link href={"my-order"}>
                <div className="cursor-pointer hover:opacity-100">
                  <FontAwesomeIcon
                    icon={faList}
                    size={"3x"}
                    width={50}
                    className="text-slate-400"
                  />
                  <h2 className="text-2xl mt-3 text-center text-slate-500">Orders</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3">
            <div className="transition w-full min-h-[50px] min-w-[200px] shadow hover:shadow-lg p-2 md:p-4 m-2 md:m-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faMap}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-center text-slate-500">Address</h2>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3">
            <div className="transition w-full min-h-[50px] min-w-[200px] shadow hover:shadow-lg p-2 md:p-4 m-2 md:m-6 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faUserAlt}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-center text-slate-500">Account Details</h2>
            </div>
          </div>
          <div className="basis-1/2 md:basis-1/3">
            <div className="transition w-full min-h-[50px] min-w-[200px] shadow hover:shadow-lg p-2 md:p-4 m-2 md:m-4 flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size={"3x"}
                width={50}
                className="text-slate-400"
              />
              <h2 className="text-2xl mt-3 text-center text-slate-500">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
