import Image from "next/image";
import styles from "./page.module.css";
import { Htag, Button } from "./components";

export default function Home() {
   return (
      <main className={styles.main}>
         <Htag tag="h1">next js</Htag>
         <div className={styles["button-container"]}>
            <Button appearance="primary">Читать подробнее</Button>
            <Button appearance="ghost">Читать отзывы</Button>
         </div>
      </main>
   );
}
