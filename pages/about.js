import Link from "next/link";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div>
      <Navbar />
      <h1>Sobre nós</h1>
      <p>
        Somos uma empresa nova focada na venda de roupas e acessórios BBB (bons,
        bonitos e baratos)
      </p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
