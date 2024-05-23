import { getMenu } from "@/api/menu";
import { useState, useEffect } from "react";

export default async function Menu() {
   const menu = await getMenu(0);
   const sidebar = menu.flatMap((item) => {
      return item._id;
   });

   return (
      <div>
         <div>
            {sidebar.map((item, i) => {
               return <li key={i}>{item.secondCategory}</li>;
            })}
         </div>

         {/* <div>{menu.length}</div> */}
      </div>
   );
}
