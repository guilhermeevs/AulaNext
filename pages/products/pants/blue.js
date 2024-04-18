import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Home.module.css"

export default function BluePants() {
  return (
    <Layout>
      <h1>Calça azul perfeita para você!</h1>;
      <Link href="/products/pants">Voltar</Link>
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
