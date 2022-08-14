import styles from "./cardAgentList.module.css";
import AgentListIcon from "../AgentListIcon/AgentListIcon";
import { Link } from "@mui/material";

const CardAgentList = ({ realtor }) => {
  const description = realtor.description.substring(0, 90);

  return (
    <div className={styles.main_card_wrapper}>
      <div className={styles.internal_card_wrapper}>
        <div className={styles.agent_img_wrapper}>
          <Link href={`/agents/${realtor._id}`}>
          <img src={realtor.image} alt="agent photo" />
          </Link>
        </div>
          <h4>{realtor.name}</h4>
          <div className={styles.position_agent}>real estate broker</div>
          <div className={styles.card_content_wrapper}>{description}...</div>
          <AgentListIcon phon={realtor.phoneNumber} email={realtor.email} />
      </div>
    </div>
  );
};

export default CardAgentList;
