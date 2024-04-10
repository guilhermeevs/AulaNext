import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
export default function Pants() {
  return (
    <>
      <Navbar />

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
      <Footer />
    </>
  );
}
