import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProfilePage from "../../components/Profile/ProfilePage/ProfilePage"
import ProfileSidebar from "../../components/Profile/ProfileSidebar/ProfileSidebar"
import { fetchUser, fetchUserById } from "../../features/authSlice/authSlice"
import styles from "./Profile.module.css"

function Profile() {
  const router = useRouter()
  const dispatch = useDispatch()
  const user_id_for_fetch = router.query.id
  useEffect(() => {
    dispatch(fetchUserById(user_id_for_fetch))
  }, [dispatch])

  const correctUser = useSelector((state) => state.auth.correctUser)
console.log(correctUser)
  return (
    <div className={styles.Profile}>
      <ProfileSidebar correctUser={correctUser}/>
      <div className={styles.main}>
        <ProfilePage />
      </div>
    </div>
  )
}

export default Profile
