import { API } from "@/app/(site)/api";
import { TopPageModel } from "@/interfaces/page.props";

export async function getPage(alias: string): Promise<TopPageModel | null> {
   const res = await fetch(API.topPage.byAlias + alias);
   if (!res.ok) {
      return null;
   }
   return res.json();
}