import styles from "./SearchMap.module.css";
import {
  Map,
  YMaps,
  Placemark,
  SearchControl,
  FullscreenControl,
  GeolocationControl,
  RulerControl,
  ZoomControl,
  Clusterer,
} from "react-yandex-maps";
import { useState } from "react";

const SearchMap = () => {
  const [city, setCity] = useState("");

  const arr = [
    {
      city: "Грозный",
      coordinates: [43.324675, 45.692376],
    },
    {
      city: "Грозный",
      coordinates: [43.324172, 45.691144],
    },
    {
      city: "Грозный",
      coordinates: [43.323815, 45.692273],
    },
    {
      city: "Бачи-юрт",
      coordinates: [43.220978, 46.194938],
    },
    {
      city: "Бачи-юрт",
      coordinates: [43.223407, 46.178128],
    },
  ];

  const filteredArr = arr.filter((element, array) => {
    if (element.city.toLowerCase().includes(city.toLowerCase())) {
      return true;
    } else if (city === "") {
      return array;
    }
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.map}>
          <YMaps>
            <div className="map_conteiner">
              <h1>Наш адрес:</h1>
              <Map
                width="40em"
                height="30em"
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
                  {filteredArr.map((place) => {
                    return <Placemark geometry={place.coordinates} />;
                  })}
                </Clusterer>
              </Map>
            </div>
          </YMaps>
        </div>
        <div className={styles.search}>
          <h1>Search</h1>
          <input
            type="text"
            placeholder="Введите названия города"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default SearchMap;
