import { useState } from "react";
import styles from "./Reviews.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";


const Reviews = () => {
  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (advantages !== "" && disadvantages !== "" && review !== "") {
      dispatch(
        addReview({ agent_id, review, advantages, disadvantages, user })
      );
    }
  };

  const reviews = [{
    advantages: "asfas",
    disadvantages: "sfasf",
    review: "1231",
    user: "123"
  }]

  return (
    <div className={styles.agent_reviews_wrapper}>
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
          placeholder={"Write you review here"}
        ></input>
        <div className={styles.button_add_container}>
          <button onClick={handleAddReview} className={styles.button_add}>
            Add review
          </button>
        </div>
      </div>
      <div className={styles.reviews_list}>
        {reviews.map((item) => {
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
    </div>
  );
};

export default Reviews;
