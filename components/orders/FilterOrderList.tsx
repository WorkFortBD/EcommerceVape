import React, { useEffect } from "react";
import Select from "react-select";
// import LoadingSkelleton from '../master/skelleton/LoadingSkelleton.jsx';
import { useDispatch, useSelector } from "react-redux";
import WarningMessage from "../master/warningMessage/WarningMessage";
import SingleOrder from "./SingleOrder";
import {
  getFilterOptionDataForOrderList,
  getUserOrderList,
} from "../../store/order/action";
import TableShimmer from "../master/skeleton/TableShimmer";

const FilterOrderList = () => {
  const dispatch = useDispatch();
  const { orderList, isLoading, filterOptionList } = useSelector(
    (state) => state.order
  );
  useEffect(() => {
    dispatch(getUserOrderList(5));
    dispatch(getFilterOptionDataForOrderList());
  }, []);

  return (
    <>
      <div className="card shadow-sm p-2 mt-3">
        <div className="d-flex align-items-center">
          <h6>Orders</h6>
          <h6>Show :</h6>
          <div className="filter_selection ml-2">
            <Select
              className="basic-single"
              placeholder="Last 5 Orders"
              selectedValue={filterOptionList[0]}
              defaultValue={filterOptionList[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isSearchable={true}
              onChange={(option) => {
                if (typeof option !== "undefined" && option !== null) {
                  dispatch(getUserOrderList(option.value));
                }
              }}
              name="color"
              options={filterOptionList}
            />
          </div>
        </div>
      </div>
      <h1 className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        My Orders
      </h1>
      <div className="p-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              // <div className="card shadow-sm mt-3 p-2">
            //   <div className="animate-pulse">
                <TableShimmer count={4} />
            //    </div>
            )}
            {!isLoading && orderList.length === 0 && (
              <div className="shadow-sm mt-3">
                <WarningMessage text="Sorry! Order list not found..." />
              </div>
            )}

            {!isLoading &&
              orderList.length > 0 &&
              orderList.map((item, index) => (
                <SingleOrder
                  item={item}
                  isManageable={true}
                  key={index + 1}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FilterOrderList;
