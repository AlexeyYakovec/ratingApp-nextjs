import styles from "./page.module.css";
import {
   Htag,
   Button,
   Paragraph,
   Tag,
   Rating,
   Header,
   Footer,
   Sidebar,
} from "../../components/index";
import { useState, useEffect } from "react";
import { API } from "./api";
import { MenuItem } from "@/interfaces/menu.interface";

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
   const res = await fetch(API.topPage.find, {
      method: "POST",
      body: JSON.stringify({
         firstCategory,
      }),
      headers: new Headers({ "content-type": "application/json" }),
   });
   return res.json();
}

export default async function Home(): Promise<JSX.Element> {
   const menu = await getMenu(0);

   return (
      <main>
         {/* <Htag tag="h1">OWL-top</Htag>
         <Button appearance="primary">Button</Button>
         <Paragraph size="small">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur sapiente magnam maiores, qui dolore quae et rerum,
            necessitatibus similique nisi porro in veritatis nesciunt, ipsam
            iure at voluptates sint ea?
         </Paragraph>
         <Tag size="medium" color="red">
            hhru
         </Tag> */}
         <div>{JSON.stringify(menu)}</div>
         <div>{menu.length}</div>
      </main>
   );
}
