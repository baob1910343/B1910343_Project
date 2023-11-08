import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
export default function ProductsSwiper({ header, products }) {
  return (
    <div className="container mt-3">
      <div className="row bg-warning rounded">
        {header && <div className="">{header}</div>}
      </div>
      <div className="row ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="products_swiper "
        >
          {products.map((product) => (
            <SwiperSlide className="mt-1">
              <img src={product.image} alt="" className="img-fluid rounded" />
              <h6>{product.name}</h6>
              <span className="text-danger">
                {product.price && <b>{product.price}vnd</b>}
              </span>
            </SwiperSlide> // neu ko co gia se kohien thi j ca
          ))}
        </Swiper>
      </div>
    </div>
  );
}
