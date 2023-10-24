/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true, //phát hiện ra những bất thường và cảnh báo trong quá trình phát triển ứng dụng.
  swcMinify: true, //để tối ưu hóa và nén mã nguồn
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], //định nghĩa các đường dẫn mà Sass sẽ tìm kiếm để import các file .scss.
    prependData: `@import "./base.scss";`, //một chuỗi được chèn vào đầu mỗi file .scss được biên dịch
  },
}; //để cấu hình Sass trong ứng dụng Next.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({});
module.exports = nextConfig;
