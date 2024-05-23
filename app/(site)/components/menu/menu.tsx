import { getMenu } from "@/api/menu";

import styles from "./menu.module.css";
import cn from "classnames";

import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.props";

import CoursesIcon from "/helpers/icons/courses.svg";
import ServicesIcon from "/helpers/icons/services.svg";
import BooksIcon from "/helpers/icons/books.svg";
import ProductsIcon from "/helpers/icons/products.svg";

const firstLevelMenu: FirstLevelMenuItem[] = [
   {
      route: "courses",
      name: "Курсы",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
   },
   {
      route: "services",
      name: "Сервисы",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Services,
   },
   {
      route: "books",
      name: "Книги",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Books,
   },
   {
      route: "products",
      name: "продукты",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Products,
   },
];

export default async function Menu(): Promise<JSX.Element> {
   const menu = await getMenu(0);
   const sidebar = menu.flatMap((item) => {
      return item._id;
   });

   const buildFirstLevel = () => {};
   const buildSecondLevel = () => {};
   const buildThirdLevel = () => {};

   return (
      <div className={styles.menu}>
         {sidebar.map((item) => {
            return <li key={item.secondCategory}>{item.secondCategory}</li>;
         })}
      </div>
   );
}
