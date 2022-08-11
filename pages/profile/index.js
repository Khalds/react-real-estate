import React from "react"
import ProfilePage from "../../components/Profile/ProfilePage/ProfilePage"
import ProfileSidebar from "../../components/Profile/ProfileSidebar/ProfileSidebar"
import styles from "./Profile.module.css"

function Profile() {
  return (
    <div className={styles.Profile}>
      <ProfileSidebar />
      <div className={styles.main}>
        <ProfilePage />
      </div>
    </div>
  )
}

export default Profile
