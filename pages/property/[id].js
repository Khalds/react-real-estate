import Title from "../../components/Property/Title"
import Overview from "../../components/Property/Overview"
import Description from "../../components/Property/Description"
import Address from "../../components/Property/Address"
import Calculator from "../../components/Property/Calculator"
import Showing from "../../components/Property/Showing"


import styles from "../../components/Property/Property.module.css";
import { useRouter } from "next/router";

import PhotoGallery from "../../components/Property/PhotoGallery/PhotoGallery"



const property = () => {

 const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <PhotoGallery />
      <div className={styles.container}>
        <Title />
        <div className={styles.main_content}>
          <div className={styles.info}>
            <Overview />
            <Description />
            <Address />
            <Calculator />
          </div>
          <div className={styles.showing}>
            <Showing />
          </div>
        </div>
      </div>
    </div>
  )
}

export default property
