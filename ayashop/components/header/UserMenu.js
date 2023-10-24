import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.mtop}>
      <div className=" bg-light  rounded border  ">
        <div className="col-md-12 text-center">
          <h4>Chào mừng đến AyaShop !</h4>
        </div>
        {loggedIn ? (
          <div className="d-flex text-start mt-3">
            <img
              className="rounded-circle col"
              src="https://pbs.twimg.com/media/E9cPqPQXEAEYGoN.png"
              alt=""
              width="150"
              height="150"
            />

            <div className="col-md-7 mt-4">
              <div>
                <span>Chào mừng bạn trở lại,</span>
              </div>
              <div>
                <h3>admin</h3>
              </div>
              <div className="col-md-12">
                <span className="btn btn-success "> Đăng xuất</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-4 btn btn-primary m-2">Đăng ký</div>
            <div className="col-md-4 btn btn-primary m-2">Đăng nhập</div>
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
