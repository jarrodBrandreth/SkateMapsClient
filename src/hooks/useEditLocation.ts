import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { LocationActionResult, LocationType } from '../types/types';
import { useFetchLocations } from './useFetchLocations';

export const useEditLocation = () => {
  const { user } = useAuthContext();
  const { fetchLocations } = useFetchLocations();
  const [isLoading, setIsLoading] = useState(false);

  const editLocation = async (location: LocationType) => {
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
      const response = await fetch(`/api/locations/${location._id}`, {
        method: 'PATCH',
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
  }

  return { editLocation, isLoading };
}