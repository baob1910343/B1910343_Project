import styles from "./styles.module.scss";
import Ad from "./Ad";
import Top from "./Top";
export default function Header() {
  return (
    <div className="container">
      <header>
        <Ad />
        <Top />
      </header>
    </div>
  );
}
