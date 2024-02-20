import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function TableSelect({ property, text, data, handleChange }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="row ">
        <div
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {text}:
          <span className="col-md-5 m-2 p-2 text-center">
            {text == "Đánh giá sản phẩm" ||
            text == "Kích thước" ||
            text == "sắp xếp theo" ? (
              property || `Chọn ${text}`
            ) : text == "loại" && property?.image ? (
              <img
                src={property?.image}
                alt=""
                className="img-fluid rounded-circle mt-1 "
                width="50"
                height="50"
              />
            ) : (
              ""
            )}
          </span>
          <IoIosArrowDown />
          {visible && (
            <ul className="  rounded shadow-lg   text-center ">
              {data.map((item, i) => {
                if (text == "Đánh giá sản phẩm") {
                  return (
                    <li
                      key={i}
                      // onClick={() => handleChange(item)}
                      // style={{ backgroundColor: `${item.color}` }}
                      className="list-inline m-1  "
                      onClick={() => handleChange(item.value)}
                    >
                      <div>
                        <span className="btn ">{item.text}</span>
                      </div>
                    </li>
                  );
                }
                if (text == "Kích thước") {
                  return (
                    <li
                      key={i}
                      onClick={() => handleChange(item.size)}
                      className="list-inline m-1  "
                    >
                      <span className="btn ">{item.size}</span>
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
                      <div>
                        <span>
                          {item.image ? (
                            <img
                              src={item.image}
                              alt=""
                              className="img-fluid  mt-1 col-md-1"
                              width="200"
                              height="200"
                            />
                          ) : (
                            "Tất cả loại"
                          )}
                        </span>
                      </div>
                    </li>
                  );
                }
                if (text == "sắp xếp theo") {
                  return (
                    <li
                      key={i}
                      onClick={() => handleChange(item.value)}
                      className="list-inline "
                    >
                      <span className="btn">{item.text}</span>
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
