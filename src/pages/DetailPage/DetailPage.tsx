import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DetailCard from "../../components/DetailCard";
import { AirplaneItemDetailModel } from "../../shared/interfaces";

interface RootState {
    infoAirplaneDetail: AirplaneItemDetailModel;
  }

const DetailPage = () => {
  const [airplane, setAirplane] = useState<AirplaneItemDetailModel>();
  const airplaneDetail = useSelector(
    (state: RootState) => state.infoAirplaneDetail
  );

  useEffect(() => {
    airplaneDetail && setAirplane(airplaneDetail);
  }, [airplaneDetail]);
  return (
    <div>
      {airplane && <DetailCard detailData={airplane} />}
    </div>
  );
};

export default DetailPage;
