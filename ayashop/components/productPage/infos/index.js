import styles from "./styles.module.scss";

import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/Link";
export default function Infos({ product }) {
  const router = useRouter();
  const [size, setSize] = useState(router.query.size);
  return (
    <div className="container">
      <div className="h1">{product.name}</div>
      <div className="h2">{product.sku}</div>
      <div>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
          style={{ color: "#FACF19" }}
        />
        ({product.numReviews}
        {product.numReviews == 1 ? " review" : " Đánh giá"})
      </div>
      <div>
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
        {!size
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
        </div>
      </div>
    </div>
  );
}
