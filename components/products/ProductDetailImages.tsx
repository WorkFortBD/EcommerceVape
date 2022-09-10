import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";

interface Props {}

export default function ProductDetailImages({  }: Props): ReactElement {
  const [images, setImages] = useState([
    "/images/products/4.jpeg",
    "/images/products/5.jpeg",
    "/images/products/6.jpeg",
  ]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const selectPreviousImage = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(images.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const selectNextImage = () => {
    if (activeImageIndex === images.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  return (
    <div className="flex flex-wrap flex-1 group ">
      <div className="basis-1/5">
        {images.map((image, index) =>
          <img
            src={image}
            className="w-full h-[4.5rem] md:h-28 mb-2 cursor-pointer"
            key={index}
            onClick={() => setActiveImageIndex(index)}
          />
        )}
      </div>

      <div className="basis-4/5 relative">
        <div className="absolute top-[45%] left-10">
          <div className="bg-white  rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faChevronLeft}
              width={16}
              className="text-slate-500 hover:text-primary ml-3 py-2 pt-3 items-center cursor-pointer"
              onClick={selectPreviousImage}
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <img
            src={images[activeImageIndex]}
            className="w-full transition-all mb-2 px-5"
          />
        </div>

        <div className="absolute top-[45%] right-10">
          <div className="bg-white rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faChevronRight}
              width={16}
              className="text-slate-500 hover:text-primary ml-3 py-2 pt-3 items-center cursor-pointer"
              onClick={selectNextImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
