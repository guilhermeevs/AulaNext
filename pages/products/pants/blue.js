import Link from "next/link";
import Layout from "@/components/Layout";

export default function BluePants() {
  return (
    <Layout>
      <h1>Calça azul perfeita para você!</h1>;
      <Link href="/products/pants">Voltar</Link>
    </Layout>
  );
}
