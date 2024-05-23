import { getMenu } from "@/api/menu";
import { useState, useEffect } from "react";

export default async function Menu() {
   const menu = await getMenu(0);
   const sidebar = menu.flatMap((item) => {
      return item._id;
   });

   return (
      <>
         {sidebar.map((item) => {
            return <li key={item.secondCategory}>{item.secondCategory}</li>;
         })}
      </>
   );
}
