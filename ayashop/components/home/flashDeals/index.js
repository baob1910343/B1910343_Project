import { ThunderboltOutlined } from "@ant-design/icons";
import Countdown from "../../countdown";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { flashDealsArray } from "../../../data/home";
import FlashCard from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
export default function FlashDeadls() {
  return (
    <div className="container mt-2">
      <div className="row bg-warning rounded text-white justify-content-between text-center">
        <div className="h1 col mt-2">
          FLASH SALE <ThunderboltOutlined />
        </div>
        <div className="col mt-2 ">
          <Countdown date={new Date(2023, 11, 8)} />
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals mt-3"
      >
        {flashDealsArray.map((product, i) => (
          <SwiperSlide>
            <FlashCard product={product} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
