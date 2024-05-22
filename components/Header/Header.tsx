import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Link from "next/link";

export const Header = ({ children }: HeaderProps): JSX.Element => {
   return <div className={styles.header}>{children}</div>;
};
