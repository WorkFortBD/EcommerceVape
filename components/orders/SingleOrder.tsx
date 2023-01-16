import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
// import { handleCancelOrder } from "./_redux/action/OrderAction.js";
import { useDispatch, useSelector } from "react-redux";
import { handleCancelOrder } from "../../store/order/action";
import { formatCurrency } from "../../utils/currency";

const SingleOrder = ({ item, isManageable = true,key }) => {
    console.log('key', key)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [orderItem, setOrderItem] = useState(null);
  const userData = useSelector((state) => state.user.userData);
  const { isDeleting } = useSelector((state) => state.order);

  const toggleShowHandler = (item) => {
    setShow((preState) => !preState);
    setOrderItem(item);
  };

  const cancelOrder = () => {
    if (userData !== null) {
      dispatch(handleCancelOrder(orderItem.id, toggleShowHandler, userData.id));
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th>SL</th>
              <th scope="col" className="px-6 py-3">
               Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Due Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Final Payment
              </th>
              <th scope="col" className="px-6 py-3">
                <span >Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key}
              </th>
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.customer_first_name}{" "}{item.customer_last_name}</td>
              <td className="px-6 py-4">{item.customer_email}</td>
              <td className="px-6 py-4">{formatCurrency(item.due_total)}</td>
              <td className="px-6 py-4">{formatCurrency(item.final_total)}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  details
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleOrder;
