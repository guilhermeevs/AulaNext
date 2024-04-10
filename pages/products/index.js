import Link from "next/link";
import Layout from "@/components/Layout";

export default function Products() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href="/">Voltar</Link>
        </li>
        <li>
          <Link href="/products/pants">Calças</Link>
        </li>
        <li>
          <Link href="/products/shirts">Camisas</Link>
        </li>
      </ul>
    </Layout>
  );
}
