import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";

interface Props {}

export default function ProductDetailImages({}: Props): ReactElement {
  const [images, setImages] = useState([
    "https://dukhanstore.com/wp-content/uploads/2020/08/wismec-1598737683317-600x600.jpg",
    "https://dukhanstore.com/wp-content/uploads/2020/08/20200830_005556-600x600.jpg",
    "https://dukhanstore.com/wp-content/uploads/2022/08/983D4A20-A79D-4EBE-BB92-E128063C85C9-150x150.jpeg",
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
    <div className="flex flex-wrap flex-1">
      <div className="basis-1/5">
        {images.map((image, index) => (
          <img
            src={image}
            className="w-full h-20 mb-2"
            key={index}
            onClick={() => setActiveImageIndex(index)}
          />
        ))}
      </div>

      <div className="basis-4/5 relative">
        <div className="absolute top-[45%] left-10">
          <div className="bg-white rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faChevronLeft}
              width={16}
              className="text-slate-500 ml-3 py-2 items-center"
              onClick={selectPreviousImage}
            />
          </div>
        </div>
        <img
          src={images[activeImageIndex]}
          className="w-full transition-all mb-2 px-5"
        />
        <div className="absolute top-[45%] right-10">
          <div className="bg-white rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faChevronRight}
              width={16}
              className="text-slate-500 ml-3 py-2 items-center"
              onClick={selectNextImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
