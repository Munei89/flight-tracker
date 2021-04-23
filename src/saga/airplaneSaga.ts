import { call, put, takeEvery } from "redux-saga/effects";
import * as airplaneActions from "../store/actionName/actionNames";
import * as API from "../api/axiosAPIs";
import { JetPhotos } from "../api-interfaces";

function* getMainInfo(): Generator<any> {
  try {
    const mainOption: any = yield call(API.getAllFlights);
    yield put({ type: "GET_MAIN_INFO_FETCH", payLoad: mainOption.data });
  } catch (e) {
    yield put({ type: "GET_MAIN_INFO_FETCH_FAILED" });
  }
}

function* getDetailInfo(action: any): Generator<any> {
  try {
    const detailOption: any = yield call(API.getJetPhotos);
    const airplaneImages: any = yield call(
      API.getAirplaneImages,
      action.payLoad.icao
    );

    const filteredData = detailOption.data.filter((e: JetPhotos) =>
      e.airplane_icao.includes(action.payLoad.icao)
    );

    const airplaneDetail = {
      details: action.payLoad,
      airplaneImages: filteredData ? filteredData : [],
    };

    if (filteredData && filteredData.length !== 0) {
      yield put({ type: "GET_DETAIL_INFO_FETCH", payLoad: airplaneDetail });
    } else {
      if (airplaneImages.data && airplaneImages.data.length !== 0) {
        yield call(API.addJetPhotos, airplaneImages.data, action.payLoad);
        const detailOptionNew: any = yield call(API.getJetPhotos);
        const filteredDataNew = detailOptionNew.data.filter((e: JetPhotos) =>
          e.airplane_icao.includes(action.payLoad.icao)
        );
        const airplaneDetailNew = {
          details: action.payLoad,
          airplaneImages: filteredDataNew,
        };
        yield put({ type: "GET_DETAIL_INFO_FETCH", payLoad: airplaneDetailNew });
      } else {
        yield put({ type: "GET_DETAIL_INFO_FETCH", payLoad: airplaneDetail });
      }
    }
  } catch (e) {
    yield put({ type: "GET_DETAIL_INFO_FETCH_FAILED" });
  }
}

export default function* mySaga() {
  yield takeEvery(airplaneActions.GET_MAIN_INFO, getMainInfo);
  yield takeEvery(airplaneActions.GET_DETAIL_INFO, getDetailInfo);
}
