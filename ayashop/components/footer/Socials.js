import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from "react-icons/bs";
export default function Socials() {
  return (
    <div className="container ">
      <section className="row ">
        <div className=" ">
          <h3 className="">LIÊN HỆ VỚI CHÚNG TÔI</h3>
        </div>
        <div className="row ">
          <ul className="list-inline text-secondary fs-4 d-flex flex-row">
            <li className="m-2 ">
              <a href="/" target="_blank">
                <FaFacebookF className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <BsInstagram className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <BsTwitter className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <BsYoutube className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <BsPinterest className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <BsSnapchat className="text-secondary" />
              </a>
            </li>
            <li className="m-2 ">
              <a href="/" target="_blank">
                <FaTiktok className="text-secondary" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
