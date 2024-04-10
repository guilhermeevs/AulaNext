import Link from "next/link";
import Layout from "@/components/Layout";

export default function RedPants() {
  return (
    <Layout>
      <h1>Calça vermelha perfeita para você!</h1>;
      <Link href="/products/pants">Voltar</Link>
    </Layout>
  );
}
