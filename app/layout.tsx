import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
   title: "Rating App",
   description: "Create rating app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
