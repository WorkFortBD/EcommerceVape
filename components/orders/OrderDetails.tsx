import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import SingleOrder from "./SingleOrder";
import { formatCurrency } from "../../utils/currency";
import { getOrderDetails } from "../../store/order/action";
import DashboardLayout from "../dashboard/DashboardLayout";
import TableShimmer from "../master/skeleton/TableShimmer";
import OrderStatus from "./OrderStatus";
import ProductSpinner from "../master/spinner/ProductSpinner";

const OrderDetails = ({ orderID }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { manageOrder } = router.query;
  const { orderDetails, isLoading } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrderDetails(manageOrder));
  }, []);

  const getItemSubTotal = () => {
    let total = 0;
    if (orderDetails.sale_lines) {
      orderDetails.sale_lines.forEach(item => {
        const singleSubtotal = parseFloat(parseFloat(item.quantity) * parseFloat(item.unit_price));
        total += singleSubtotal;
      });
    }

    return total;
  }

  return (
    <>
      <DashboardLayout title="My Orders">
        {isLoading == true ? <ProductSpinner /> :
          <>
            {orderDetails !== null && (
              <>

                <div className="container mx-auto p-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-md">
                      <h4 className="text-xl font-semibold">Order Invoice No</h4>
                      <p>#{orderDetails.id}</p>
                      <h4 className="text-xl font-semibold mt-4">Final Total</h4>
                      <p>{formatCurrency(orderDetails.final_total)}</p>
                      <h4 className="text-xl font-semibold mt-4">Due Total</h4>
                      <p>{formatCurrency(orderDetails.due_total)}</p>
                      <h4 className="text-xl font-semibold mt-4">Paid Total</h4>
                      <p>{formatCurrency(orderDetails.paid_total)}</p>
                      <h4 className="text-xl font-semibold mt-4">Discount</h4>
                      <p>{formatCurrency(orderDetails.discount_amount === null ? 0 : orderDetails.discount_amount)}</p>
                      <h4 className="text-xl font-semibold mt-4">Shipping Charge</h4>
                      <p>{formatCurrency(orderDetails.shipping_charges)}</p>
                    </div>

                    <div className="bg-white p-4 rounded shadow-md">
                      <h4 className="text-xl font-semibold">Order Status Informations</h4>
                      <p>Order Type: <span className="bg-blue-500 text-white px-2 py-1 rounded">{orderDetails.type}</span></p>
                      <h4 className="text-xl font-semibold mt-4">Current Status</h4>
                      <div className="mt-2">
                        <OrderStatus status={orderDetails?.status ?? 'n/a'} />
                      </div>

                      <h4 className="text-xl font-semibold mt-4">Payment Status</h4>
                      <div className="mt-2">
                        <OrderStatus status={orderDetails?.payment_status ?? 'n/a'} />
                      </div>

                      <h4 className="text-xl font-semibold mt-4">Delivery Status</h4>
                      <div className="mt-2">
                        <OrderStatus status={orderDetails?.delivery_status ?? 'n/a'} />
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded shadow-md">
                      <div className='mb-4'>
                        <a className='bg-red-200 hover:bg-gray-300 text-red-700 py-2 px-4 rounded inline-block' target="_blank" href={`${process.env.NEXT_PUBLIC_API_URL}invoice/${orderDetails.id}`}>
                          Download Invoice
                        </a>
                      </div>

                      <h4 className="text-xl font-semibold mt-4">Delivery Info</h4>
                      {orderDetails.shipping_address !== null && (
                        <div className="mt-2">
                          <h5 className="text-lg font-semibold">Shipping Address</h5>
                          <address>
                            {orderDetails.shipping_street1 !== null ? orderDetails.shipping_street1 + ", " : ""}
                            {orderDetails.shipping_street2 !== null ? orderDetails.shipping_street2 + ", " : ""}
                            {orderDetails.shipping_area !== null ? orderDetails.shipping_area + ", " : ""}
                            {orderDetails.shipping_city !== null ? orderDetails.shipping_city + ", " : ""}
                          </address>
                          <p className="mt-2"><span className="font-semibold">Name:</span> {orderDetails.customer_first_name} {orderDetails.customer_last_name}</p>
                          <p><span className="font-semibold">Phone:</span> {orderDetails.shipping_phone_no}</p>
                          <p><span className="font-semibold">Email:</span> {orderDetails.customer_email ? orderDetails.customer_email : 'Not given'}</p>
                        </div>
                      )}

                      {orderDetails !== null && (
                        <div className="mt-4">
                          <h5 className="text-lg font-semibold">Billing Address</h5>
                          <address>
                            {orderDetails.billing_street1 !== null ? orderDetails.billing_street1 + ", " : ""}
                            {orderDetails.billing_street2 !== null ? orderDetails.billing_street2 + ", " : ""}
                            {orderDetails.billing_area !== null ? orderDetails.billing_area + ", " : ""}
                            {orderDetails.billing_city !== null ? orderDetails.billing_city + ", " : ""}
                          </address>
                          <p className="mt-2"><span className="font-semibold">Name:</span> {orderDetails.customer_first_name} {orderDetails.customer_last_name}</p>
                          <p><span className="font-semibold">Phone:</span> {orderDetails.customer_phone_no}</p>
                          <p><span className="font-semibold">Email:</span> {orderDetails.customer_email ? orderDetails.customer_email : 'Not given'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {typeof orderDetails.items === 'undefined' || orderDetails.items === null && <h4>Loading Order Informations...</h4>}
                  <h3 className="text-2xl mt-5">Product Details</h3>
                  <table className="table-auto w-full border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">SI</th>
                        <th className="px-4 py-2">Sku</th>
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Unit Price X Quantity</th>
                        <th className="px-4 py-2">Total Discount</th>
                        <th className="px-4 py-2">Sub Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.items &&
                        orderDetails.items.map((item: any, index: any) => {
                          return (
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                              <td className="px-4 py-2">{index + 1}</td>
                              <td className="px-4 py-2">{item && item.sku_manual}</td>
                              <td className="px-4 py-2">{(typeof item !== 'undefined' && item !== null) ? item.name : 'N/A'}</td>
                              <td className="px-4 py-2">
                                {(typeof item !== 'undefined' && item.item !== null) &&
                                  <img src={item.featured_url} width={50} alt="" />
                                }
                              </td>
                              <td className="px-4 py-2">{formatCurrency(parseFloat(item.unit_price))} X {formatCurrency(item.quantity, ',', '')}</td>
                              <td className="px-4 py-2">{formatCurrency(parseFloat(item.quantity) * parseFloat(item.discount_amount))}</td>
                              <td className="px-4 py-2">{formatCurrency((parseFloat(item.quantity) * parseFloat(item.unit_price)))}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                    <tfoot className="order-footer-details text-red-500">
                      <tr className="border-t">
                        <td colSpan={6} className="font-bold">Item Sub Total</td>
                        <td>{formatCurrency(getItemSubTotal())}</td>
                      </tr>
                      <tr className="border-t">
                        <td colSpan={6} className="font-bold">Shipping Cost (+)</td>
                        <td>{formatCurrency(orderDetails.shipping_charges)}</td>
                      </tr>
                      <tr className="border-t">
                        <td colSpan={6} className="font-bold">Grand Total</td>
                        <td>{formatCurrency(orderDetails.final_total)}</td>
                      </tr>
                      <tr className="border-t">
                        <td colSpan={6} className="font-bold">10% of Grand Total</td>
                        <td>{floorNum((orderDetails.final_total * 10) / 100)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="mt-3 mb-3">
                  {/* <SingleOrder item={orderDetails} isManageable={false} /> */}
                  {/* <OrderLifeCycle orderID={manageOrder} /> */}
                </div>
              </>
            )}
          </>
        }

      </DashboardLayout>
    </>
  );
};
const floorNum = (val: any) => Math.floor(val)
export default OrderDetails;
