import React from 'react';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';
import styles from '../../styles/PageStyles.module.css';

export function LocationsPage() {
  const { locations } = useLocationsContext();
  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Locations</h1>
        <p className={styles.description}>Popular NYC skate destinations</p>
      </header>
      <LocationsMap locations={locations} />
    </section>
  );
}
