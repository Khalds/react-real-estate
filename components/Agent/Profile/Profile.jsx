import styles from "./profile.module.css"
import NotWorkingIcon from '../NotWorkingIcon/NotWorkingIcon';
import SocialIcons from '../SocialIcons/SocialIcons';
import { BsStarFill } from 'react-icons/bs'

const Profile = ( {image, rating, name, phon, email} ) => {
    return (
        <div className={styles.profile_wrapper}>
          <div className={styles.profile_image_social_wrapper}>
            <div className={styles.profile_image_wrapper}>
              <img
                className={styles.profile_image}
                src={image}
                alt=""
              ></img>
            </div>
            <SocialIcons />
          </div>
          <div className={styles.profile_contact_wrapper}>
            <h3>
              <a href="/agents">
                {name}
              </a>
            </h3>
            <div className={styles.agent_position}>
              realtor overall rating:
              <BsStarFill className={styles.star}/>
              <div className={styles.numerical_rating}>{(rating?.reduce((acc, element) => {
              return acc + element.rate;
            }, 0) /
            rating?.length).toFixed(1)}</div>
            </div>
            <NotWorkingIcon phon={phon} email={email}/>
          </div>
        </div>
    );
};

export default Profile;