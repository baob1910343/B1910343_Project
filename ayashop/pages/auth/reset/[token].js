import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import LoginInput from "../../../components/inputs/loginInput";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import jwt from "jsonwebtoken";
import { Router } from "next/router";

export default function reset({ user_id }) {
  console.log("user_id", user_id);

  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu mới của bạn.")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
      .max(12, "Mật khẩu không thể nhiều hơn 12 ký tự"),
    conf_password: Yup.string()
      .required("Xác nhận lại mật khẩu của bạn.")
      .oneOf([Yup.ref("password")], "Mật khẩu phải trùng khớp đã nhập."),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);
      //yeu cau dat lai pwd cap nhat csdl
      const { data } = await axios.put("/api/auth/reset", {
        user_id,
        password,
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password,
      };
      await signIn("credentials", options);
      setError("");
      setLoading(false);
      window.location.reload(true); //tải lại trang web hiện tại khi người dùng nhấp vào nút
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  
  return (
    <div className="container justify-content-center ">
      <Header country="" />
      <div className="row pt-5">
        <div className="text-center">
          <span>
            <div className="rounded-circle btn-primary btn ">
              <ArrowLeftOutlined className="mb-2 " />
            </div>
            <b className="m-2">Đặt lại mật khẩu của bạn ?</b>
            <Link href="/"> Đăng nhập thay thế</Link>
          </span>
        </div>
        <div className="row   justify-content-center">
          <div className="col-md-5 ">
            <Formik
              enableReinitialize
              initialValues={{
                password,
                conf_password,
              }}
              validationSchema={passwordValidation}
              onSubmit={() => {
                resetHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Mật khẩu"
                    className=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => setConf_password(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill fs-4"
                  >
                    Gửi
                  </button>
                  <div>
                    {error && <span className="text-danger">{error}</span>}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="" />
    </div>
  );
}
// export async function getServerSideProps(context) {
//   const { query, req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: {
//         destination: "/", // neu dung sesion chuyen huong ve trang chu
//       },
//     };
//   }
//   const token = query.token;
//   const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET); // goi resettoken ben env
//   // if (user_id == null) {
//   //   console.log("adoajdàihjadiohiodhjioadha");
//   // }
//   // console.log(user_id);
//   return {
//     props: {
//       user_id: user_id.id, // truy cap csdl va cap nhat theo user id
//     },
//   };
// }
export async function getServerSideProps(context) {
  const { query, req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const token = query.token;
  const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  if (user_id == null) {
    console.log("");
  }
  console.log(user_id);
  return {
    props: {
      user_id: user_id.id,
    },
  };
}
