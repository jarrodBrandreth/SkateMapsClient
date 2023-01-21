import { LocationFormCoordsType, LocationPinPosition } from "../types/types";
import { validateCoords } from "./validateCoords";

const defaultPinPosition = {
  lat: 40.735036,
  lng: -73.991531,
};

export const checkCoords = (coords: LocationFormCoordsType): LocationPinPosition => {
  const latitude = parseFloat(coords.lat);
  const longitude = parseFloat(coords.lng);
  const validate = validateCoords(latitude, longitude);
  
  if (validate.error) {
    return defaultPinPosition;
  }

  return {
    lat: latitude,
    lng: longitude,
  };

};