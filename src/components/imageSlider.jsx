import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function imageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    'image1',
    'image-2.jpg',
    'image-3.jpg',
    'image-4.jpg',
    'image-5.jpg',
    'image-6.jpg'
  ];
  return (
    <div className="container mx-auto px-4 py-6">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <div key={number} className="p-2">
            <img
              src={`https://via.placeholder.com/300x200?text=Image+${number}`}
              alt={`Slide ${number}`}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

