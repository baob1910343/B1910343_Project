import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut, signIn } from "next-auth/react";
export default function UserMenu({ session }) {
  return (
    <div className={styles.mtop}>
      <div className=" bg-white  rounded border  ">
        <div className="col-md-12 text-center">
          <h4>Chào mừng đến AyaShop !</h4>
        </div>
        {session ? (
          <div className="d-flex text-start mt-3">
            <img
              className="rounded-circle col"
              src={session.user.image}
              alt=""
              width="150"
              height="150"
            />

            <div className="col-md-7 mt-4">
              <div>
                <span>Chào mừng bạn trở lại,</span>
              </div>
              <div>
                <h3>{session.user.name}</h3>
              </div>
              <div className="col-md-12">
                <span className="btn btn-success " onClick={() => signOut()}>
                  Đăng xuất
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div
              className="col-md-4 btn btn-primary m-2"
              onClick={() => {
                signIn();
              }}
            >
              Đăng nhập
            </div>
            <div className="col-md-4 btn btn-light m-2">Đăng ký</div>
          </div>
        )}
        <div>
          <ul className="list-inline">
            <li>
              <Link className="text-decoration-none text-dark " href="/profile">
                Account
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark"
                href="/profile/orders"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark"
                href="/profile/messages"
              >
                Message Center
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark"
                href="/profile/address"
              >
                Address
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark"
                href="/profile/whishlist"
              >
                Whishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
