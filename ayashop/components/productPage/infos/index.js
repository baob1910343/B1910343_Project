import styles from "./styles.module.scss";
import { TbPlus, TbMinus } from "react-icons/tb";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/Link";
import { BsHandbagFill, BsHeart } from "react-icons/bs";
import Share from "./share";
import Accordian from "./Accordian";
import SimillarSwiper from "./SimillarSwiper";
export default function Infos({ product, setActiveImg }) {
  const router = useRouter();
  const [size, setSize] = useState(router.query.size);
  const [qty, setQty] = useState(1); // so luong

  return (
    <div className="container ">
      <div className="h1 ">{product.name}</div>
      <div className="h2">{product.sku}</div>
      <div>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
          className="text-warning"
        />
        ({product.numReviews}
        {product.numReviews == 1 ? " review" : " Đánh giá"})
      </div>
      <div className={styles.infos_price}>
        {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}</h1>}

        {product.discount > 0 ? (
          <h3>
            {size && <span>{product.priceBefore}</span>}
            <span>(-{product.discount}%)</span>
          </h3>
        ) : (
          ""
        )}
      </div>
      <div className="text-primary">
        {product.shipping
          ? `+${product.shipping}vnd Phí vận chuyển`
          : "Miễn phí vận chuyển"}
      </div>

      <div>
        {size
          ? product.quantity
          : product.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
        Hàng có sẵn.
      </div>
      <div>
        <h4>Chọn kích cỡ : </h4>
        <div className="row ">
          <div className=" d-flex flex-row">
            {product.sizes.map((size, i) => (
              <div className="col-md-1  ">
                <Link
                  href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
                  className=" text-decoration-none"
                >
                  <div
                    className={`${styles.infos__sizes_size} ${
                      i == router.query.size && styles.active_size
                    }`}
                    onClick={() => setSize(size.size)}
                  >
                    <div>{size.size}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.infos__colors}>
            {product.colors &&
              product.colors.map((color, i) => (
                <span
                  className={i == router.query.style ? styles.active_color : ""}
                  onMouseOver={() =>
                    setActiveImg(product.subProducts[i].images[0].url)
                  }
                  onMouseLeave={() => setActiveImg("")}
                >
                  <Link href={`/product/${product.slug}?style=${i}`}>
                    <img src={color.image} alt="" />
                  </Link>
                </span>
              ))}
          </div>{" "}
          <div className="m-1">
            <div className={styles.infos__qty}>
              <button
                onClick={() => qty > 1 && setQty((prev) => prev - 1)}
                className="rounded"
              >
                <TbMinus />
              </button>
              <span>{qty}</span>
              <button
                onClick={() =>
                  qty < product.quantity && setQty((prev) => prev + 1)
                }
                className="rounded"
              >
                <TbPlus />
              </button>
            </div>
          </div>
          <div className="m-1">
            <div className={styles.infos__actions}>
              <button
                disabled={product.quantity < 1}
                style={{
                  cursor: `${
                    product.quantity < 1
                      ? "không được phép vui lòng thử lại"
                      : ""
                  }`,
                }}
                onClick={() => addToCartHandler()}
              >
                <BsHandbagFill />
                <b>THÊM VÀO GIỎ HÀNG</b>
              </button>
              <button onClick={() => handleWishlist()}>
                <BsHeart />
                WISHLIST
              </button>
            </div>
          </div>
          <div>
            <Share />
            <Accordian details={[product.desription, ...product.details]} />
          </div>
          <div className="row mt-3 mb-3">
            <h2> Sản phẩm tương tự</h2>
            <SimillarSwiper />
          </div>
        </div>
      </div>
    </div>
  );
}
