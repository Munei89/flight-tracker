import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AirplaneDeatilCard from "../components/DetailCardComponent/DetailCard";
import { AirplaneItemDetailModel } from "../shared/interfaces";

interface RootState {
    infoAirplaneDetail: AirplaneItemDetailModel;
  }

const DetailsPage = () => {
  const [airplane, setAirplane] = useState<AirplaneItemDetailModel>();
  const airplaneDetail = useSelector(
    (state: RootState) => state.infoAirplaneDetail
  );

  useEffect(() => {
    airplaneDetail && setAirplane(airplaneDetail);
  }, [airplaneDetail]);
  return (
    <div>
      {airplane && <AirplaneDeatilCard detailData={airplane} />}
    </div>
  );
};

export default DetailsPage;
