export default function Payment() {
  return (
    <div className="row">
      <h3 className="">CHÚNG TÔI CHẤP NHẬN THANH TOÁN</h3>
      <div className="d-flex mt-2 ">
        <div className="mr-3">
          <img src="../../../images/payment/visa.webp" alt="" />
        </div>
        <div className="mr-3">
          <img src="../../../images/payment/mastercard.webp" alt="" />
        </div>
        <div className="mr-3">
          {" "}
          <img src="../../../images/payment/paypal.webp" alt="" />
        </div>
        <div className="mr-3">
          <img src="../../../images/payment/momo.png" alt="" />
        </div>
        <div className="mr-3">
          <img src="../../../images/payment/vietinbank.png" alt="" />
        </div>
      </div>
    </div>
  );
}
