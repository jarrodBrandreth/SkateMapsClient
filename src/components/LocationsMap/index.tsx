import React, { useEffect, useState } from 'react';
import { Map } from '../Map';
import { MapMarker } from '../MapMarker';
import { SearchBar } from '../SearchBar';
import { LocationType } from '../../types/types';
import { applyFilters } from '../../helperFunctions/applyFilters';
import { Drawer } from '../Drawer';
import { Loader } from '../Loader';
import styles from './LocationsMap.module.css';
import { Legend } from '../Legend';

interface LocationsMapProps {
  locations: LocationType[];
  isLoading: boolean;
}

export function LocationsMap({ locations, isLoading }: LocationsMapProps) {
  const [searchValue, setSearchValue] = useState('');
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    setCurrentLocation(null);
  }, [locations]);

  const updateCurrentLocation = (id: string) => {
    const chosenLocation = locations.find((location) => location._id === id);
    if (chosenLocation) setCurrentLocation(chosenLocation);
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      <Legend />
      <Drawer location={currentLocation} />
      <Map zoom={13} center={[40.741283667303954, -73.96788974139568]}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {locations
          .filter((location) => applyFilters(location, searchValue))
          .map((location) => {
            return (
              <MapMarker
                key={location._id}
                id={location._id}
                title={location.title}
                category={location.category}
                neighborhood={location.neighborhood}
                coordinates={location.coordinates}
                rating={location.rating}
                updateCurrentLocation={updateCurrentLocation}
              />
            );
          })}
      </Map>
    </div>
  );
}
