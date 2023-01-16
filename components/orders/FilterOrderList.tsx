import React, { useEffect } from 'react';
import Select from 'react-select';
// import LoadingSkelleton from '../master/skelleton/LoadingSkelleton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import WarningMessage from '../master/warningMessage/WarningMessage';
import SingleOrder from './SingleOrder';
import { getFilterOptionDataForOrderList, getUserOrderList } from '../../store/order/action';
import ShimmerEffect from '../master/skeleton/ShimmerEffect';

const FilterOrderList = () => {

    const dispatch = useDispatch();
    const { orderList, isLoading, filterOptionList } = useSelector((state) => state.order);
console.log('orderList', orderList)
    useEffect(() => {
        dispatch(getUserOrderList(5))
        dispatch(getFilterOptionDataForOrderList());
    }, [])

    return (
        <>
            <div className="card shadow-sm p-2 mt-3">
                <div className="d-flex align-items-center">
                    <h6>Orders</h6>
                    <h6>Show :</h6>
                    <div className="filter_selection ml-2">
                        <Select
                            className     = "basic-single"
                            placeholder   = "Last 5 Orders"
                            selectedValue = {filterOptionList[0]}
                            defaultValue  = {filterOptionList[0]}
                            isDisabled    = {false}
                            isLoading     = {false}
                            isClearable   = {true}
                            isSearchable  = {true}
                            onChange={(option) => {
                                if (typeof option !== 'undefined' && option !== null) {
                                    dispatch(getUserOrderList(option.value))
                                }
                            }}
                            name    = "color"
                            options = {filterOptionList}
                        />
                    </div>
                </div>
            </div>
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            My Orders
          </caption>
          
            {isLoading && (
                <div className="card shadow-sm mt-3 p-1">
                    <ShimmerEffect/>
                </div>
            )}
            {
                !isLoading && orderList.length === 0 && (
                    <div className="shadow-sm mt-3">
                        <WarningMessage text="Sorry! Order list not found..." />
                    </div>
                )
            }
 
            {
                !isLoading && orderList.length > 0 && orderList.map((item, index) => (
                    <SingleOrder item={item} isManageable={true} key={index + 1} />
                ))
            }

        </>
    );
};

export default FilterOrderList;