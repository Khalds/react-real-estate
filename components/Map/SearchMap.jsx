import styles from "./SearchMap.module.css";
import {
  Map,
  YMaps,
  SearchControl,
  FullscreenControl,
  GeolocationControl,
  RulerControl,
  ZoomControl,
  Clusterer,
} from "react-yandex-maps";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartments } from "../../features/apartmentSlice";
import Link from "next/link";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { TbLayoutBoard } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import PlacemarkComp from "./PlacemarkComp";
import Slider from "@mui/material/Slider";


const SearchMap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);

  const apartments = useSelector((state) => state.apartmentReducer.apartments);

  const [cityName, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);

  const handleBedroom = (event) => {
    setBedroom(event.target.value);
  };

  const handleBathroom = (event) => {
    setBathroom(event.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const filteredArr = apartments.filter((apartment, array) => {
    if (
      apartment.city.toLowerCase().includes(cityName.toLowerCase()) &&
      apartment.price > price &&
      apartment.bedroom == bedroom &&
      apartment.bathroom == bathroom
    ) {
      return true;
    }
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.empty_container}></div>
        <div className={styles.map_container}>
          <YMaps>
            <div className={styles.map}>
              <Map
                width="40em"
                height="36em"
                defaultState={{
                  center: [43.318366, 45.692421],
                  zoom: 13,
                  controls: [],
                }}
              >
                <SearchControl
                  options={{
                    float: "right",
                  }}
                />
                <FullscreenControl />

                <GeolocationControl
                  options={{
                    float: "left",
                  }}
                />
                <RulerControl />
                <ZoomControl />
                <Clusterer
                  options={{
                    preset: "islands#invertedVioletClusterIcons",
                    groupByCoordinates: false,
                  }}
                >
                  {filteredArr.map((apartment, index) => {
                    return (
                      <PlacemarkComp
                        key={apartment._id}
                        location={apartment.location}
                        geolocation={apartment.geolocation}
                        price={apartment.price}
                        id={apartment._id}
                      />
                    );
                  })}
                </Clusterer>
              </Map>
            </div>
          </YMaps>
        </div>
        <div className={styles.search}>
          <div className={styles.location_container}>
            <label>Location</label>
            <input
              className={styles.location}
              placeholder="Город"
              value={cityName}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.price_container}>
            <label>{`Price range: ${price} $ to 1.500.000 $`}</label>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={100000}
              marks
              getAriaValueText={valuetext}
              min={0}
              max={1000000}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={styles.rooms}>
            <div className={styles.bedrooms}>
              <label>Bedrooms</label>
              <select
                value={bedroom}
                onChange={handleBedroom}
                placeholder="Bedrooms"
              >
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className={styles.bathroom}>
              <label>Bathrooms</label>
              <select
                value={bathroom}
                onChange={handleBathroom}
                placeholder="Bathrooms"
              >
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
          <div className={styles.cards_container}>
            {filteredArr.map((apartment, index) => {
              return (
                <div className={styles.card} key={apartment._id}>
                  <Link href={`/property/${apartment._id}`}>
                    <div className={styles.img_container}>
                      <img src={apartment.image} alt="apartment photo" />
                    </div>
                  </Link>
                  <div className={styles.info_container}>
                    <h3>{apartment.location} </h3>
                    <h4>{apartment.price} $</h4>
                    <p>{apartment.description.slice(0, 130) + "..."}</p>
                    <div className={styles.icons}>
                      <span>
                        <MdOutlineBedroomParent /> {apartment.bedroom}
                      </span>
                      <span>
                        <GiBathtub /> {apartment.bathroom}
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
                      <span>
                        <BsFillShareFill />
                      </span>
                      <span>
                        <BsSuitHeart />
                      </span>
                      <span>
                        <FiPlus />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMap;
