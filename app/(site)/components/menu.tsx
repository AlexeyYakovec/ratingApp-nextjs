import { getMenu } from "@/api/menu";
import { useState, useEffect } from "react";

export default async function Menu() {
   const menu = await getMenu(0);

   return (
      <div>
         {/* <div>{JSON.stringify(menu)}</div> */}

         <div>{menu.length}</div>
      </div>
   );
}
