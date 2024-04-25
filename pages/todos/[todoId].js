import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter();

  const todoId = router.query.todoId;
  return (
    <Layout>
      <Link href="/">Voltar</Link>
      <h1> Exibindo o todo: {todoId}</h1>
    </Layout>
  );
}
