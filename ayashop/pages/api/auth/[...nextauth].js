import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import db from "../../../utils/db";
db.connectDb();

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    //xac thuc dang nhap
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      // lay thong tin dang nhap
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        //
        if (user) {
          return SignInUser({ password, user }); //neu co nguoi dung user goi ham dang nhap user
        } else {
          throw new Error("Email này không tồn tại.");
          // nguoc lai ko ton lai dua ra loi
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  // call back cho seession lay tt user
  callbacks: {
    async session({ session, token }) {
      let user = await User.findById(token.sub); // lay tt user tu csdl , lay token sub, sub la id nguoi dung
      session.user.id = token.sub || user._id.toSting(); // neu token.sub ko ton tai thi lay user id thay doi nhu chuoi
      session.user.role = user.role || "user"; // khi f12 ta co the nhan dc role va id
      // token.role = user.role || "user";
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: { strategy: "jwt" }, //mã thông báo web JSON là  như một chuỗi dữ liệu chứa tất cả thông tin
  secret: process.env.JWT_SECRET,
});
const SignInUser = async ({ password, user }) => {
  //neu mk ko ton tai
  if (!user.password) {
    throw new Error("Vui lòng nhập mật khẩu của bạn.");
  }
  // kiem tra mat khau trong csdl vs mk dc nhap
  const testPassword = await bcrypt.compare(password, user.password);
  // neu mk ko ton tai in tb loi
  if (!testPassword) {
    throw new Error("Email hoặc mật khẩu sai!");
  }
  return user;
};
