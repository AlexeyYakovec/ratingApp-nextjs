import React from "react";
import { HtagProps } from "./Htap.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
   switch (tag) {
      case "h1":
         return <h1 className={cn(styles.h1, styles.title)}>{children}</h1>;
      case "h2":
         return <h2 className={cn(styles.h2, styles.title)}>{children}</h2>;
      case "h3":
         return <h3 className={cn(styles.h3, styles.title)}>{children}</h3>;
      default:
         return <></>;
   }
};
