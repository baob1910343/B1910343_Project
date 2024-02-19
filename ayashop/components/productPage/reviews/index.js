import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import AddReview from "./AddReview";
export default function Reviews({ product }) {
  const { data: session } = useSession();
  return (
    <div>
      <div className="mt-5">
        <h1>Phản hồi khách hàng ({product.reviews.length})</h1>
      </div>
      <div className="bg-light border rounded">
        <div className="m-2">
          <span> Đánh giá trung bình</span>
        </div>
        <div>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            className="text-wwa"
          />
          {product.rating == 0 ? "Chưa có đánh giá nào" : product.rating}
        </div>
      </div>
      <div>
        {product.ratings.map((rating, i) => (
          <div className={styles.reviews__stats_reviews_review}>
            <Rating
              name="half-rating-read"
              defaultValue={5 - i}
              readOnly
              className="text-warning"
            />
            <div className={styles.bar}>
              <div
                className={styles.bar__inner}
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <span>{rating.percentage}%</span>
          </div>
        ))}
      </div>
      {session ? (
        <AddReview product={product} />
      ) : (
        <button
          onClick={() => signIn()}
          className="rounded bg-warning m-2 text-white h5 p-1"
        >
          Đăng nhập để thêm đánh giá
        </button>
      )}
    </div>
  );
}
