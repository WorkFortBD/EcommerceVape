import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingPlaceHolder = (props) => {
  let placeHolder = Array.from({ length: props.count }).map((_, index) => (
    <div className="flex-row max-w-[285px] group mb-6 border border-gray-100 shadow-sm rounded-lg mr-3 transition hover:shadow-md group-hover:opacity-75 max-w-[230px]">
        <div className="overflow-hidden">
          <div className={props.className ? props.className : ""} key={index}>
        <Skeleton width={props.width} height={props.height} />
      </div>   
        </div>
       
    </div>
      
  ));

  return placeHolder;
};

export default LoadingPlaceHolder;
