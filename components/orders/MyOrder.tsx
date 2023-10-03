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
  console.log('orderList', orderList)
  useEffect(() => {
    dispatch(getUserOrderList(5))
}, [])

  return (
    <DashboardLayout title="My Orders">
      <div className="p-3">

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
