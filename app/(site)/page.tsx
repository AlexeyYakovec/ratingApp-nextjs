import styles from "./page.module.css";
import { Htag, Button, Paragraph, Tag, Rating } from "../../components/index";
import { useState, useEffect } from "react";
import Menu from "./components/menu";

export default async function Home() {
   return (
      <main>
         <Htag tag="h1">OWL-top</Htag>
         <Button appearance="primary">Button</Button>
         <Paragraph size="small">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur sapiente magnam maiores, qui dolore quae et rerum,
            necessitatibus similique nisi porro in veritatis nesciunt, ipsam
            iure at voluptates sint ea?
         </Paragraph>
         <Tag size="medium" color="red">
            hhru
         </Tag>
      </main>
   );
}
