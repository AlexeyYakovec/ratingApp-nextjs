import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
   children,
   className,
   size,
   color = "ghost",
   href,
   ...props
}: TagProps): JSX.Element => {
   return (
      <div
         className={cn(styles.tag, className, {
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.red]: color === "red",
            [styles.ghost]: color === "ghost",
            [styles.grey]: color === "grey",
            [styles.green]: color === "green",
            [styles.primary]: color === "primary",
         })}
         {...props}
      >
         {href ? <a href={href}>{children}</a> : <>{children}</>}
      </div>
   );
};
