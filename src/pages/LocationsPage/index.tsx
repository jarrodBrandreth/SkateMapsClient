import React from 'react';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';
import styles from '../../styles/PageStyles.module.css';

export function LocationsPage() {
  const { locations } = useLocationsContext();
  return (
    <div>
      <header className={`${styles.page_header} ${styles.locations_page}`}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Locations</h1>
        <p className={styles.description}>Popular NYC skate destinations</p>
      </header>
      <LocationsMap locations={locations} />
    </div>
  );
}
