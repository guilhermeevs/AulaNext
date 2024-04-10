import Link from "next/link";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div>
        <h1>Sobre nós</h1>
        <p>
          Somos uma empresa nova focada na venda de roupas e acessórios BBB
          (bons, bonitos e baratos)
        </p>
        <Link href="/">Voltar</Link>
      </div>
    </Layout>
  );
}
