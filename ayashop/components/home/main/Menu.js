import { menuArray } from "@/data/home";
import Link from "next/link";
// import { menuArray } from "../../../data/home";
import { BiCategory } from "react-icons/bi";
export default function Menu() {
  return (
    <div>
      <ul className="list-inline">
        <li>
          <a className="text-decoration-none text-dark list-inline">
            <BiCategory />
            <b>Danh Mục Sản phẩm</b>
          </a>
        </li>
        <div className="row ">
          {menuArray.map((item) => (
            <Link href={item.link} className="text-decoration-none text-dark">
              <span className="">{item.name}</span>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
