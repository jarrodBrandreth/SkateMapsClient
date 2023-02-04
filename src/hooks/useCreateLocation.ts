import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useLocationsContext } from '../context/LocationsContext';
import { LocationActionResult, LocationType } from '../types/types';

export const useCreateLocation = () => {
  const { user } = useAuthContext();
  const { fetchLocations } = useLocationsContext();
  const [isLoading, setIsLoading] = useState(false);

  const createLocation = async (location: LocationType) => {
    let result: LocationActionResult = {
      error: null,
    };

    setIsLoading(true);

    if (!user) {
      result.error = 'You must me logged in';
      setIsLoading(false);
      return result;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/locations/`, {
        method: 'POST',
        body: JSON.stringify(location),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (!response.ok) {
        result.error = `${json.error}`;
      }

      if (response.ok) {
        await fetchLocations();
      }
    } catch {
      result.error = 'Oh no! Something went wrong, try again.';
    }

    setIsLoading(false);
    return result;
  };

  return { createLocation, isLoading };
};
