import React from "react";
import { ParapraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
   children,
   className,
   size,
   ...props
}: ParapraphProps): JSX.Element => {
   return (
      <p className={cn(styles.paragraph, className, styles[size])} {...props}>
         {children}
      </p>
   );
};
