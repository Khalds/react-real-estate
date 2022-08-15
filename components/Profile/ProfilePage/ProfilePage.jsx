import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchUser,
  fetchUserById,
  getToken,
  patchFirstName,
} from "../../../features/authSlice/authSlice"
import styles from "./ProfilePage.module.css"

function ProfilePage() {
  const dispatch = useDispatch()

  const router = useRouter()

 

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [email, setEmail] = useState()

  const [seePassOne, setSeePassOne] = useState("password")
  const [seePassTwo, setSeePassTwo] = useState("password")
  const [seePassThree, setSeePassThree] = useState("password")

  const changeFirstName = () => {
    dispatch(patchFirstName({ firstName, userId }))
  }

  useEffect(() => {
    dispatch(getToken())
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.welcome}>
        <p>Welcome</p>
        <h1>Dashboard – Profile Page</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.cont_info_block}>
          <p>Contact Information</p>
          <div className={styles.cont_inputs}>
            <div className={styles.input_item}>
              <label for="firstname">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label for="lastname">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label for="email">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label for="phonenumber">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.cont_buttons}>
            <button onClick={changeFirstName}> Update Profile</button>
            <button>Delete Profile</button>
          </div>
        </div>
        <div className={styles.cont_info_block}>
          <p>Change Password</p>
          <div className={styles.cont_inputs}>
            <div className={styles.first_pass_input}>
              <label for="oldpassword">Old Password</label>
              <input type={seePassOne} />
              {seePassOne === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassOne("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassOne("password")}
                />
              )}
            </div>
            <div className={styles.input_item}>
              <label for="newpassword">New Password</label>
              <input type={seePassTwo} />
              {seePassTwo === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassTwo("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassTwo("password")}
                />
              )}
            </div>
            <div className={styles.input_item}>
              <label for="confirmpassword">Confirm New Password</label>
              <input type={seePassThree} />
              {seePassThree === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassThree("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassThree("password")}
                />
              )}
            </div>
          </div>
          <div className={styles.cont_buttons}>
            <button>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
