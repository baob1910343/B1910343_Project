//gửi email sử dụng nodemailer và OAuth2 để xác thực và gửi email thông qua dịch vụ Gmail.
import nodemailer from "nodemailer";
import { google } from "googleapis";
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
import { activateEmailTemplate } from "../emails/activateEmailTemplate";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;
const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
); //gửi email
export const sendEmail = (to, url, txt, subject, template) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  const accessToken = oauth2Client.getAccessToken(); // khi truy cap va lay acestoken tu dong
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });
  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS, //
    to: to, // gui van ban toi
    subject: subject, //truyen chu de
    html: template(to, url),
  };
  smtpTransport.sendMail(mailOptions, (err, infos) => {
    if (err) return err;
    return infos;
  }); // goi chuc nang gui email
};
