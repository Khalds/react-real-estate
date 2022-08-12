import styles from "./listings.module.css";
import { getApartments } from "../../../features/apartmentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Listings = ( { value, onClickCategory } ) => {
  const categories = ["All", "Rent", "Sale"];

  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.apartmentReducer.apartments);

  useEffect(() => {
    dispatch(getApartments())
  },[dispatch])

  return (
    <>
      {categories.map((categoryName, i) => {
        return (
          <div
            key={i}
            onClick={() => onClickCategory(i)}
            className={
              value == i
                ? styles.term_bar_item_active
                : styles.term_bar_item
            }
          >
            {categoryName}
          </div>
        );
      })}
    </>
  );
};

export default Listings;
