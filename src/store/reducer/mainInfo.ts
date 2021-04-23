import { ReducersModel } from "./interfaces";

export const infoAirplane = (state = [], action: ReducersModel) => {
  switch (action.type) {
    case "GET_MAIN_INFO_FETCH":
      return action.payLoad;
    default:
      return state;
  }
};
