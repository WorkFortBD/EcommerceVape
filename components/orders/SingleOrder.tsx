import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleCancelOrder } from "../../store/order/action";
// import SimpleModal from '../master/modal/SimpleModal';
// import SimpleConfirmComponent from '../master/modal/SimpleConfirmComponent.js';

const SingleOrder = ({ item, isManageable = true }) => {
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
      <div className="flex">
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4 mr-4">
          {isManageable && (
            <>
              <h6 className="order">
                Order : <span className="text-primary">#{item.id}</span>
              </h6>
              <p className="text-secondary">
                Placed on{" "}
                {dayjs(item.transaction_date).format("dddd, MMMM Do YYYY")}
              </p>
            </>
          )}
          {!isManageable && (
            <h6>
              {item.delivery_status && item.delivery_status == "not_delivered"
                ? "Not Delivered"
                : "Delivered"}
            </h6>
          )}
        </div>
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4">
          {isManageable && (
            <Link href={`/order/${item.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 float-right">
                <i className="far fa-eye"></i> View
              </button>
            </Link>
          )}
          {/* <Link href={`/order/invoice/${item.id}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 float-right">
              <i className="fas fa-print"></i> Invoice
            </button>
          </Link> */}
        </div>
      </div>
      <div className="flex">
        {item.items &&
          item.items.length > 0 &&
          item.items.map((product, indexProduct) => (
            <div className="w-1/2bg-white square-lg p-6 mb-10">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                alt="Profile Picture"
                className="w-32 square-full mx-auto mb-4 mt-0 mr-4 float-left"
              />
              <h2 className="text-lg font-medium mb-2">
                <span className="bg-red-500 text-white square-full px-3 py-1">
                  Product Name:
                </span>{" "}
                {product.name}
              </h2>
              <p className="text-gray-600">
                <span className="bg-red-500 text-white square-full px-3 py-1">
                  Quantity:
                </span>{" "}
                {product.quantity}
              </p>
              <p className="text-gray-600">
              <span className="font-bold"> Payment:{" "}</span>
                <span
                  className={`bg-${
                    item.payment_status === "paid" ? "green-600" : "sky-700"
                  }`}
                >
                  {item.payment_status}
                </span>
              </p>
              <p className="text-gray-600">
               <span className="font-bold"> Order:{" "}</span>
                <span
                          className={`badge badge-${
                            item.payment_status === "completed"
                              ? "success"
                              : "secondary"
                          }`}
                        >
                          {item.status}
                        </span>
              </p>
              {item.is_suspend == 0 && (
                      <div className="col-lg-5 order-status-text">
                        <p className="text-success">
                          Estimated Delivery By{" "}
                          {dayjs(product.approx_delivery_date).format(
                            "dddd, MMMM Do YYYY"
                          )}
                        </p>
                      </div>
                    )}
            </div>
          ))}
      </div>
    </>
  );
};

export default SingleOrder;
