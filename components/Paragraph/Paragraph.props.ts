import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParapraphProps
   extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
   > {
   children: ReactNode;
   size: "small" | "medium" | "large";
}
