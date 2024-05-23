import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Link from "next/link";
import { Htag } from "../index";
import { getMenu } from "@/api/menu";

export const Sidebar = ({
   children,
   className,
   ...props
}: SidebarProps): JSX.Element => {
   return (
      <nav className={cn(styles.nav, className)} {...props}>
         <Htag tag="h2">Sidebar</Htag>
         <ul>
            <li>
               <Link href={"/"}>Главная</Link>
            </li>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>
               <Link href={"/about"}>О нас</Link>
            </li>
            <li>
               <a href={"/products/typescript"}>Продукт 1</a>
            </li>
            <li>
               <Link href={"/aboutsdfsdf"}>О нас 3</Link>
            </li>
         </ul>
      </nav>
   );
};
