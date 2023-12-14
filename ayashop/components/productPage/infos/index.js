import { Rating } from "@mui/material";

export default function Infos({ product }) {
  return (
    <div>
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
        {product.priceRange ? (
          <h2>{product.priceRange}</h2>
        ) : (
          <h1>{product.price}</h1>
        )}

        {product.discount > 0 ? (
          <h3>
            <span>{product.priceBefore}</span>
            <span>(-{product.discount}%)</span>
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
