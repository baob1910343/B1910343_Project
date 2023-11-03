import Link from "next/link";
import styles from "./styles.module.scss";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className="row ">
      <div className="col-md-3 mt-2">
        <Link href="/">
          <img src="../../../logo.png" alt="" width={170} height={51.23} />
        </Link>
      </div>
      <div className="col-md-7 mt-3">
        <div className="row d-flex ">
          <div className="col input-group ">
            <div className="form-outline col-md">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
            </div>
            <button type="button" className="btn btn-primary  ">
              <i>
                <SearchOutlined style={{ fontSize: "22px" }} />
              </i>
            </button>
          </div>
          <div className="col-md-1 ">
            <Link href="/cart">
              <ShoppingCartOutlined style={{ fontSize: "37px" }} />
              <span className="position-absolute ">0</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
