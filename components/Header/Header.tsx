import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { Htag } from "../Htag/Htag";

export const Header = ({
   children,
   className,
   ...props
}: HeaderProps): JSX.Element => {
   return (
      <header className={cn(className)} {...props}>
         <Htag tag="h1">Next js</Htag>
      </header>
   );
};
