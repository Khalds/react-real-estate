import React from 'react';
import {
    Placemark,
  } from "react-yandex-maps";

const PlacemarkComp = ({price, geolocation, location, id, description, status}) => {
    return (
        <Placemark
        geometry={geolocation}
        properties={{
          item: id,
          balloonContentHeader: `${price}$ for ${status}`,
          balloonContentBody: `${description.slice(0, 65)}...`,
          balloonContentFooter: location,
        }}
      />
    );
};

export default PlacemarkComp;