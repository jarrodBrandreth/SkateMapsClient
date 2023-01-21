import { useLocationsContext } from '../context/LocationsContext';
import { LocationActionResult, LocationType } from '../types/types';

export const useCreateMyMapLocation = () => {
  const { myMapLocations, setMyMapLocations } = useLocationsContext();

  const createMyMapLocation = (newLocation: LocationType) => {
    let result: LocationActionResult = {
      error: null,
    };

    const exists = myMapLocations.some(
      (location) => location.title === newLocation.title || location._id === newLocation._id,
    );

    if (exists) {
      result.error = 'this location already exists.';
    } else {
      setMyMapLocations((prevLocations) => [...prevLocations, newLocation]);
    }

    return result;
  };

  return { createMyMapLocation };
};
