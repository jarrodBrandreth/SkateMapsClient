import { LocationPinPosition } from '../types/types';

export const hasCoords = (coords: LocationPinPosition) => {
  if (!coords.lat || !coords.lng) {
    return false;
  }
  return true;
};
