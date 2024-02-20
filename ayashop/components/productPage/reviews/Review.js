import { AiOutlineLike } from "react-icons/ai";
import { Rating } from "@mui/material";
export default function Review({ review }) {
  const { name, image } = review.reviewBy || {
    name: "Không rõ",
    image: "Đường dẫn ảnh mặc định",
  };
  return (
    <div className="container ">
      <div className="row bg-warning m-2 rounded ">
        <div className="d-flex justify-content-center align-items-center  col-md-1  ">
          <div className="">
            <h6>
              {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
            </h6>
            <img
              src={image}
              alt=""
              width={50}
              height={50}
              className="rounded-circle"
            />
          </div>
        </div>
        <div className="col-md-3 bg-success  ">
          <div className="row">
            <Rating
              name="half-rating-read"
              value={review.rating}
              precision={0.5}
              readOnly
              className="text-warning mt-2 "
            />
          </div>
          <div className="row">
            <p>{review.review}</p>
          </div>
          <div className="row">
            <p>
              <span>Kích thước:</span>
              {review.size}

              <div className="row">
                <img
                  src={review.style.image}
                  alt=""
                  className="img-fluid rounded-circle col-md-4"
                />
              </div>
            </p>
          </div>
        </div>{" "}
        <div className="col-md-6 bg-primary d-flex justify-content-center align-items-center">
          <div className="row">
            <div>
              {review.images.length > 0 &&
                review.images.map((img) => (
                  <img
                    src={img?.url}
                    alt=""
                    className="img-fluid rounded-cicle"
                    width={200}
                    height={250}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="col-md-2 bg-white d-flex justify-content-center align-items-center ">
          <div>
            {review.likes && review.likes?.likes}
            <AiOutlineLike className="display-5" />

            <div className="mt-5"> {review?.updatedAt?.slice(0, 10)}</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
