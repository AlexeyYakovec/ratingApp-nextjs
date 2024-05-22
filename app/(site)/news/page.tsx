import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "News",
};

export default function News() {
   return <div style={{ border: "1px solid green" }}>News</div>;
}
