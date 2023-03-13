import React from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';

function MyCarousel() {
  const options = {
    items: 3,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  };

  const items = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
    <div key="5">Item 5</div>,
  ];

  return (
    <OwlCarousel options={options}>
      {items}
    </OwlCarousel>
  );
}

export default MyCarousel;