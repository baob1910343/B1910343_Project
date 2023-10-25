import Link from "next/link";
const links = [
  {
    heading: "AYASHOP",
    links: [
      {
        name: "Về chúng tôi",
        link: "",
      },
      {
        name: "Liên hệ chúng tôi",
        link: "",
      },
      {
        name: "Trách nhiệm",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Thông tin vận chuyển",
        link: "",
      },
      {
        name: "Trả lại hàng",
        link: "",
      },
      {
        name: "Đặt hàng như thế nào",
        link: "",
      },
      {
        name: "Cách theo dõi",
        link: "",
      },
      {
        name: "Hướng dẫn chọn kích thước",
        link: "",
      },
    ],
  },
  {
    heading: "Dịch vụ khách hàng",
    links: [
      {
        name: "Dịch vụ khách hàng",
        link: "",
      },
      {
        name: "Các điều khoản và điều kiện",
        link: "",
      },
      {
        name: "Người tiêu dùng",
        link: "",
      },
      {
        name: "Tham gia khảo sát phản hồi của chúng tôi",
        link: "",
      },
    ],
  },
];
export default function Links() {
  return (
    /*map để render các phần tử trong mảng links.*/
    <div className="container   ">
      <div className="row">
        {links.map((link, i) => (
          <div className="col-md-4 ">
            <div>
              <div className="p-4 ">
                {i === 0 ? (
                  <img
                    src="../../../logo.png"
                    alt=""
                    width={170}
                    height={51.23}
                  />
                ) : (
                  <b className="pt-3">{link.heading}</b>
                )}
                <div className=" pt-2">
                  {link.links.map((link) => (
                    <div key="first" className="">
                      <Link
                        href={link.link}
                        className=" text-decoration-none text-dark"
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
