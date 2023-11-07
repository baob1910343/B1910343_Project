import { RightCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function Category({ header, products }) {
  return (
    <div className="">
      <div className="row  m-2 ">
        <div className="row justify-content-between">
          <div className="col">
            <h1 className="">{header}</h1>
          </div>
          <div className="col-md-1 bg-danger">
            <RightCircleOutlined className="h1" />
          </div>
        </div>
        <div className="row ">
          <div className=" text-center  ">
            {products.map((product) => (
              <img
                src={product.image}
                alt=""
                className="img-fluid col-md-3 rounded m-1  "
              />
              // <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
