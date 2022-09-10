import { Carousel } from "flowbite-react";
import React, { ReactElement } from "react";

interface Props {}

export default function Slider({  }: Props): ReactElement {
  const sliders = [
    {
      image: "/images/sliders/slider.png",
      title: ""
    },
    {
      image: "/images/sliders/slider.jpg",
      title: ""
    },
    {
      image: "/images/sliders/slider.jpg",
      title: ""
    }
  ];

  return (
    <div className="relative -mt-16 md:mt-0 -mb-16 md:mb-0 h-64 md:h-96 overflow-hidden rounded-lg">
      <Carousel indicators={false}>
        {sliders.map((slider, index) =>
          <img
            src={slider.image}
            key={index}
            className="w-full"
            alt={slider.title}
          />
        )}
      </Carousel>
    </div>
  );
}
