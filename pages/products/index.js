import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "../../styles/Layout.module.css";

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Página de Produtos</title>
      </Head>
      <h1 className={styles.title}>
        Nossos produtos tem ganhado cada dia mais visibilidade
      </h1>
      <ul>
        <li>
          <Link href="/products/pants">Calças</Link>
        </li>
        <li>
          <Link href="/products/shirts">Camisas</Link>
        </li>
        <li>
          <Link href="/">Voltar</Link>
        </li>
      </ul>
    </Layout>
  );
}
