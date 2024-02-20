import { Pagination } from "@mui/material";
import { useState } from "react";
import usePagination from "./Pagination";
import Review from "./Review";
import Select from "./Select";
import TableSelect from "./TableSelect";
import TableHeader from "./TableHeader";

export default function Table({ reviews, allSizes, colors }) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className="row">
      <TableHeader
        reviews={reviews}
        allSizes={[{ size: "Tất cả" }, ...allSizes]}
        colors={[{ color: "", image: "" }, ...colors]}
      />
      <div className="">
        {_DATA.currentData().map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
      <div className="">
        <Pagination
          count={count}
          page={page}
          variant="round"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
