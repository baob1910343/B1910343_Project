import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Select({ property, text, data, handleChange }) {
  const [visible, setVisible] = useState(false);
  console.log(data);
  return (
    <div>
      <div className="row ">
        <div
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {text}:
          <span className="col-md-5 m-2 p-2 text-center">
            {text == "kích thước" ? (
              property || `Chọn ${text}`
            ) : text == "loại" && property.image ? (
              <img
                src={property.image}
                alt=""
                className="img-fluid rounded-circle mt-1 pr-2"
                width="50"
                height="50"
              />
            ) : (
              ""
            )}
          </span>
          <IoIosArrowDown />
          {visible && (
            <ul className="  rounded shadow-lg col-md-6">
              {data.map((item, i) => {
                if (text == "kích thước") {
                  return (
                    <li
                      key={i}
                      // onClick={() => handleChange(item)}
                      // style={{ backgroundColor: `${item.color}` }}
                      className="list-inline m-1 "
                      onClick={() => handleChange(item.size)}
                    >
                      <div>
                        <span className="btn ">{item.size}</span>
                      </div>
                    </li>
                  );
                }
                if (text == "loại") {
                  return (
                    <li
                      key={i}
                      onClick={() => handleChange(item)}
                      className="list-inline "
                    >
                      <span>
                        <img
                          src={item.image}
                          alt=""
                          className="img-fluid rounded-circle mt-1 "
                          width="200"
                          height="200"
                        />
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
