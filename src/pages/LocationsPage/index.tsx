import React from 'react';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';

export function LocationsPage() {
  const { locations } = useLocationsContext();
  return (
    <div>
      <h1>Locations</h1>
      <LocationsMap locations={locations} />
    </div>
  );
}
