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
          <Link href={`/order/invoice/${item.id}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 float-right">
              <i className="fas fa-print"></i> Invoice
            </button>
          </Link>
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

      {/* <div className="card shadow-sm mt-2 mb-2">
        <div className="row p-2">
          <div className="col-lg-6">
            <div className="order_header">
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
                  {item.delivery_status &&
                  item.delivery_status == "not_delivered"
                    ? "Not Delivered"
                    : "Delivered"}
                </h6>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="float-right">
              <div className="d-flex mb-2">
                {isManageable && (
                  <Link href={`/order/${item.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
                        <i className="far fa-eye"></i> View
                      </button>
                  </Link>
                )}
                <Link href={`/order/invoice/${item.id}`}>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">
                      <i className="fas fa-print"></i> Invoice
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="order_product_list p-2">
          {item.items &&
            item.items.length > 0 &&
            item.items.map((product, indexProduct) => (
              <div className="row mt-2 grid justify-items-center" key={indexProduct}>
                <div className="grid-auto-rows: auto">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        style={{ maxHeight: "100px" }}
                        src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                        alt="product img"
                        className="img-fluid img-thumbnail"
                      />
                    </div>
                    <div className="col-sm-8 text-center mt-2">
                      <h5 className="order_product_title">{product.name}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="row">
                    <div className="col-lg-3 col-5">
                      <p className="order_product_qty">
                        <span className="text-secondary">Qty : </span>{" "}
                        {product.quantity}
                      </p>
                    </div>
                    <div className="col-lg-4 col-7">
                      <div className="p-1">
                        Payment:
                        <span
                          className={`badge badge-${
                            item.payment_status === "paid"
                              ? "success"
                              : "primary"
                          }`}
                        >
                          {item.payment_status}
                        </span>
                        <br />
                        Order:
                        <span
                          className={`badge badge-${
                            item.payment_status === "completed"
                              ? "success"
                              : "secondary"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
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
                </div>
                </div>
                
              </div>
            ))}
        </div>
      </div> */}

      {/* <SimpleModal
                size="md"
                show={show}
                handleClose={toggleShowHandler}
            >
                <SimpleConfirmComponent
                    text="Are you sure to cancel your order ?"
                    isLoading={isDeleting}
                    confirmClick={cancelOrder}
                    closeModal={toggleShowHandler}
                    confirmBtnVariant="simple_btn_bg"
                    closeBtnVariant="secondary"
                />
            </SimpleModal> */}
    </>
  );
};

export default SingleOrder;
