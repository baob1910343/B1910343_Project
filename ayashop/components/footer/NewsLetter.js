import Link from "next/link";
export default function NewsLetter() {
  return (
    <div>
      <h3>ĐĂNG KÝ NHẬN BẢN TIN CỦA CHÚNG TÔI</h3>
      <div className="col input-group ">
        <div className="form-outline col-md-9 ">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder=" Địa chỉ Email của bạn"
            aria-label="Search"
          />
        </div>
        <div className="btn btn-primary col-md-1 ">Đăng ký</div>
      </div>
      <div className=" d-flex flex-row m-1">
        Bằng cách nhấp vào nút ĐĂNG KÝ
        <Link href="" className="text-decoration-none">
          Chính sách quyền riêng tư và cookie của chúng tôi
        </Link>
      </div>
    </div>
  );
}
