import Link from "next/link";
import Layout from "@/components/Layout";

export default function Shirts() {
  return (
    <Layout>
      <ul>
        <h1>Camisas da melhor qualidade</h1>
        <li>
          <Link href="/products/shirts/blue">Camisa Azul</Link>
        </li>

        <li>
          <Link href="/products">Voltar</Link>
        </li>
      </ul>
    </Layout>
  );
}
