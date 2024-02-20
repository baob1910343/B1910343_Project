import { useState } from "react";
import TableSelect from "./TableSelect";

export default function TableHeader({ reviews, allSizes, colors }) {
  const [rating, setRating] = useState();
  const [size, setSize] = useState();
  const [style, setStyle] = useState();
  const [order, setOrder] = useState();
  return (
    <div className="  ">
      <div className="pr-5 row">
        <div className=" ">
          <TableSelect
            property={rating}
            text="Đánh giá sản phẩm"
            data={ratings.filter((x) => x.value !== rating)}
            handleChange={setRating}
          />
        </div>
        <div className="">
          <TableSelect
            property={size}
            text="Kích thước"
            data={allSizes.filter((x) => x.size !== size)}
            handleChange={setSize}
          />
        </div>
        <div className="">
          <TableSelect
            property={style}
            text="loại"
            data={colors.filter((x) => x !== style)}
            handleChange={setStyle}
          />
        </div>
        <div className="">
          <TableSelect
            property={order}
            text="sắp xếp theo"
            data={orderOptions.filter((x) => x.value !== order)}
            handleChange={setOrder}
          />
        </div>
      </div>
    </div>
  );
}
const ratings = [
  {
    text: "Tất cả ",
    value: "",
  },
  {
    text: "5 sao",
    value: 5,
  },
  {
    text: "4 sao",
    value: 4,
  },
  {
    text: "2 sao",
    value: 2,
  },
  {
    text: "2 sao",
    value: 2,
  },
  {
    text: "1 sao",
    value: 1,
  },
];
const orderOptions = [
  {
    text: "Khuyến khích",
    value: "Khuyến khích",
  },
  {
    text: "Gần đây nhất đến cũ nhất",
    value: "Gần đây nhất đến cũ nhất",
  },
  {
    text: "Cũ nhất đến gần đây nhất",
    value: "Cũ nhất đến gần đây nhất",
  },
];
