import React, { useState } from 'react';
import { Map } from '../Map';
import { MapMarker } from '../MapMarker';
import { SearchBar } from '../SearchBar';
import { LocationType } from '../../types/types';
import { applyFilters } from '../../helperFunctions/applyFilters';
import { Button } from '../Button';
import { MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Drawer } from '../Drawer';
import { Loader } from '../Loader';
import styles from './ChooseLocationMap.module.css';
import { Legend } from '../Legend';

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
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose A Location To {chooseLocation.name}</h2>
      <div className={styles.content}>
        <div className={styles.current_location}>
          <p className={styles.text}>Current Location: </p>
          <div className={styles.title}>
            <p>{currentLocation ? currentLocation.title : 'choose a location'}</p>
            <Button
              className={`${styles.action} ${styles[chooseLocation.name]}`}
              disabled={currentLocation === null || isLoading}
              onClick={callAction}
            >
              {chooseLocation.name === 'edit' ? <MdEdit /> : <FaRegTrashAlt />}
              {chooseLocation.name}
            </Button>
          </div>
        </div>
        <div className={styles.map_wrapper}>
          {isLoading && <Loader />}
          <Legend />
          <Drawer location={currentLocation} />
          <Map zoom={13} center={[40.741283667303954, -73.96788974139568]}>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
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
      </div>
    </div>
  );
}
