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
      </main>
   );
}
