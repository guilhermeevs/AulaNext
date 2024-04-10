import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "@/styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello World Next.js</h1>
      <Footer />
    </div>
  );
}
