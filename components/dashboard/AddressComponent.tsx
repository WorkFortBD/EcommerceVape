import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "./DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddressAction, getUserDataAction } from "../../store/users/action";

type Props = {};

export default function AddressComponent({ }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData, userAddress } = useSelector((state) => state.user);
  console.log('userAddress', userAddress)
  useEffect(() => {
    dispatch(getUserAddressAction(userData?.id));
    dispatch(getUserDataAction());
  }, []);

  return (
    <DashboardLayout title="Address">
      <div className="ml-5">
        <p className="text-gray-500 mt-10">
          The following addresses will be used on the checkout page by default.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userAddress?.data &&
            userAddress.data.map((address:any, index:number) => (
              <div
                key={index}
                className="bg-green-100 p-4 rounded shadow-md"
              >
                <h4 className="text-xl font-semibold mt-4">Address {index + 1}</h4>
                {address.type === 'shipping_address' ? (
                  <div className="mt-2">
                    <h5 className="text-lg font-semibold">Shipping Address</h5>
                    <address>
                      {address.street1 !== null ? address.street1 + ", " : ""}
                      {address.street2 !== null ? address.street2 + ", " : ""}
                      {address.area !== null ? address.area + ", " : ""}
                      {address.city !== null ? address.city + ", " : ""}
                    </address>
                    <p className="mt-2">
                      <span className="font-semibold">Name:{address.name}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Phone:{address.phone_no}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Email:{userData.email}</span>
                    </p>
                  </div>
                ) : address.type === 'billing_address' ? (
                  <div className="mt-2">
                    <h5 className="text-lg font-semibold">Billing Address</h5>
                    <address>
                      {address.street1 !== null ? address.street1 + ", " : ""}
                      {address.street2 !== null ? address.street2 + ", " : ""}
                      {address.area !== null ? address.area + ", " : ""}
                      {address.city !== null ? address.city + ", " : ""}
                    </address>
                    <p className="mt-2">
                      <span className="font-semibold">Name:{address.name}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Phone:{address.phone_no}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Email:{userData.email}</span>
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
        </div>

        {/* <div className="flex mt-5">
          <h2 className="text-3xl uppercase text-gray-600">Billing address</h2>
          <Link href="edit">
            <button className="ml-4 bg-green-600 px-4 rounded-2xl text-white hover:text-primary">
              Edit
            </button>
          </Link>
        </div>
        <p className="text-gray-400 mt-2">Jahangir</p> */}
      </div>
    </DashboardLayout>
  );
}
