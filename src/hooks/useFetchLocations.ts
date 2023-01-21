import { useState } from 'react';
import { useLocationsContext } from '../context/LocationsContext';

export const useFetchLocations = () => {
  const [error, setError] = useState<null | string>();
  const [isLoading, setIsLoading] = useState(false);
  const { setLocations } = useLocationsContext();

  const fetchLocations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/locations/');
      const result = await response.json();
      if (!response.ok) {
        setError(result.error);
      }
      if (response.ok) {
        setLocations(result);
      }
    } catch (error) {
      setError('Oh no! Something went wrong, try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchLocations, isLoading, error };
};
