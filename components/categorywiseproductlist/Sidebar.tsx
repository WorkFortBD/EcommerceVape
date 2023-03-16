import React, { useEffect, useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { getFilteredProducts } from "../../store/category/action";
import { useDispatch } from "react-redux";

const Sidebar = (filterParams) => {
  filterParams=filterParams.filterParams;
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([100, 500]);

  useEffect(() => {
    return () => {
      dispatch(getFilteredProducts(filterParams));
    };
  }, []);

  function handlePriceRangeChange(value) {
    filterParams["max_price"]=value[1]
    filterParams["min_price"]=value[0]
    setPriceRange(value);
  }

  return (
    <div className="flex h-screen">
  <div className="bg-red-600 text-white w-64 p-4">
    <h1 className="text-xl font-bold mb-4">Filter</h1>
    <div className="mb-4">
      <label for="price-range" className="block text-sm font-bold text-lg">Price Range</label>
      <div className="flex items-center">
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
  <div className="flex-1">
  </div>
</div>

  );
};

export default Sidebar;
