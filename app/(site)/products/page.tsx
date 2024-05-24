import { Htag } from "@/components/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Продукты",
};

export default async function PageProducts() {
   return (
      <div style={{ border: "1px solid green" }}>
         <Htag tag="h1">Страница продуктов</Htag>
      </div>
   );
}
