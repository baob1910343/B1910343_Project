import db from "../../utils/db";
import Product from "../../models/Product";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Category from "../../models/Category";
import SubCategory from "../../models/SubCategory";
import User from "../../models/User";
import MainSwiper from "../../components/productPage/mainSwiper";
import { useState } from "react";
import Infos from "../../components/productPage/infos";

export default function product({ product }) {
  const [activeImg, setActiveImg] = useState("");
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header country="" />
      <div className="container">
        <div className="row mt-2">
          Home /
          {product.category
            ? product.category.name
            : "Tên danh mục không có sẵn"}
          {product.subCategories.map((sub) => (
            <span>/{sub.name}</span>
          ))}
        </div>
        <div className="row">
          <div className="col-md-5 ">
            <MainSwiper
              images={product.images}
              activeImg={activeImg}
              className=""
            />
          </div>
          <div className="col-md ">
            <Infos product={product} setActiveImg={setActiveImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  let product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    .populate({ path: "reviews.reviewBy", model: User })
    .lean();
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  let newProduct = {
    ...product,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange: subProduct.discount
      ? ` ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)}vnd đến ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}vnd`
      : ` ${prices[0]}vnd đến ${prices[prices.length - 1]}vnd`,
    //neu ko co giam gia thi se di den cac sp phu
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,

    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };

  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
      //   related: JSON.parse(JSON.stringify(related)),
    },
  };
}
