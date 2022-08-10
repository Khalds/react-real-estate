import styles from "./listings.module.css";
import { getApartments } from "../../../features/apartmentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Listings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["All", "Duplexes", "Houses", "Villas"];

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
            onClick={() => setActiveIndex(i)}
            className={
              activeIndex == i
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
