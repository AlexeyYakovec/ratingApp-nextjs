import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Link from "next/link";
import { Htag } from "../index";
import Menu from "@/app/(site)/components/menu";

export const Sidebar = ({
   children,
   className,
   ...props
}: SidebarProps): JSX.Element => {
   return (
      <nav className={cn(styles.nav, className)} {...props}>
         <Htag tag="h2">Sidebar</Htag>

         <Menu />
      </nav>
   );
};
