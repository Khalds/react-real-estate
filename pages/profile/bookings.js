import React from "react"
import Booking from "../../components/Profile/Booking/Booking"
import NewProperties from "../../components/Profile/NewProperties/NewProperties"
import ProfileSidebar from "../../components/Profile/ProfileSidebar/ProfileSidebar"
import styles from "./Profile.module.css"

function Profile() {
  return (
    <div className={styles.Profile}>
      <ProfileSidebar />
      <div className={styles.main}>
        <Booking />
      </div>
    </div>
  )
}

export default Profile