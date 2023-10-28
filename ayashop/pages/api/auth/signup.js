import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { createActivationToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb(); // ket noi voi csdl
    // console.log(req.body); // gui toi body pocman
    const { name, email, password } = req.body; // clg toan bo
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền vào tất cả thông tin." });
    } // neu bat dau ko co name email pwd tb loi 400 va gui lai tn
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Email không hợp lệ." });
    } // kiem tra neu email xac thuc la ko hop le thi mes ra
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email này đã tồn tại." });
    } // neu user tồn tại
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Mật khẩu phải có ít nhất 6 ký tự." });
    }
    const cryptedPassword = await bcrypt.hash(password, 12); // mật khẩu mã hóa băm
    const newUser = new User({ name, email, password: cryptedPassword }); // tao user moi vao
    const addedUser = await newUser.save(); // them nguoi dung vào va luu
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    }); // tao ma thong bao truyen user co id  dung de xac minh email 9 chu
    const url = `${process.env.BASE_URL}/activate/${activation_token}`; //url gui toi email
    // res.send(url);
    sendEmail(
      email,
      url,
      "",
      "kích hoạt tài khoản của bạn."
      // activateEmailTemplate
    ); // khi usr truy cap wweb co thong
    // bao kich hoat tu url do va lay id nguoi dung email xac minh trog csdl
    await db.disconnectDb(); // ngat ket noi csdl
    res.json({
      message: "Đăng ký thành công! Vui lòng kiểm tra email của bạn.",
    }); // thong bao
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default handler;
