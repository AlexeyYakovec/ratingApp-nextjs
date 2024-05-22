"use client";
import styles from "./page.module.css";
import { Htag, Button, Paragraph, Tag, Rating } from "./components";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
   const [rating, setRating] = useState<number>(4);

   return (
      <main className={styles.main}>
         <Htag tag="h1">next js:</Htag>
         <div className={styles["button-container"]}>
            <Button appearance="primary">Читать подробнее</Button>
            <Button arrow="right" appearance="ghost">
               Читать отзывы
            </Button>
            <Paragraph size="small">new next js project</Paragraph>
            <Paragraph size="medium">new next js project</Paragraph>
            <Paragraph size="large">new next js project</Paragraph>

            <Tag size="medium" color="ghost">
               medium
            </Tag>
            <Tag size="small" color="primary">
               small
            </Tag>

            <Rating rating={rating} isEditable={true} setRating={setRating} />
         </div>
      </main>
   );
}
