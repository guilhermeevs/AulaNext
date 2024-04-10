import Link from "next/link";
import Layout from "@/components/Layout";

export default function Shirts() {
  return (
    <Layout>
      <Link href="/products">Voltar</Link>
      <h1>Camisas da melhor qualidade</h1>
      <Link href="/products/shirts/blue">Camisa Azul</Link>
    </Layout>
  );
}
