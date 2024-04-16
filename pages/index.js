import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Página Principal</title>
          <meta name="keywords" content="Roupas, Calçados, Boné" />
          <meta
            name="description"
            content="Encontre a melhor roupa para você"
          />
        </Head>
      </>
    </Layout>
  );
}
