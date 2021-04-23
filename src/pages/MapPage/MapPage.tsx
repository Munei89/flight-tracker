import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MapComponent from "../../components/Map";

const MapPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GET_DETAIL_INFO_FETCH", payLoad: [] });
    }, [dispatch]);
    
  return (
    <div>
      <MapComponent />
    </div>
  );
};

export default MapPage;
