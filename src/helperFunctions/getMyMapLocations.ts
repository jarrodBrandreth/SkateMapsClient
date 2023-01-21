import { LocationType } from "../types/types";

export const getMyMapLocations = (): LocationType[] => {
  const myMapLocations = localStorage.getItem('myMapLocations');
  if (myMapLocations) {
    return JSON.parse(myMapLocations);
  } else {
    return [];
  }
};
