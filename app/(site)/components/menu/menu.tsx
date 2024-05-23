import { getMenu } from "@/api/menu";

import styles from "./menu.module.css";
import cn from "classnames";

import { FirstLevelMenuItem, MenuItem } from "@/interfaces/menu.interface";
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
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services,
   },
   {
      route: "books",
      name: "Книги",
      icon: <BooksIcon />,
      id: TopLevelCategory.Books,
   },
   {
      route: "products",
      name: "Продукты",
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products,
   },
];

export default async function Menu(): Promise<JSX.Element> {
   const firstCategory = TopLevelCategory.Courses;

   const menu = await getMenu(firstCategory);
   const categories = menu.flatMap((item) => {
      return item._id;
   });

   const buildFirstLevel = (): JSX.Element => {
      return (
         <>
            {firstLevelMenu.map((menu) => (
               <div key={menu.route}>
                  <a href={`/${menu.route}`}>
                     <div
                        className={cn(styles.firstLevel, {
                           [styles.firstLevelActive]: menu.id == firstCategory,
                        })}
                     >
                        {menu.icon}
                        <span>{menu.name}</span>
                     </div>
                  </a>
                  {menu.id == firstCategory && buildSecondLevel()}
               </div>
            ))}
         </>
      );
   };
   const buildSecondLevel = () => {
      return (
         <div>
            {categories.map((category) => {
               return <div key={category.secondCategory}></div>;
            })}
         </div>
      );
   };
   const buildThirdLevel = () => {};

   return (
      <div className={styles.menu}>
         {buildFirstLevel()}
         {/* {sidebar.map((item) => {
            return <li key={item.secondCategory}>{item.secondCategory}</li>;
         })} */}
      </div>
   );
}

// export const Menu = async (): Promise<JSX.Element> => {
// 	const firstCategory = TopLevelCategory.Courses; const menu = await getMenu(firstCategory); const buildFirstLevel = (menu: MenuItem[], firstCategory: TopLevelCategory) => {... }
