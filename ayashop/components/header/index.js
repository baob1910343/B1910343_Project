import styles from "./styles.module.scss";
import Ad from "./Ad";
import Top from "./Top";
export default function Header({ country }) {
  return (
    <div className="container">
      <header>
        <Ad />
        <Top country={country} />
      </header>
    </div>
  );
}
