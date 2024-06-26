"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({
   isEditable = false,
   setRating,
   rating,
   children,
   ...props
}: RatingProps): JSX.Element => {
   const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
   );

   useEffect(() => {
      constructRating(rating);
   }, [rating]);

   const constructRating = (currentRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
         return (
            <span
               className={cn(styles.star, {
                  [styles.filled]: i < currentRating,
                  [styles.editable]: isEditable,
               })}
               onMouseEnter={() => changeDisplay(i + 1)}
               onMouseLeave={() => changeDisplay(rating)}
               onClick={() => onClick(i + 1)}
            >
               <StarIcon
                  tabIndex={isEditable ? 0 : -1}
                  onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                     isEditable && handleSpace(i + 1, e)
                  }
               />
            </span>
         );
      });
      setRatingArray(updateArray);
   };

   const changeDisplay = (i: number) => {
      if (!isEditable) {
         return;
      }
      constructRating(i);
   };

   const onClick = (i: number) => {
      if (!isEditable || !setRating) {
         return;
      }
      setRating(i);
   };

   const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != "Space" || !setRating) {
         return;
      }
      setRating(i);
   };

   return (
      <div {...props} className={styles.rating}>
         {ratingArray.map((rating, i) => (
            <span key={i}>{rating}</span>
         ))}
      </div>
   );
};
