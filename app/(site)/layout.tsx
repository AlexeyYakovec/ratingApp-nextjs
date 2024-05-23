import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer, Sidebar } from "../../layout/index";
import styles from "./page.module.css";
import cn from "classnames";

const workSans = Work_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
   title: "Rating App",
   description: "Create rating app",
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="ru">
         <body className={cn(workSans.className)}>
            <div className={styles["wrapper"]}>
               <Header className={styles["header"]} />
               <Sidebar className={styles["sidebar"]} />
               <div className={styles["body"]}>{children}</div>
               <Footer className={styles["footer"]} />
            </div>
         </body>
      </html>
   );
}
