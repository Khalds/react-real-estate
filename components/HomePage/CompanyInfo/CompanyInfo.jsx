import styles from "./CompanyInfo.module.css";
import Link from "next/link";
const CompanyInfo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.img_container}>
        <img src="https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/team2.jpeg"></img>
      </div>
      <div className={styles.text}>
        <p>WHO WE ARE</p>
        <h1>We help clients buy and sell houses since 1989</h1>
        <p>
          With over $2 Billion in sales, due to our unparalleled results,
          expertise and dedication, we rank amongst the top 6 agencies in Las
          Vegas. Our agency is the industry’s top luxury producer.
        </p>
        <Link href={"/about"}>
          <button>More about us</button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
