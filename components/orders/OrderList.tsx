import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
// import { handleCancelOrder } from "./_redux/action/OrderAction.js";
import { useDispatch, useSelector } from "react-redux";
import { handleCancelOrder } from "../../store/order/action";
import { formatCurrency } from "../../utils/currency";

const OrderList = ({ item, isManageable = true, index }) => {
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
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{item.id}</td>
        <td className="px-6 py-4">
          {item.customer_first_name} {item.customer_last_name}
        </td>
        <td className="px-6 py-4">{item.customer_email}</td>
        <td className="px-6 py-4">{formatCurrency(item.due_total)}</td>
        <td className="px-6 py-4">{formatCurrency(item.final_total)}</td>
        <td className="px-6 py-4 text-right">
        <Link href={`/orders/${item.id}`}>
          {/* <a
            href=""
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          > */}
            details
          {/* </a> */}
          </Link>
        </td>
      </tr>
      
    </>
  );
};

export default OrderList;
