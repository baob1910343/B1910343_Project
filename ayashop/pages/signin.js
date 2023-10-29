import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Formik, Form } from "formik";
import LoginInput from "../components/inputs/loginInput";
import { useState } from "react";
import * as Yup from "yup";
import { getProviders, signIn } from "next-auth/react";
import axios from "axios";
import DotLoaderSpinner from "../components/loaders/dotLoader";
import Router from "next/router";

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
  login_error: "",
};

export default function signin({ providers }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialvalues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
    login_error,
  } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email không hợp lệ.")
      .email("Vui lòng nhập một email hợp lệ."),
    login_password: Yup.string().required("Vui lòng nhập lại mật khẩu"),
  }); // thong bao lỗi khi nhập form đang nhap
  const registerValidation = Yup.object({
    name: Yup.string()
      .required("Bạn tên là gì ?")
      .min(2, "Tên phải có từ 2 đến 16 ký tự.")
      .max(16, "Tên phải có từ 2 đến 16 ký tự.")
      .matches(/^[aA-zZ]/, "Không được phép sử dụng số và ký tự đặc biệt"),
    email: Yup.string()
      .required(
        "Bạn sẽ cần thông tin này khi đăng nhập và nếu bạn muốn đặt lại mật khẩu của mình.  "
      )
      .email("Nhập địa chỉ email hợp lệ."),
    password: Yup.string()
      .required("Nhập mật khẩu tối thiểu sáu chữ số hoặc chữ cái.")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
      .max(12, "Mật khẩu không thể nhiều hơn 12 ký tự"),
    conf_password: Yup.string()
      .required("Xác nhận lại mật khẩu của bạn.")
      .oneOf([Yup.ref("password")], "Mật khẩu phải trùng khớp đã nhập."),
  });
  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      setUser({ ...user, error: "", success: data.message });
      // neu co loi tb
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false, //de ko tu dong chuyen huong sang trang home
          email: email, // phai dang nhap = email
          password: password,
        };
        const res = await signIn("credentials", options); // sao khi dang ky xog se tu dong dang nhap

        Router.push("/");
      }, 500); // sau khi dang ky 1s sau chuyen trang home
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: "", error: error.response.data.message });
    }
  };
  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false, //de ko tu dong chuyen huong sang trang home
      email: login_email, // phai dang nhap = email
      password: login_password,
    };
    const res = await signIn("credentials", options); //sau khi dang nhap chuc nang nay se xuat hien
    setUser({ ...user, success: "", error: "" }); // thiet lap user khi dang nhap thanh cong khi loi se xh mau
    setLoading(false);
    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push("/");
    }
  };
  return (
    <div className="container">
      <Header country="" />

      {loading && <DotLoaderSpinner loading={loading} />}

      <div>
        <div className="row pt-5">
          <div className="text-center">
            <span>
              <div className="rounded-circle btn-primary btn ">
                <ArrowLeftOutlined className="mb-2 " />
              </div>
              <b className="m-2">
                Chúng tôi rất vui được tham gia cùng chúng tôi!
              </b>
              <Link href="/"> Đến cửa hàng nào</Link>
            </span>
          </div>
        </div>
        <div className="row ">
          <div className="row  ">
            <h1>Đăng nhập</h1>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
              onSubmit={() => {
                signInHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Địa chỉ Email"
                    className=""
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Mật khẩu"
                    className=""
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill fs-4"
                  >
                    Đăng nhập
                  </button>
                  {login_error && (
                    <span className="text-danger">{login_error}</span>
                  )}
                  <div className="">
                    <Link href="/forget" className="text-decoration-none">
                      Quên mật khẩu
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>

            <div>
              <div className=" ">Hoặc tiếp tục với</div>
              <div className="col-md-2 text-center">
                {providers.map((provider) => (
                  <div
                    key={provider.name}
                    className="btn row btn-light mt-2"
                    onClick={() => signIn(provider.id)}
                  >
                    <img src={`../../icons/${provider.name}.png`} alt="" />
                    Dang nhap voi {provider.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row ">
          <div className="row  ">
            <h1>Đăng ký</h1>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation} //xác thực dữ liệu
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Họ tên"
                    className=""
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Địa chỉ email"
                    className=""
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Mật khẩu"
                    className=""
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Xác nhận lại mật khẩu"
                    className=""
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill fs-4"
                  >
                    Đăng ký
                  </button>
                </Form>
              )}
            </Formik>
            <div className="text-success">
              {success && <span> {success}</span>}
            </div>
            <div className="text-danger">{error && <span> {error}</span>}</div>
          </div>
        </div>
      </div>
      <Footer country="VietNam" />
    </div>
  );
}
export async function getServerSideProps(context) {
  // const { req, query } = context;({ req });

  const providers = Object.values(await getProviders());
  // const { callbackUrl } = query;

  // if (session) {
  //   return {
  //     redirect: {
  //       destination: callbackUrl,
  //     },
  //   };
  // }
  // const csrfToken = await getCsrfToken(context);
  // const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
      // csrfToken,
      // callbackUrl,
    },
  };
}
