import styles from "./AgentListHomePage.module.css";
import StarRatingComponent from "react-star-rating-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtors } from "../../../features/realtor";

const AgentListHomePage = () => {
 const dispatch = useDispatch()

 const realtors = useSelector((state) => state.realtorReducer.realtors)

useEffect(() => {
  dispatch(getRealtors())
}, [dispatch])

  const agents = [
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 5,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 5,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 4,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 3,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 5,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
    {
      img: "//madrid.wpresidence.net/wp-content/uploads/2021/11/testimonial1.jpeg",
      name: "Dukhvaha",
      raiting: 5,
      desctiption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed, eius eveniet quo odit perferendis repellendus minus exercitationem, ex magni corporis? Ducimus officiis adipisci sed eveniet inventore officia quas dolorem!",
      email: "dukhvaha@mail.ru",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>OUR TOP REALTORS</p>
        <h2>Work with the best</h2>
      </div>
      <div className={styles.agents_container}>
        {agents.map((agent) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_header}>
                <img src={agent.img} alt="avatar"></img>
                <div>
                  <span className={styles.agent_name}>{agent.name}</span>
                  <span className={styles.agent_email}>{agent.email}</span>
                </div>
              </div>
              <div className={styles.description}>
                {agent.desctiption.slice(0, 135) + "..."}
              </div>
              <div>
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span> ★</span>}
                  starCount={5}
                  value={agent.raiting}
                  className={styles.star}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentListHomePage;
