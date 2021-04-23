import { JetPhotos } from "../api-interfaces";

export interface AirplaneDetailItemModel {
  baroAltitude: number;
  callSign: string;
  direction: number;
  icao: string;
  lat: number;
  lng: number;
  oriCountry: string;
  velocity: number;
}

export interface AirplaneItemDetailModel {
  airplaneImages: JetPhotos[];
  details: AirplaneDetailItemModel;
}
