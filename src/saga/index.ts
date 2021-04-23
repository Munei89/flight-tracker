import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../store/reducer";
import mySaga from "./airplaneSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
