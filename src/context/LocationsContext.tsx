import { createContext, useContext, useEffect, useState } from 'react';
import { getMyMapLocations } from '../helperFunctions/getMyMapLocations';
import { LocationType } from '../types/types';

interface LocationsContextProps {
  locations: LocationType[];
  setLocations: React.Dispatch<React.SetStateAction<LocationType[]>>;
  myMapLocations: LocationType[];
  setMyMapLocations: React.Dispatch<React.SetStateAction<LocationType[]>>;
  fetchLocations: () => Promise<void>;
  isLoading: boolean;
}

const LocationsContext = createContext<LocationsContextProps | undefined>(undefined);

interface LocationsProviderProps {
  children: React.ReactNode;
}

export function LocationsProvider({ children }: LocationsProviderProps) {
  const [locations, setLocations] = useState<Array<LocationType>>([]);
  const [myMapLocations, setMyMapLocations] = useState<Array<LocationType>>(getMyMapLocations());
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/locations/`);
      const result = await response.json();
      if (response.ok) {
        setLocations(result);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    localStorage.setItem('myMapLocations', JSON.stringify(myMapLocations));
  }, [myMapLocations]);

  const value = {
    locations,
    setLocations,
    myMapLocations,
    setMyMapLocations,
    fetchLocations,
    isLoading,
  };
  return <LocationsContext.Provider value={value}>{children}</LocationsContext.Provider>;
}

export function useLocationsContext() {
  const context = useContext(LocationsContext);
  if (context === undefined) {
    throw new Error('useLocationsContext must be used within a Locations Provider');
  }
  return context;
}
