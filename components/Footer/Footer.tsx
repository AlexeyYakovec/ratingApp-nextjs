import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ children }: FooterProps): JSX.Element => {
   return <footer className={styles["footer"]}>footer</footer>;
};
