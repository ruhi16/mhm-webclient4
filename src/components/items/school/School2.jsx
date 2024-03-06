import React from "react";
import SchoolItem from "./SchoolItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SchoolItems } from "./Schools";

function School2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div>
      <section className="max-w-screen-2xl m-8 mx-auto min-h-[50vh] h-[50vh] border border-gray-700 rounded-lg shadow bg-red-400">
        <Slider {...settings}>
          {/* <h1>Hari Narayan Das</h1>
          <h1>abcd</h1>
          <h1>pqrs</h1> */}
          {SchoolItems.map((item) => (
            <SchoolItem item={item} />
          ))}
          {/* <SchoolItem />
          <SchoolItem /> */}
        </Slider>
      </section>
    </div>
  );
}

export default School2;
