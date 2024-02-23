import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
export default function Empty() {
  const { data: session } = useSession();
  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <img src="../../../images/empty.png" alt="" className="col-md-4" />
        <h1>Giỏ hàng trống</h1>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          {!session && (
            <button
              onClick={() => signIn()}
              className="rounded p-2 bg-warning col-md-2"
            >
              <b>ĐĂNG NHẬP / ĐĂNG KÝ</b>
            </button>
          )}
        </div>
        <div className="col-md-12 mt-2">
          <Link href="/browse">
            <button className="rounded p-2 bg-warning col-md-2">
              <b>MUA NGAY</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
