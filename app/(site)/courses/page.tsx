import { Htag } from "@/components/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Курсы",
};

export default async function PageCourses() {
   return (
      <div style={{ border: "1px solid green" }}>
         <Htag tag="h1">Страница курсы</Htag>
      </div>
   );
}
