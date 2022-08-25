import { Carousel } from "flowbite-react";
import React, { ReactElement } from "react";

interface Props {}

export default function Slider({}: Props): ReactElement {
  const sliders = [
    {
      image: "/images/sliders/slider.png",
      title: "",
    },
    {
      image: "/images/sliders/slider.jpg",
      title: "",
    },
    {
      image: "/images/sliders/slider.jpg",
      title: "",
    },
  ];

  return (
    <div>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <Carousel indicators={false}>
          {sliders.map((slider, index) => (
            <img
              src={slider.image}
              key={index}
              className="w-full"
              alt={slider.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
