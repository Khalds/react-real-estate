import styles from "./reviews.module.css"

const Reviews = () => {
    return (
        <div className={styles.agent_rewiews_wrapper}>
          <h4>Agent Reviews </h4>
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