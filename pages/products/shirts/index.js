import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
export default function Shirts() {
  return (
    <>
      <Navbar />
      <Link href="/products">Voltar</Link>
      <h1>Camisas da melhor qualidade</h1>
      <Link href="/products/shirts/blue">Camisa Azul</Link>
      <Footer />
    </>
  );
}
