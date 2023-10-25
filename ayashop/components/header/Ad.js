import Link from "next/link";
import styles from "./styles.module.scss";
export default function Ad() {
  return (
    <div className="row ">
      <Link href="/browse">
        <div className={styles.ad}> </div>
      </Link>
    </div>
  );
}
