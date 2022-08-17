import React from "react"
import styles from "./NewProperties.module.css"

function NewProperties() {
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
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="Description">Description</label>
              <textarea rows="8" name="text" />
            </div>
          </div>

          <p>Property Price</p>
          <div className={styles.price_inputs}>
            <div className={styles.input_item}>
              <label htmlFor="title">Price in $ (only numbers)</label>
              <input type="text" />
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
            <select>
              <option value={""}>None</option>
              <option value={""}>Rentals</option>
              <option value={""}>Sales</option>
            </select>
          </div>
          <p>Listing Location</p>
          <div className={styles.location_inputs}>
            <div className={styles.input_address}>
              <label htmlFor="title">*Address</label>
              <input type="text" placeholder="Enter address" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">County / State</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">City</label>
              <input type="text" placeholder="Enter city" />
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
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Lot Size in ft2 (*only numbers)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Rooms (*only numbers)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Bedrooms (*only numbers)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Bathrooms (*only numbers)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Year Built (*date)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Garages</label>
              <select>
                <option value={""}>Not Available</option>
                <option value={""}>1</option>
                <option value={""}>2</option>
                <option value={""}>3</option>
                <option value={""}>4</option>
              </select>
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Garage Size</label>
              <select>
                <option value={""}>Not Available</option>
                <option value={""}>1 car</option>
                <option value={""}>2 cars</option>
                <option value={""}>3 cars</option>
              </select>
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Available from (*date)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Basement (*text)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">External construction (*text)</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label htmlFor="title">Roofing (*text)</label>
              <input type="text" />
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
