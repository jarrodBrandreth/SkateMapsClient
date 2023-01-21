import { useLocationsContext } from '../context/LocationsContext';
import { LocationActionResult, LocationType } from '../types/types';

export const useEditMyMapLocation = () => {
  const { setMyMapLocations } = useLocationsContext();

  const editMyMapLocation = (editedLocation: LocationType) => {
    let result: LocationActionResult = {
      error: null,
    };

    setMyMapLocations((prevLocations) => {
      const locationIndex = prevLocations.findIndex(
        (location) => location._id === editedLocation._id,
      );
      if (locationIndex > 0) {
        prevLocations.splice(locationIndex, 1, editedLocation);
      } else {
        result.error = "something went wrong";
      }
      return prevLocations;
    });

    return result
  };

  return {editMyMapLocation}
};
