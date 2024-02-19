import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import styles from "./styles.module.scss";
export default function MainSwiper({ images, activeImg }) {
  const [active, setActive] = useState(0);
  return (
    <div className="container ">
      <div className="row">
        <div className="">
          <div className={styles.swiper}>
            <div className={styles.swiper__active}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    isFluidWidth: true,
                    src: activeImg || images[active].url,
                  },
                  largeImage: {
                    src: activeImg || images[active].url,
                    width: 1000,
                    height: 800,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "90%",
                  },
                }}
              />
            </div>
            <div className={styles.swiper__list}>
              {images.map((img, i) => (
                <div
                  className={`${styles.swiper__list_item} ${
                    i == active && styles.active
                  }`}
                  key={i}
                  onMouseOver={() => setActive(i)}
                >
                  <img src={img.url} alt="" key={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function MainSwiper({ images, activeImg }) {
//   const [active, setActive] = useState(0); // luon hien thi hinh anh dau tien
//   return (
//     <div className="container">
//       <div className="row ">
//         <div className="col-md-4 ">
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: "",
//                 isFluidWidth: true,
//                 src: images[active].url,
//               },
//               largeImage: {
//                 src: images[active].url,
//                 // width: 1200,
//                 // height: 1800,
//               },
//               enlargedImageContainerDimensions: {
//                 with: "150%",
//                 height: "150%",
//               },
//             }}
//           />

//           <div className="row bg-danger mt-3">
//             {images.map((img, i) => (
//               <div
//                 className=" col-md-6 bg-danger"
//                 key={i}
//                 onMouseOver={() => setActive(i)}
//               >
//                 <img
//                   src={img.url}
//                   alt=""
//                   key={i}
//                   className="img-thumbnail col-md-6 m-2 zoom-img"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
