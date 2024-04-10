import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />
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

      <Footer />
    </>
  );
}
