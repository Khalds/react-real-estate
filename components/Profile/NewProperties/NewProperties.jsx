import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postApartment } from "../../../features/apartmentSlice"
import styles from "./NewProperties.module.css"

function NewProperties() {
  const dispatch = useDispatch()

  const userId = useSelector((state) => state.auth.userId)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [status, setStatus] = useState("")

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [size, setSize] = useState("")

  const [rooms, setRooms] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [garage, setGarage] = useState("")

  const [yearOfBuilt, setYearOfBuilt] = useState("")
  const [dateOfDownload, setDateOfDownload] = useState("")

  const [firstLocation, setFirstLocation] = useState("")
  const [secondLocation, setSecondLocation] = useState("")

  const [geolocation, setGeolocation] = useState([firstLocation,secondLocation])

  const [image, setImage] = useState(
    "https://lasvegas.wpresidence.net/wp-content/uploads/2021/10/interior35.jpg"
  )

  const addProperties = () => {
    dispatch(
      postApartment({
        title,
        description,
        price,
        status,
        address,
        city,
        size,
        rooms,
        bedrooms,
        bathrooms,
        garage,
        yearOfBuilt,
        dateOfDownload,
        geolocation,
        image,
        userId,
      })
    )
  }

  return (
    <div className={styles.NewProperties}>
      <div className={styles.welcome}>
        <p>Welcome</p>
        <h1>Dashboard – Add Property</h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.property_block}>
          <p>Property Description</p>
          <div className={styles.descr_inputs}>
            <div className={styles.input_item}>
              <label htmlFor="title">*Title (mandatory)</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="Description">Description</label>
              <textarea
                rows="8"
                name="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <p>Property Price</p>
          <div className={styles.price_inputs}>
            <div className={styles.input_item}>
              <label htmlFor="title">Price in $ (only numbers)</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">After Price Label (ex: "/month")</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Before Price Label (ex: "from ")</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Yearly Tax Rate</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Homeowners Association Fee(monthly)</label>
              <input type="text" />
            </div>
          </div>
          <p>Select Category</p>
          <div className={styles.input_item}>
            <label htmlFor="title">Listed In</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value={""}>None</option>
              <option value={"Rentals"}>Rentals</option>
              <option value={"Sales"}>Sales</option>
            </select>
          </div>
          <p>Listing Location</p>
          <div className={styles.location_inputs}>
            <div className={styles.input_address}>
              <label htmlFor="title">*Address</label>
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">City</label>
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Neighborhood</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Country</label>
              <input type="text" value="Russia" />
            </div>
          </div>
          <p>Listing Details</p>
          <div className={styles.price_inputs}>
            <div className={styles.input_item}>
              <label htmlFor="title">Size in ft2 (*only numbers)</label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>

            <div className={styles.input_item}>
              <label htmlFor="title">Rooms (*only numbers)</label>
              <input
                type="text"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Bedrooms (*only numbers)</label>
              <input
                type="text"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Bathrooms (*only numbers)</label>
              <input
                type="text"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Year Built (*date)</label>
              <input
                type="text"
                value={yearOfBuilt}
                onChange={(e) => setYearOfBuilt(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Garages</label>
              <select
                value={garage}
                onChange={(e) => setGarage(e.target.value)}
              >
                <option value={""}>Not Available</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
              </select>
            </div>

            <div className={styles.input_item}>
              <label htmlFor="title">Available from (*date)</label>
              <input
                type="text"
                value={dateOfDownload}
                onChange={(e) => setDateOfDownload(e.target.value)}
              />
            </div>

            <div className={styles.input_item}>
              <label htmlFor="title">Location first</label>
              <input
                type="text"
                value={firstLocation}
                onChange={(e) => setFirstLocation(e.target.value)}
              />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Location second</label>
              <input
                type="text"
                value={secondLocation}
                onChange={(e) => setSecondLocation(e.target.value)}
              />
            </div>
            <div className={styles.input_area}>
              <label htmlFor="Description">
                Owner/Agent notes (*not visible on front end)
              </label>
              <textarea rows="4" name="text" />
            </div>
          </div>
          <p>Select Property Status</p>
          <div className={styles.input_item}>
            <label htmlFor="title">Property Status</label>
            <select>
              <option value={""}>No Status</option>
            </select>
          </div>
          <button >Add Properties</button>

        </div>
      </div>
    </div>
  )
}

export default NewProperties
