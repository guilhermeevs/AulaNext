import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Página de Contatos</title>
      </Head>
      <h1 className={styles.title}>
        Fale conosco através dos nosso canais de atendimentos abaixo
      </h1>

      <ul>
        <li>Email: guilhermeevsouza@gmail.com</li>
        <li>Whatsapp: 31992521667</li>
      </ul>
      <Link href="/">Voltar</Link>
    </Layout>
  );
}
