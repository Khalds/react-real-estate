import React, { useEffect, useState } from "react"
import Modal from "@mui/material/Modal"
import styles from "./Sign.module.css"
import { auth, getToken, removeToken } from "../../features/authSlice/authSlice"
import { useDispatch, useSelector } from "react-redux"

import Link from "next/link"
import { BsEyeSlash, BsEye } from "react-icons/bs"
import { useRouter } from "next/router"

export default function Signin() {
  const dispatch = useDispatch()

  const handleClose = () => setOpen(false)

  const router = useRouter()

  const [open, setOpen] = useState(true)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [seePass, setSeePass] = useState("password")

  const error = useSelector((state) => state.auth.error)
  const token = useSelector((state) => state.auth.token)

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (login !== "" && password !== "") {
      dispatch(auth({ login, password }))

      setLogin("")
      setPassword("")
      setErrorMessage("")
    } else {
      setErrorMessage("Поле ввода не может быть пусты!")
    }
  }

  if (token !== null) {
    router.push("/")
  }

  useEffect(() => {
    dispatch(getToken())
  }, [dispatch])

  return (
    <Modal className={styles.Modal} open={open} onClose={handleClose}>
      <div className={styles.Sign}>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <p>Welcome to Las Vegas Real Estate</p>
          </div>
          <div className={styles.Inputs}>
            <h1>Sign into your account</h1>
            <span className={styles.error}>{error || errorMessage}</span>
            <input
              type="text"
              placeholder="Username"
              value={login}
              onChange={handleChangeLogin}
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
            <button onClick={handleSubmit}>Login</button>
            <Link href="/signup">Register here!</Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}
