import nc from "next-connect";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createActivationToken, createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    const user = await User.findOne({ email });
    // kt email co ton tai trog csdl ko
    if (!user) {
      return res.status(400).json({ message: "Email này không tồn tại." });
    }
    //neu ko tb
    //tao ma tb kich hoat
    const user_id = createResetToken({
      id: user._id.toString(),
    });
    //nguoc lai dua den duong dan reset
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    // gui email resete pwd
    sendEmail(email, url, "", "Đặt lại mật khẩu của bạn.", resetEmailTemplate);
    await db.disconnectDb();
    res.json({
      message:
        "Một email đã được gửi cho bạn, hãy sử dụng nó để đặt lại mật khẩu của bạn.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
