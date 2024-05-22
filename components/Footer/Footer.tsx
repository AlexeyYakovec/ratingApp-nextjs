import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { Paragraph } from "../index";

export const Footer = ({
   children,
   className,
   ...props
}: FooterProps): JSX.Element => {
   return (
      <footer className={cn(className, styles["footer"])} {...props}>
         <Paragraph size="medium">
            OwlTop &copy; 2020 - {format(new Date(), "yyyy")} Все права защищены
         </Paragraph>
         <Paragraph size="medium">Пользовательское соглашение</Paragraph>
         <Paragraph size="medium">Политика конфиденциальности</Paragraph>
      </footer>
   );
};
