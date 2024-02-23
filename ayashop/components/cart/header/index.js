import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
export default function Header() {
  return (
    <div className="row justify-content-between">
      <div className="col-md-4 m-2">
        <Link href="/">
          <img src="../../../logo.png" alt="" width={170} height={51.23} />
        </Link>
      </div>
      <div className="col-md-4 text-center mt-4 text-secondary  m-2">
        <Link href="/browse" className="text-secondarytext-decoration-none h5">
          <div>
            Tiếp tục mua sắm của bạn
            <MdPlayArrow />
          </div>
        </Link>
      </div>
      <hr />
    </div>
  );
}
