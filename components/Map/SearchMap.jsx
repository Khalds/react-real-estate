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
import PlacemarkComp from "./PlacemarkComp";
import Slider from "@mui/material/Slider";
import Apartments from "./Apartments";

const SearchMap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);

  const apartments = useSelector((state) => state.apartmentReducer.apartments);

  const [cityName, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);

  const [arrayToFilter, setArrayToFilter] = useState(null);

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
      apartment.price > price
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
                width="45em"
                height="43em"
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
                        description={apartment.description}
                        status={apartment.status}
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
              <select value={bedroom} onChange={handleBedroom}>
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value={0}>Bedrooms</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className={styles.bathroom}>
              <select value={bathroom} onChange={handleBathroom}>
                <option value="" disabled>
                  Выберите из списка
                </option>
                <option value={0}>Bathrooms</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
          <div className={styles.cards_container}>
            <Apartments filteredArr={filteredArr} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMap;
