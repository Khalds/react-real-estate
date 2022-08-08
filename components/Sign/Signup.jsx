import Modal from "@mui/material/Modal"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../../features/authSlice/authSlice"
import styles from "./Sign.module.css"
import Link from "next/link"
import { BsEyeSlash, BsEye } from "react-icons/bs"

function Signup() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(true)
  const handleClose = () => setOpen(false)

  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [seePass, setSeePass] = useState("password")

  const error = useSelector((state) => state.auth.error)

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (login !== "" && password !== "") {
      dispatch(createUser({ email, login, password }))

      setLogin("")
      setPassword("")
      setEmail("")
      setErrorMessage("")
    } else {
      setErrorMessage("Поле ввода не может быть пусты!")
    }
  }

  return (
    <Modal className={styles.Modal} open={open} onClose={handleClose}>
      <div className={styles.Sign}>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <p>Welcome to Las Vegas Real Estate</p>
          </div>
          <div className={styles.Inputs}>
            <h1>Create an account</h1>
            <span className={styles.error}>{error || errorMessage}</span>
            <input
              type="text"
              placeholder="Username"
              value={login}
              onChange={handleChangeLogin}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <div className={styles.inp}>
              <input
                type={seePass}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {seePass === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePass("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePass("password")}
                />
              )}
            </div>
            <button onClick={handleSubmit}>Register</button>
            <Link href="/signin">Back to login</Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Signup
