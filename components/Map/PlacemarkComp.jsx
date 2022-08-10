import React from 'react';
import {
    Placemark,
  } from "react-yandex-maps";

const PlacemarkComp = ({price, geolocation, location, id}) => {
    return (
        <Placemark
        geometry={geolocation}
        properties={{
          item: id,
          balloonContentHeader: `${price}$`,
          balloonContentBody: "Тело элемента",
          balloonContentFooter: location,
        }}
      />
    );
};

export default PlacemarkComp;