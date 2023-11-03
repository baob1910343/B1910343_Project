import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import LoginInput from "../../components/inputs/loginInput";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";

export default function forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailValidation = Yup.object({
    email: Yup.string()
      .required("Vui lòng nhập Email của bạn.")
      .email("Nhập địa chỉ email hợp lệ."),
  });
  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/forgot", {
        email,
      });
      setError("");
      setSuccess(data.message);
      setLoading(false);
      setEmail("");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message); // sau khi gap loi tb mess
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
            <b className="m-2">Bạn quên mật khẩu ?</b>
            <Link href="/"> Đăng nhập thay thế</Link>
          </span>
        </div>
        <div className="row   justify-content-center">
          <div className="col-md-5 ">
            <Formik
              enableReinitialize
              initialValues={{
                email,
              }}
              validationSchema={emailValidation}
              onSubmit={() => {
                forgotHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Địa chỉ Email"
                    className=""
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill fs-4"
                  >
                    Lấy lại mật khẩu
                  </button>
                  <div>
                    {error && <span className="text-danger">{error}</span>}
                    {success && <span className="text-success">{success}</span>}
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
