import styles from "./reviews.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getRealtorById, getRealtors, putRate } from "../../../features/realtor";
import { useRouter } from "next/router";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Reviews = ({reviews}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.realtorReducer.user);
  const isActiveStar = useSelector((user) => user.realtorReducer.isActiveStar);
  const realtor = useSelector((state) => state.realtorReducer.realtor);
  const realtors = useSelector((state) => state.realtorReducer.realtors)
  const router = useRouter();
  
  const agent_id = router.query.id

  console.log(agent_id)

  useEffect(() => {
    dispatch(getRealtorById(agent_id))
    dispatch(getRealtors())
  }, [dispatch]);



  const [rate, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [review, setReview] = useState("");
  
  const handleSet = () => {
    if (rate !== 0) {
      dispatch(putRate({ rate, user, agent_id }));
    }
  };

  const handleAddReview = () => {
    if (advantages !== "" && disadvantages !== "" && review !== "") {
      dispatch(
        addReview({ agent_id, review, advantages, disadvantages, user })
      );
    }
  };



  return (
    <>
      <div className={styles.agent_rewiews_wrapper}>
        <h4>Agent Reviews </h4>
        <div className={styles.raiting}>
          <div className={styles.star_rating}>
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
            <button
              onClick={handleSet}
              disabled={isActiveStar ? true : false}
              className={styles.setRating_button}
            >
              Set rating
            </button>
          </div>
        </div>

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
      </div>
      <div className={styles.reviews_list}>
        
        {realtor?.reviews?.map((item) => {
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
