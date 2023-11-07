import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { userSwiperArray } from "../../../data/home";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
export default function User() {
  const { data: session } = useSession(); // truy xuat tt nguoi dung

  return (
    <div className="container">
      {session ? (
        <div>
          <img src={session.user?.image} alt="" className="rounded-circle" />
          <h4>{session.user.name}</h4>
        </div>
      ) : (
        <div>
          <img
            src="https://media.tenor.com/NC41RymFx30AAAAi/kamisato-ayaka-genshin-impact.gif"
            alt=""
            className="rounded-circle"
            width="150"
            height="150"
          />
          <div className="btn btn-success">Đăng nhập</div>
          <div>Đăng ký</div>
        </div>
      )}
      <ul className="list-inline ">
        <li>
          <Link
            href="/profile"
            className="text-decoration-none text-dark list-inline"
          >
            <IoSettingsOutline />
          </Link>
        </li>
        <li>
          <Link href="" className="text-decoration-none text-dark list-inline">
            <HiOutlineClipboardList />
          </Link>
        </li>
        <li>
          <Link href="" className="text-decoration-none text-dark list-inline">
            <AiOutlineMessage />
          </Link>
        </li>
        <li>
          <Link href="" className="text-decoration-none text-dark list-inline">
            <BsHeart />
          </Link>
        </li>
      </ul>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          navigation={true}
          modules={[EffectCards, Navigation]}
          className="userMenu "
        >
          {userSwiperArray.map((item) => (
            <SwiperSlide>
              <Link href="">
                <img src={item.image} alt="" className="img-fluid" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
