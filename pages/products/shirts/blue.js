import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Layout.module.css";

export default function BlueShirt() {
  return (
    <Layout>
      <h1>Camisa Azul</h1>
      <Link href="/products/shirts">Voltar</Link>
      <img
        src="/images/camisacruzeiro.jpg"
        alt="Camisa Azul"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
