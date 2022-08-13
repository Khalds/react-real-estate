import styles from "./reviews.module.css";
import StarRatingComponent from "react-star-rating-component";

const Reviews = () => {
  const rating = 1
  return (
    <div className={styles.agent_rewiews_wrapper}>
      <h4>Agent Reviews </h4>
      <div className={styles.raiting}>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          // onStarClick={this.onStarClick.bind(this)}
        />
      </div>
      <div className={styles.input_wrapper}>
        <input
        // disabled={!token ? true : false}
        // onChange={(e) => setComment(e.target.value)}
        // value={comment}
        // placeholder={`${
        //   !token
        //     ? "You need to login in order to post a review"
        //     : "What did you like?"
        // }`}
        ></input>
        <input
        // disabled={!token ? true : false}
        // onChange={(e) => setComment(e.target.value)}
        // value={comment}
        // placeholder={`${
        //   !token
        //     ? "You need to login in order to post a review"
        //     : "What was not so great?"
        // }`}
        ></input>
      </div>
    </div>
  );
};

export default Reviews;
