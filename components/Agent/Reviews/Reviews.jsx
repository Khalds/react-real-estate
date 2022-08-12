import styles from "./reviews.module.css";
import StarRatingComponent from "react-star-rating-component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, putRate } from "../../../features/realtor";
import { useRouter } from "next/router";

const Reviews = () => {
  const dispatch = useDispatch();

  const user = useSelector((user) => user.realtorReducer.user);
  const isActiveStar = useSelector((user) => user.realtorReducer.isActiveStar);
  const router = useRouter();

  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const agent_id = router.query.id;

  const [rate, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [advantages, setAdvantages] = useState(null);
  const [disadvantages, setDisadvantages] = useState(null);
  const [review, setReview] = useState(null);

  const handleSet = () => {
    dispatch(putRate({ rate, user, agent_id }));
  };

  const handleAddReview = () => {
    dispatch(addReview({agent_id, review, advantages, disadvantages, user}))
  }

  return (
    <div className={styles.agent_rewiews_wrapper}>
      <h4>Agent Reviews </h4>
      <div className={styles.raiting}>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                disabled={isActiveStar ? true : false}
                type="button"
                key={index}
                className={index <= (hover || rate) ? styles.on : styles.off}
                onClick={() => {
                  setRating(index);
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rate)}
              >
                <span className={styles.star}>★</span>
              </button>
            );
          })}
          <button onClick={handleSet} disabled={isActiveStar ? true : false}>
            Set rating
          </button>
        </div>
      </div>
      
      <div className={styles.input_wrapper} >
        <label>advantages</label>
        <input
          // disabled={!token ? true : false}
          onChange={(e) => setAdvantages(e.target.value)}
          value={advantages}
          placeholder={`${
            !token
              ? "You need to login in order to post a review"
              : "What did you like?"
          }`}
        ></input>
        <label>disadvantages</label>
        <input
          // disabled={!token ? true : false}
          onChange={(e) => setDisadvantages(e.target.value)}
          value={disadvantages}
          placeholder={`${
            !token
              ? "You need to login in order to post a review"
              : "What was not so great?"
          }`}
        ></input>
        <label>review</label>
        <input
        
          // disabled={!token ? true : false}
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder={
            !token ? "You need to login in order to post a review": "Write you review here"
          }
        ></input>
        <button onClick={handleAddReview}>Add review</button>
      </div>
    </div>
  );
};

export default Reviews;
