import Link from "next/link";
import Layout from "@/components/Layout";

export default function Pants() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href="/products">Voltar</Link>
        </li>
        <li>
          <Link href="/products/pants/blue">Calça Azul</Link>
        </li>
        <li>
          <Link href="/products/pants/red">Calça Vermelha</Link>
        </li>
      </ul>
    </Layout>
  );
}
