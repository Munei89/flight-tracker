import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_MAIN_INFO } from "../../store/actionName/actionNames";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { google_map_key } from "../../config/api";
import { AllFlights } from "../../api-interfaces";
import { MapContainer } from "./Marker.style";

interface RootState {
  infoAirplane: AllFlights;
}

const MapComponent = () => {
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const center = { lat: 36.0, lng: -11.0 };
  const zoom = 6;

  const [flightsData, setFlightsData] = useState<AllFlights>();

  const mainData: AllFlights = useSelector(
    (state: RootState) => state.infoAirplane
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setFlightsData(mainData);
  }, [mainData]);

  useEffect(() => {
    const interval = setInterval(() => {
        dispatch({ type: GET_MAIN_INFO });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_map_key }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        {flightsData &&
          flightsData.map((item, key) => (
            <Marker
              key={key}
              icao={item[0]}
              callSign={item[1]}
              oriCountry={item[2]}
              lat={item[4]}
              lng={item[3]}
              baroAltitude={item[5]}
              velocity={item[6]}
              direction={item[7]}
            />
          ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default MapComponent;
