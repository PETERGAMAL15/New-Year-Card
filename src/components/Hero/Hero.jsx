// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper/modules";

import React from "react";

import "./Hero.css";
import HeroSlide from "../HeroSlide/HeroSlide";
import Sci from "../Sci/Sci";

const slideData = [
  {
    _id: 1,
    bgImg: "../assets/slides/xmas-1.jpg",
    title: "Merry Christmas My Friends",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: true,
  },
  {
    _id: 2,
    bgImg: "../assets/slides/xmas-2.jpg",
    title: "It's Christmas Time Now",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 3,
    bgImg: "../assets/slides/xmas-3.jpg",
    title: "Meet Your Family at Christmas",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
  {
    _id: 4,
    bgImg: "../assets/slides/xmas-4.jpg",
    title: "Exciting Moment of a Year",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
    active: false,
  },
];

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className="mySwiper">
        {slideData &&
          slideData.length > 0 &&
          slideData.map((slide) => (
            <SwiperSlide key={slide._id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Sci />
    </>
  );
};

export default Hero;
