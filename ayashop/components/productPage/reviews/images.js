import { useState } from "react";
import { useRef } from "react";
import { MdOutlineRemoveCircle } from "react-icons/md";
import styles from "./styles.module.scss";
export default function Images({ images, setImages }) {
  const inputRef = useRef(null); // luc dau se la vo gia tri
  const [error, setError] = useState("");
  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    console.log(files);
    files.forEach((img, i) => {
      if (images.length == 2 || i == 2) {
        setError("Cho phép tối đa 2 hình ảnh.");
        return;
      }
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp"
      ) {
        setError(
          `${img.name} định dạng không được hỗ trợ! chỉ cho phép tệp đuôi JPEG, PNG, WEBP.`
        );
        files = files.filter((item) => item.name !== img.name);
        return;
      } else {
        setError("");
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          setImages((images) => [...images, e.target.result]);
        };
      }
    });
  };
  const removeImage = (image) => {
    setImages((images) => images.filter((img) => img !== image));
    if (images.length <= 3) {
      setError("");
    }
  };
  return (
    <div className="row">
      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleImages}
        multiple
        accept="image/png,image/jpeg,image/webp"
      />
      <button
        className="bg-warning text-white h6 rounded p-1 m-3 col-md-4 "
        onClick={() => inputRef.current.click()} // khi nhan vao se di den input nhap file
      >
        <b> Thêm hình ảnh</b>
      </button>
      {error && <div className="text-danger">{error}</div>}
      <div className="row">
        <div className="d-flex flex-row ">
          {images.length > 0 && // neu len >0 thi anh xạ hình ảnh đã nhập vào rồi hiển thị nó ra
            images.map((img, i) => (
              <span key={i}>
                <MdOutlineRemoveCircle
                  onClick={() => removeImage(img)}
                  className=""
                />
                <img
                  src={img}
                  alt=""
                  className="img-fluid m-1  col-md-10 rounded"
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
