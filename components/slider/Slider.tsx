/**
 * External dependencies.
 */
import { Carousel } from "flowbite-react";
import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootReducer } from "../../interfaces/reducers";
import { getSliderAction } from "../../store/slider/action";
import BannerLoading from "../master/skeleton/BannerLoading";

/**
 * Internal dependencies.
 */

interface Props {}

export default function Slider({}: Props): ReactElement {
  const { sliders, sliderLoading } = useSelector(
    (state: IRootReducer) => state.slider
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // New arrival products.
    dispatch(getSliderAction());
  }, []);

  return (
    <div className="relative -mt-16 md:mt-0 -mb-16 md:mb-0 h-64 md:h-96 overflow-hidden rounded-lg">
      {sliderLoading && <BannerLoading count={4} />}
      <Carousel indicators={false}>
        {sliders.map((slider, index) => (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}images/sliders/` + slider.image}
            key={index}
            className="w-full"
            alt={slider.title}
          />
        ))}
      </Carousel>
    </div>
  );
}
