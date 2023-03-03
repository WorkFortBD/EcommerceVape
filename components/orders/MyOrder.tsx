import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import FilterOrderList from "./FilterOrderList";
import { getUserOrderList } from '../../store/order/action';

type Props = {};

export default function MyOrder({}: Props) {

  const dispatch = useDispatch();
  const { orderList, isLoading } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getUserOrderList(5))
}, [])

  return (
    <DashboardLayout title="My Orders">
      <div className="p-3">
        {/* <h3>
          <div
            className="flex p-4 mb-4 text-sm bg-red-300 rounded-lg dark:bg-red-200"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="">
              <u className="font-medium text-xl text-white">Browse Products </u>
            </span>
          </div>
        </h3> */}

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="order_filter_section">
                <FilterOrderList orderList={orderList} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
