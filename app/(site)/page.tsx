"use client";
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

export default function Home(): JSX.Element {
   const [rating, setRating] = useState<number>(4);

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
