import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Home.module.css";

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
        width="700px"
        height="500px"
        alt="Camisas de time"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
