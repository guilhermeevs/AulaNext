import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../../../styles/Home.module.css";

export default function RedPants() {
  return (
    <Layout>
      <h1>Calça vermelha perfeita para você!</h1>;
      <Link href="/products/pants">Voltar</Link>
      <img
        src="/images/calcavermelha.webp"
        width="1300px"
        height="1000px"
        alt="Calças de time"
        className={styles["centered-image"]}
      />
    </Layout>
  );
}
