import { latitudeMin, latitudeMax, longitudeMin, longitudeMax } from '../globals';

// returns error string if coords aren't within bounds
export const validateCoords = (latitude: number, longitude: number) => {
  let result: { error: string | null } = {
    error: null,
  };

  if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
    result = {
      error: 'No number provided',
    };
    return result;
  }

  if (latitude < latitudeMin || latitude > latitudeMax) {
    result = {
      error: 'Latitude out of range ',
    };
  }

  if (longitude < longitudeMin || longitude > longitudeMax) {
    result = {
      error: result.error + 'Longitude out of range',
    };
  }
  return result;
};
