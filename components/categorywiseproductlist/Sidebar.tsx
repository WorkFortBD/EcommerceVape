import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { getFilteredProducts } from "../../store/category/action";
import { parseFilterString } from "../../helper/parse-filter-query";

const Sidebar = (filterParams) => {
  const router = useRouter();
  filterParams = filterParams.filterParams;
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([100, 500]);

  useEffect(() => {
    dispatch(getFilteredProducts(filterParams));
  }, [filterParams]);

  function handlePriceRangeChange(value) {
    router.replace({
      query: parseFilterString(router.query, {
        min_price: value[0],
        max_price: value[1],
      }),
    });
    setPriceRange(value);
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-slate-50 w-full md:w-64 p-2">
        <h1 className="text-xl font-bold mb-4">Filter</h1>
        <div className="my-4">
          <label className="block text-sm font-bold text-lg">Price Range</label>
          <div className="flex items-center mt-4">
            <span className="mr-2">${priceRange[0]}</span>
            <Slider
              min={0}
              max={1000}
              range={true}
              defaultValue={[100, 500]}
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
            <span className="ml-2">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Sidebar;
