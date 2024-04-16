import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "../styles/Layout.module.css";

export default function About() {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Sobre nós</h1>
        <p>
          Somos uma empresa nova focada na venda de roupas e acessórios BBB
          (bons, bonitos e baratos)
        </p>
        <Link href="/">Voltar</Link>
      </div>
    </Layout>
  );
}
