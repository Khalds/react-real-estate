import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../features/authSlice/authSlice";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  });

  return (
    <div className={styles.Header}>
      <div className={styles.logo_container}>
        <img
          src={
            "https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/las-vegas.png"
          }
          alt="logo"
        ></img>
      </div>
      <div className={styles.list_container}>
        <ul className={styles.list}>
          <li
            className={
              router.pathname == "/"
                ? styles.active_link
                : styles.disactive_link
            }
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={
              router.pathname == "/apartments"
                ? styles.active_link
                : styles.disactive_link
            }
          >
            <Link href="#apartments">
              Apartments
            </Link>
          </li>
          <li
            className={
              router.pathname == "/agents"
                ? styles.active_link
                : styles.disactive_link
            }
          >
            <Link href="/agents">Agents</Link>
          </li>
          <li
            className={
              router.pathname == "/contact"
                ? styles.active_link
                : styles.disactive_link
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
            className={
              router.pathname == "/about"
                ? styles.active_link
                : styles.disactive_link
            }
          >
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.acc_container}>
        <span className={styles.phone_icon}>
          <BsFillTelephoneFill />
        </span>
        <span className={styles.phone_number}>8-800-555-35-35</span>
        <Link href={token !== null ? `/profile/${userId}` : `/signin`}>
          <span className={styles.acc_icon}>
            {token !== null ? (
              <img
                src="https://lasvegas.wpresidence.net/wp-content/themes/wpresidence/img/default-user_1.png"
                alt=""
              />
            ) : (
              <BsPersonCircle />
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
