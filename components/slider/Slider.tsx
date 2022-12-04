/**
 * External dependencies.
 */
import { Carousel } from "flowbite-react";
import React, { ReactElement,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { IRootReducer } from "../../interfaces/reducers";
import { getSliderAction } from "../../store/slider/action";

/**
 * Internal dependencies.
 */

interface Props {}

export default function Slider({  }: Props): ReactElement {
  const { sliders } = useSelector((state: IRootReducer) => state.slider);
  const dispatch                = useDispatch();
  console.log('sliders',sliders);
  useEffect(() => {
    // New arrival products.
    dispatch(getSliderAction());
  }, []);

  return (
    <div className="relative -mt-16 md:mt-0 -mb-16 md:mb-0 h-64 md:h-96 overflow-hidden rounded-lg">
      <Carousel indicators={false}>
        {sliders.map((slider, index) =>
          <img
            src={`http://localhost:8000/images/sliders/`+slider.image}
            key={index}
            className="w-full"
            alt={slider.title}
          />
        )}
      </Carousel>
    </div>
  );
}
