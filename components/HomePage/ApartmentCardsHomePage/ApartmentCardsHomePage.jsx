import styles from "./ApartmentCardsHomePage.module.css"
import { useSelector, useDispatch } from "react-redux"
import { MdOutlineBedroomParent } from "react-icons/md"
import { BiBath } from "react-icons/bi"
import { TbLayoutBoard } from "react-icons/tb"
import { BsFillShareFill } from "react-icons/bs"
import { BsSuitHeart } from "react-icons/bs"
import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"
import { getApartments } from "../../../features/apartmentSlice"
import Link from "next/link"
import Aos from "aos"
import "aos/dist/aos.css"

const ApartmentCardsHomePage = () => {
  const dispatch = useDispatch()
  const apartments = useSelector((state) => state.apartmentReducer.apartments)

  const [limit, setLimit] = useState(6)

  const handleShow = () => {
    setLimit((limit += 6))
  }

  const handleHide = () => {
    if (limit > 0) {
      setLimit(6)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    dispatch(getApartments())
  }, [dispatch])

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>RECENT PROPERTIES</p>
          <h2>Explore the latest properties available</h2>
        </div>
        <div className={styles.cards_container}>
          {apartments.map((apartment, index) => {
            if (index + 1 <= limit) {
              return (
                <>
                  <div className={styles.card} data-aos="fade-left">
                    <Link href={`/property/${apartment._id}`}>
                      <div className={styles.img_container}>
                        {/* <img src={apartment.image[0]} alt="apartment photo" /> */}
                      </div>
                    </Link>
                    <div className={styles.info_container}>
                      <h3>{apartment.location.slice(7, 27)} </h3>
                      <h4>{apartment.price} $</h4>
                      <p>{apartment.description.slice(0, 130) + "..."}</p>
                      <div className={styles.icons}>
                        <span>
                          <MdOutlineBedroomParent /> {apartment.bedroom}
                        </span>
                        <span>
                          <BiBath /> {apartment.bathroom}
                        </span>
                        <span>
                          <TbLayoutBoard /> {apartment.size} ft<sup>2</sup>
                        </span>
                      </div>
                    </div>
                    <div className={styles.agentInfo_canteiner}>
                      <div className={styles.agent_photo_name}>
                        <img
                          src="https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person3-27-120x120.jpg')"
                          alt="agent_photo"
                        />
                        <span>Michelle Upsetovna</span>
                      </div>
                      <div className={styles.agent_icons}>
                        <span className={styles.icon}>
                          <BsFillShareFill />
                        </span>
                        <span className={styles.icon}>
                          <BsSuitHeart />
                        </span>
                        <span className={styles.icon}>
                          <FiPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>
        <div className={styles.button_container}>
          {limit >= apartments.length ? (
            <button onClick={handleHide}>Hide listings</button>
          ) : (
            <button onClick={handleShow}>Load more listings</button>
          )}
        </div>
      </div>
    </>
  )
}

export default ApartmentCardsHomePage
