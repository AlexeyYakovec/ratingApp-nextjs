import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({
   children,
   className,
   ...props
}: FooterProps): JSX.Element => {
   return (
      <footer className={cn(className)} {...props}>
         footer
      </footer>
   );
};
