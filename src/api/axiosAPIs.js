import axios from "axios";
import { URL } from "../config/api";

export function getAllFlights() {
    return axios.get(URL + "allFlights");
}

export function getAirplaneImages(icao) {
    return axios.get(URL + "airplaneImages/" + icao);
}

export function getJetPhotos() {
    return axios.get(URL + "jetPhotos");
}

export function addJetPhotos(jetItem, detail) {
    for (let i = 0; i < jetItem.length; i++) {
        const newJetItem = {
            username: jetItem[i][1],
            airplane_icao: detail.icao,
            airplane_image: jetItem[i][0],
        };
        axios.post(URL + `jetPhotos/`, newJetItem);
    }
}