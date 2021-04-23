import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MapComponent from "../components/MapComponent/MapComponent";

const MapPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GET_DETAIL_INFO_FETCH", payLoad: [] });
    }, []);
    
  return (
    <div>
      <MapComponent />
    </div>
  );
};

export default MapPage;
