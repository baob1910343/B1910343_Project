import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import DotLoaderSpinner from "../components/loaders/dotLoader";
import Main from "../components/home/main";
import FlashDeadls from "../components/home/flashDeals";
import Category from "../components/home/category";
import { ayaka_cate } from "../data/home";
import ProductsSwiper from "../components/productsSwiper";
import { ayaka_swiper } from "../data/home";
import { ayaka1_Swiper } from "../data/home";
import { ayaka2_Swiper } from "../data/home";

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  // {loading && <DotLoaderSpinner loading={loading} />}
  return (
    <div className="container">
      <Header country={country} />
      <div className="container">
        <div className="row">
          <Main />
          <FlashDeadls />

          <div className="row fs-4">
            <div className="col-md-4">
              <div className=" bg-danger rounded  ">
                <Category header="ayaka" products={ayaka_cate} />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" bg-danger rounded ">
                <Category header="ayaka" products={ayaka_cate} />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" bg-danger rounded ">
                <Category header="ayaka" products={ayaka_cate} />
              </div>
            </div>
          </div>
          <div className="row">
            <ProductsSwiper header="ayaka" products={ayaka_swiper} />
            <ProductsSwiper header="ayaka1" products={ayaka1_Swiper} />
            <ProductsSwiper header="ayaka2" products={ayaka2_Swiper} />
          </div>
        </div>
      </div>
      <Footer country={country} />
    </div>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=uxh9lvu2fi1j5eao")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Việt Nam",
        flag: "https://congcaphe.com/_next/static/images/vn-66e76189e15384f6034e56f129991d96.png",
      },
    },
  };
}
