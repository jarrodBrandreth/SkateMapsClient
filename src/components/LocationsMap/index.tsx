import React, { useState } from 'react';
import { Map } from '../Map';
import { MapMarker } from '../MapMarker';
import { SearchBar } from '../SearchBar';
import { DetailsDrawer } from '../DetailsDrawer';
import { LocationType } from '../../types/types';
import { applyFilters } from '../../helperFunctions/applyFilters';
import styles from './LocationsMap.module.css';

interface LocationsMapProps {
  locations: LocationType[];
}

export function LocationsMap({ locations }: LocationsMapProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedBorough, setSelectedBorough] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(null);

  const updateCurrentLocation = (id: string) => {
    const chosenLocation = locations.find((location) => location._id === id);
    if (chosenLocation) setCurrentLocation(chosenLocation);
  };

  return (
    <div>
      <Map zoom={13} center={[40.741283667303954, -73.96788974139568]}>
        <SearchBar
          className={styles.search_bar}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <DetailsDrawer location={currentLocation} />
        {locations
          .filter((location) => applyFilters(location, searchValue, selectedBorough))
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
