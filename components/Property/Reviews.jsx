import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviewForApartment, getApartmentById, putRate } from "../../features/apartmentSlice";
import { useRouter } from "next/router";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Reviews = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.apartmentReducer.user);
   const apartment = useSelector((state) => state.apartmentReducer.apartment)

  const router = useRouter();

  const apartment_id = String(router.query.id);

  let user;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("userId");
  }

  const [rate, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    dispatch(getApartmentById(apartment_id))
  },[dispatch])

  const handleAddReview = () => {
    if (advantages !== "" && disadvantages !== "" && review !== "") {
      dispatch(
        addReviewForApartment({ apartment_id, review, advantages, disadvantages, user })
      );
      setAdvantages("")
      setDisadvantages("")
      setReview("")
    }
  };

  return (
    <>
      <div className={styles.property_reviews_wrapper}>
        <h4>Agent Reviews </h4>
        <div className={styles.input_wrapper}>
          <input
            onChange={(e) => setAdvantages(e.target.value)}
            value={advantages}
            placeholder={"What did you like?"}
          ></input>
          <input
            onChange={(e) => setDisadvantages(e.target.value)}
            value={disadvantages}
            placeholder={"What was not so great?"}
          ></input>
          <input
            onChange={(e) => setReview(e.target.value)}
            value={review}
            placeholder={"Write your review here"}
          ></input>
          <div className={styles.button_add_container}>
            <button onClick={handleAddReview} className={styles.button_add}>
              Add review
            </button>
          </div>
        </div>
      </div>
      <div className={styles.reviews_list}>
        {apartment && apartment.reviews.map((item) => {
          return (
            <>
              <div className={styles.list_item_container}>
                <h4>{item.user.login}</h4>
                <div className={styles.advantages_container}>
                  <span>
                    <AiOutlinePlusCircle /> Advantages:
                  </span>
                  <span>{item.advantages}</span>
                </div>
                <div className={styles.disadvantages_container}>
                  <span>
                    <AiOutlineMinusCircle /> Disadvantages:
                  </span>
                  <span>{item.disadvantages}</span>
                </div>
                <div className={styles.review_container}>
                  <span>{item.review}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
