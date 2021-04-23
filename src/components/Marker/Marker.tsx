import React from "react";
import { useDispatch } from "react-redux";
import background from "app/images/airplane.png";
import { MapFlightMarker } from "./styles";
import { useHistory } from "react-router-dom";
import { GET_DETAIL_INFO } from "app/store/actionName/actionNames";
import { routers } from "app/config/router";

const Marker = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    const detailObject = {
      icao: props.icao,
      callSign: props.callSign,
      oriCountry: props.oriCountry,
      lat: props.lat,
      lng: props.lng,
      baroAltitude: props.baroAltitude,
      velocity: props.velocity,
      direction: props.direction,
    };
    dispatch({ type: GET_DETAIL_INFO, payLoad: detailObject });
    history.push(routers.DETAILSPAGE);
  };
  return (
    <div>
      <MapFlightMarker
        onClick={() => goDetail()}
        style={{
          backgroundImage: `url(${background})`,
          transform: `rotate(${props.direction}deg)`,
        }}
      />
    </div>
  );
};

export default Marker;
