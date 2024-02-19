import { useState } from "react";
import Select from "./Select";
import { Rating } from "@mui/material";
export default function AddReview({ product }) {
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  return (
    <div className="row">
      <div className="col bg-light rounded border">
        <div className="row   mt-3">
          <div className="col-md-6 ">
            <Select
              property={size}
              text="kích thước"
              data={product.allSizes.filter((x) => x.size !== size)}
              handleChange={setSize}
            />
          </div>
          <div className="col-md-6 ">
            <Select
              property={style}
              text="loại"
              data={product.colors.filter((x) => x !== style)}
              handleChange={setStyle}
            />
          </div>
        </div>
        <div className="col-md-12">
          <textarea
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Viết đánh giá của bạn ở đây"
            className="col-md-12 bg-white mt-2 rounded"
          />
          <Rating
            name="half-rating-read"
            defaultValue={0}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            precision={0.5}
            className="text-warning"
          />
        </div>
        <button
          onClick={() => handleSubmit()}
          className="bg-warning rounded mt-2 p-2 h6 text-white col-md-12"
        >
          <b>Gửi đánh giá</b>
        </button>
      </div>
    </div>
  );
}
