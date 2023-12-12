// import { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-creative";

// // import required modules
// import { EffectCreative } from "swiper/modules";
// export default function ProductsSwiper({ images }) {
//   return (
//     <div className="">
//       <Swiper
//         grabCursor={true}
//         effect={"creative"}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: ["-120%", 0, -500],
//           },
//           next: {
//             shadow: true,
//             translate: ["120%", 0, -500],
//           },
//         }}
//         modules={[EffectCreative]}
//         className="productswiper  row"
//       >
//         <SwiperSlide className="">
//           {images.map((img) => (
//             <SwiperSlide>
//               <img
//                 src={img.url}
//                 alt=""
//                 className="img-fluid rounded col-md-2"
//               />
//             </SwiperSlide>
//           ))}
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
import { useRef, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

SwiperCore.use([Autoplay]);

const ProductSwiper = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (swiperRef.current.swiper.autoplay) {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  }, []);

  return (
    <div className="row">
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 5000, // Adjust this value to your preference
          disableOnInteraction: false,
        }}
        speed={500}
        className="col-md-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.url} alt="" className="img-fluid rounded " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
