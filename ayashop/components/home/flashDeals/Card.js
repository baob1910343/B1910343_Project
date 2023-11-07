import { ThunderboltOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function FlashCard({ product }) {
  return (
    <div className="">
      <Link href={product.link}>
        <img src={product.image} alt="" className="img-fluid rounded" />
      </Link>
      <div className="position-absolute top-0 start-0 bg-warning rounded">
        <ThunderboltOutlined />
        <span>-{product.discount}%</span>
      </div>
      <div className=" d-flex">
        <div className="text-danger m-2 fs-5">
          <b>
            {(product.price - product.price / product.discount).toFixed(0)}vnd
          </b>
        </div>
        <div className="mt-2 text-secondary ">
          <del>
            {(
              product.price -
              (product.price - product.price / product.discount)
            ).toFixed(0)}
            vnd
          </del>
        </div>
      </div>

      <div className="m-2">
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${product.sold}%` }}
            aria-valuenow={product.sold}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <b className="aria-valuenow ">{product.sold}%</b>
          </div>
        </div>
      </div>
    </div>
    //width của progress-bar bằng giá trị của product.sold (% đã bán), aria-valuenow bằng giá trị của product.sold
  );
}
