import React from "react";
import Header from "../components/cart/header";
import Empty from "../components/cart/empty";

export default function cart() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row  text-center">
        {cart.length > 1 ? (
          <div></div>
        ) : (
          <div>
            <Empty />
          </div>
        )}
      </div>
      <div className="row"></div>
    </div>
  );
}
