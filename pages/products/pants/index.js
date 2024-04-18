import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Home.module.css";

export default function Pants() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href="/products">Voltar</Link>
        </li>
        <li>
          <Link href="/products/pants/blue">Calça Azul</Link>
        </li>
        <li>
          <Link href="/products/pants/red">Calça Vermelha</Link>
        </li>
      </ul>
      <img
        src="/images/calcas.webp"
        width="1300px"
        height="1000px"
        alt="Calças de time"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
