import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Layout.module.css";

export default function Shirts() {
  return (
    <Layout>
      <ul>
        <h1>Camisas da melhor qualidade</h1>
        <li>
          <Link href="/products/shirts/blue">Camisa Azul</Link>
        </li>

        <li>
          <Link href="/products">Voltar</Link>
        </li>
      </ul>
      <img
        src="/images/camisas.jpg"
        alt="Camisas de time"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
