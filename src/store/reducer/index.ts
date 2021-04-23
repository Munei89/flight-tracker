import { combineReducers } from "redux";
import { infoAirplane } from "./mainInfo";
import { infoAirplaneDetail } from "./detailInfoReducers";

export default combineReducers({
  infoAirplane,
  infoAirplaneDetail
});
