import React from 'react';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';
import styles from '../../styles/PageStyles.module.css';

export function MyMapPage() {
  const { myMapLocations } = useLocationsContext();
  return (
    <div>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>My Map</h1>
        <p className={styles.description}>Collection of your own map locations</p>
      </header>
      <LocationsMap locations={myMapLocations} />
    </div>
  );
}
