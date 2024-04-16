import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name="description" content="Encontre a melhor roupa para você" />
      </Head>
      <div>
        <h1 className={styles.title}>Seja bem-vindo à nossa loja</h1>
      </div>
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
