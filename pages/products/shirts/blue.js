import Link from "next/link";
import Layout from "@/components/Layout";

export default function BlueShirt() {
  return (
    <Layout>
      <h1>Camisa Azul</h1>
      <Link href="/products/shirts">Voltar</Link>
    </Layout>
  );
}
