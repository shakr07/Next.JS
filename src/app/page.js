import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Homepage</h1>
      <Link href="/login">Go to login</Link>
      </div>
  );
}
