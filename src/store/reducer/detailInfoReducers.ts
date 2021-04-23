import { ReducersModel } from './interfaces';

export const infoAirplaneDetail = (state = [], action: ReducersModel) => {
    switch (action.type) {
        case "GET_DETAIL_INFO_FETCH":
            return action.payLoad;
        default:
            return state;
    }
}
