import styles from "./styles.module.scss";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "../header/UserMenu";
import Main from "./Main";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function Top({ country }) {
  const { data: session } = useSession();

  const [visible, setVisible] = useState(false);
  //   const Click_user = () => {
  //     setVisible(!visible);
  //   };
  return (
    <div className=" container bg-light border-bottom rounded shadow-sm">
      <div className="row mt-2  ">
        <Main />
      </div>
      <div className=" mt-2  row">
        <div className=" ">
          <ul className="list-inline d-flex justify-content-end text-decoration-none  ">
            <li className="mr-1 btn ">
              <img
                className="rounded-circle col"
                src={country.flag}
                alt=""
                width="25"
                height=""
              />
              {country.name} / VND
            </li>
            <li className="mr-1 btn  ">
              <MdOutlineSecurity />
              Bảo vệ người mua
            </li>
            <li className="mr-1 btn ">Dịch vụ khách hàng</li>
            <li className="mr-1 btn  ">Help</li>
            <li className="mr-1 btn  ">
              <BsFillBagHeartFill />
              <Link
                href={"profile/whishlist"}
                className="text-decoration-none text-dark"
              >
                <span>Sản phẩm yêu thích</span>
              </Link>
            </li>
            <li
              className=""
              // onClick={Click_user}
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {session ? (
                <li className="mr-1 btn ">
                  <img
                    className="rounded-circle "
                    src={session.user.image}
                    alt=""
                    width="40"
                    height="40"
                  />
                  <span>{session.user.name}</span>
                  <RiArrowDropDownFill />
                </li>
              ) : (
                <li className="mr-1 btn ">
                  <RiAccountPinCircleLine />
                  Tài khoản
                  <RiArrowDropDownFill />
                </li>
              )}
              <li className="">
                <div className="  flex-row-reverse    ">
                  {visible && <UserMenu session={session} />}
                </div>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
