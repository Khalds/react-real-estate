import styles from "./AgentListHomePage.module.css";
import StarRatingComponent from "react-star-rating-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtors } from "../../../features/realtor";
import Link from "next/link";

const AgentListHomePage = () => {
  const dispatch = useDispatch();

  const realtors = useSelector((state) => state.realtorReducer.realtors);

  useEffect(() => {
    dispatch(getRealtors());
  }, [dispatch]);

  const movieRating =
    realtors?.rating?.reduce((acc, element) => {
      return acc + element.rate;
    }, 0) / realtors?.rating?.length;


  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>OUR TOP REALTORS</p>
        <h2>Work with the best</h2>
      </div>
      <div className={styles.agents_container}>
        {realtors.map((agent) => {
          if (
            agent?.rating?.reduce((acc, element) => {
              return acc + element.rate;
            }, 0) /
              agent?.rating?.length >
            4
          ) {
            return (
              <>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <Link href={`/agents/${agent._id}`}>
                      <img src={agent.image} alt="avatar"></img>
                    </Link>
                    <div>
                      <Link href={`/agents/${agent._id}`}>
                        <span className={styles.agent_name}>{agent.name}</span>
                      </Link>
                      <span className={styles.agent_email}>{agent.email}</span>
                    </div>
                  </div>
                  <div className={styles.description}>
                    {agent.description.slice(0, 135) + "..."}
                  </div>
                  <div>
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      renderStarIcon={() => <span> ★</span>}
                      starCount={5}
                      value={
                        agent?.rating?.reduce((acc, element) => {
                          return acc + element.rate;
                        }, 0) / agent?.rating?.length
                      }
                      className={styles.star}
                    />
                  </div>
                </div>
                <div></div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AgentListHomePage;
