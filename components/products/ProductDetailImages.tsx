import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import { IProductImage } from "../../interfaces/products";

interface Props {
  productImage: IProductImage
}

export default function ProductDetailImages({ productImage }: Props): ReactElement {
  const [images, setImages] = useState(productImage);

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
    <div className="flex flex-wrap flex-1 group">
      <div className="w-full md:w-4/5 relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-3 md:left-10">
          <div className="bg-white rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faChevronLeft}
              width={16}
              className="text-slate-500 hover:text-primary ml-3 py-2 pt-3 items-center cursor-pointer"
              onClick={selectPreviousImage}
            />
          </div>
        </div>

        <div className="overflow-hidden">
          {images &&
            <img
              src={images[activeImageIndex] !== undefined ? `${process.env.NEXT_PUBLIC_URL}images/products/` + images[activeImageIndex].image : `${process.env.NEXT_PUBLIC_URL}images/products/default.jpg`}
              className="w-full transition-all mb-2 px-5"
            />
          }

        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-3 md:right-10">
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

      <div className="md:w-1/5 ml-5">
        {images && images.map((image, index) =>
          <img
            src={`${process.env.NEXT_PUBLIC_URL}images/products/` + image.image}
            className="w-full h-[4.5rem] md:h-28 mb-2 cursor-pointer"
            key={index}
            onClick={() => setActiveImageIndex(index)}
          />
        )}
      </div>
    </div>

  );
}
