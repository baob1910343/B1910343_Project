import styles from "./styles.module.scss";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { offersAarray } from "../../../data/home";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
export default function Offers() {
  return (
    <div className="image-fluid m-2">
      <div className={styles.offers}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="offers_swiper"
        >
          {offersAarray.map((offer) => (
            <SwiperSlide>
              <Link href="">
                <img src={offer.image} alt="" className="img-fluid " />
              </Link>
              <div className="border rounded text-center bg-warning mb-5 ">
                <span>{offer.price}vnd</span>
                <span>-{offer.discount}%</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
//   <img
//     src={`../../../images/ca/Logo_ayaka1.png`}
//     alt=""
//     className="img-fluid rounded"
//   />
