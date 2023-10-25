import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
export default function Main() {
  return (
    <div className="row">
      <div className="col-md-2 mt-2">
        <Link href="/">
          <img
            src="https://o.remove.bg/downloads/7bde485a-2ff5-4a06-9deb-f4d5ce657f6b/logo-removebg-preview.png"
            alt=""
            width={170}
            height={51.23}
          />
        </Link>
      </div>
      <div className="col-md-10 mt-3">
        <div className="row">
          <div className=" input-group">
            <div className="form-outline col-md-8">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <button type="button" className="btn btn-primary col-md-1 ">
              <i className="">
                <SearchOutlined />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
