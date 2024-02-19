import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { simillar_products } from "../../../data/products";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Link } from "@mui/material";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper row"
      >
        {simillar_products.map((p) => (
          <SwiperSlide>
            <Link href="">
              <img src={p} alt="" className="img-fluid" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
