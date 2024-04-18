import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Layout.module.css";

export default function BluePants() {
  return (
    <Layout>
      <h1>Calça azul perfeita para você!</h1>;
      <Link href="/products/pants">Voltar</Link>
      <img
        src="/images/calcas.webp"
        alt="Calças de time"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
