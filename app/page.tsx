import Image from "next/image";
import styles from "./page.module.css";
import { Htag } from "./components";

export default function Home() {
   return (
      <main className={styles.main}>
         <h1>next js</h1>
         <Htag tag="h3">Htagg</Htag>
      </main>
   );
}
