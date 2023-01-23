import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import SingleOrder from './SingleOrder';
import { formatCurrency } from '../../utils/currency';
import { getOrderDetails } from '../../store/order/action';
import DashboardLayout from '../dashboard/DashboardLayout';

const OrderDetails = ({ orderID }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { manageOrder } = router.query;
    const { orderDetails, isLoading } = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getOrderDetails(manageOrder))
    }, [])

    // const handleClick = (event) => {
    //     setShowTooltip(!showTooltip);
    //     setTarget(event.target);
    // };

    return (
        <>
           <DashboardLayout title="My Orders">
            {
                orderDetails !== null && (
                    <>
                        <div className="card shadow-sm p-2">
                            <div className="d-flex justify-content-between">
                                <div className="details_heading">
                                    <div className="order_id">Order #{orderDetails.id}</div>
                                    <small className="text-secondary">Placed on {dayjs(orderDetails.transaction_date).format("dddd, MMMM Do YYYY")}</small>
                                </div>
                                <div className="">
                                    <small className="order_total_price"><span className="text-secondary">Due Total</span>&nbsp; &nbsp; :  {formatCurrency(orderDetails.due_total)}</small>
                                    <small className="order_total_price"><span className="text-secondary">Paid Total</span>&nbsp; &nbsp; :  {formatCurrency(orderDetails.paid_total)}</small>
                                    <small className="order_total_price"><span className="text-secondary">Grand Total </span> :  {formatCurrency(orderDetails.final_total)}</small>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 mb-3">
                            <SingleOrder item={orderDetails} isManageable={false} />
                            {/* <OrderLifeCycle orderID={manageOrder} /> */}
                        </div>
                    </>
                )
            }
</DashboardLayout>
        </>
    );
};

export default OrderDetails;