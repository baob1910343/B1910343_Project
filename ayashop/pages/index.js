import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  );
}
