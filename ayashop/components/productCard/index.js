import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  // sap xep tang dan
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  // hien thi o vuong nho duoi sp
  const [styless, setStyless] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );
  //tao hieu ung su dung
  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s) => {
          return s.price;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active]);
  return (
    <div className="container">
      <div>
        <Link href={`/product/${product.slug}?style=${active}`}>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
        <div>
          {product.subProducts[active].discount &&
            product.subProducts[active].discount}
        </div>
        <div>
          <h1>
            {product.name.length > 45
              ? `${product.name.substring(0, 45)}...`
              : product.name}
          </h1>
          <span>
            {prices.length === 1
              ? `${prices[0]}vnd`
              : `${prices[0]}-${prices[prices.length - 1]} vnd`}
          </span>
          <div className="row">
            {styless &&
              styless.map((style, i) =>
                style.image ? (
                  <img
                    src={style.image}
                    className={i == active}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                    alt=""
                    className="img-fluid col-md-1 rounded-circle"
                  />
                ) : (
                  <span
                    style={{ backgroundColor: `${style.color}` }}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  ></span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
