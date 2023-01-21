import React, { useState } from 'react';
import { Map } from '../Map';
import { MapMarker } from '../MapMarker';
import { SearchBar } from '../SearchBar';
import { DetailsDrawer } from '../DetailsDrawer';
import { LocationType } from '../../types/types';
import { applyFilters } from '../../helperFunctions/applyFilters';
import { Button } from '../Button';
import styles from './ChooseLocationMap.module.css';

interface ChooseLocationMapProps {
  locations: LocationType[];
  chooseLocation: {
    name: 'edit' | 'delete';
    action: (location: LocationType) => void;
  };
  isLoading: boolean;
}

export function ChooseLocationMap({
  locations,
  chooseLocation,
  isLoading,
}: ChooseLocationMapProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedBorough, setSelectedBorough] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(null);

  const updateCurrentLocation = (id: string) => {
    const chosenLocation = locations.find((location) => location._id === id);
    if (chosenLocation) setCurrentLocation(chosenLocation);
  };

  const callAction = () => {
    if (!currentLocation) return;
    chooseLocation.action(currentLocation);
  };

  return (
    <div>
      <div className={styles.currentLocation}>
        <p>Current Location: {currentLocation?.title} </p>
        <Button onClick={callAction}>{chooseLocation.name}</Button>
      </div>
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
