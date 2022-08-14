import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtors } from "../../features/realtor";
import styles from "./agentList.module.css";
import CardAgentList from "./CardAgentList/CardAgentList";

const AgentList = () => {
  const realtors = useSelector((state) => state.realtorReducer.realtors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRealtors());
  }, [dispatch]);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.entry_title}>Agents List</h1>
        <div className={styles.text_wrapper}>
          <p>
            We like to think of ourselves as a small but perfectly formed
            lettings &amp; management agency. Working you get the exposure,
            knowledge and expertise you would expect from a large agent, but the
            service you will only receive from a smaller business built around
            100% client and tenant focus.
          </p>
          <p>
            Whether you’re looking for property for sale in New York area or
            property for rent, WP Residence makes searching easy. Use our unique
            geolocation mapping feature to root-out your ideal villa, townhouse
            or apartment and contact the owners direct. We will help you find
            your dream house in just a few seconds.
          </p>
          <div className={styles.cards_wrapper}>
            {realtors.map((realtor) => {
                return <CardAgentList realtor={realtor} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentList;
