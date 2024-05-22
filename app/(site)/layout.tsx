import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header, Htag, Footer, Sidebar } from "@/components";
import styles from "./page.module.css";
import cn from "classnames";

const workSans = Work_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
   title: "Rating App",
   description: "Create rating app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="ru">
         <body className={cn(workSans.className)}>
            <div className={styles.wrapper}>
               <Header />
               <Sidebar />
               <main className={styles.main}>
                  <div className={styles.body}>{children}</div>
               </main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
