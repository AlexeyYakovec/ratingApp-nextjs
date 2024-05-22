import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Link from "next/link";

export const Header = ({
   children,
   className,
   ...props
}: HeaderProps): JSX.Element => {
   return (
      <header className={cn(styles.header, className)} {...props}>
         {children}
      </header>
   );
};
