import React from 'react';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';

export function MyMapPage() {
  const { myMapLocations } = useLocationsContext();
  return (
    <div>
      <h1>My Map</h1>
      <LocationsMap locations={myMapLocations} />
    </div>
  );
}
