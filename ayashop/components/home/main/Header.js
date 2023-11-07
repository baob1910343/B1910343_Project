import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className="row pt-3">
      <ul className=" text-dark list-inline d-flex flex-row ">
        <li>
          <Link href="" className="p-2 m-2 text-decoration-none ">
            Cửa hàng
          </Link>
        </li>
        <li>
          <Link href="" className="p-2 m-2 text-decoration-none">
            Cá cảnh
          </Link>
        </li>
        <li>
          <Link href="" className="p-2 m-2 text-decoration-none">
            Phụ kiện
          </Link>
        </li>
      </ul>
    </div>
  );
}
