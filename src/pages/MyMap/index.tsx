import React from 'react';
import { Accordion } from '../../components/Accordion';
import { LocationsMap } from '../../components/LocationsMap';
import { LocationsStats } from '../../components/LocationsStats';
import { useLocationsContext } from '../../context/LocationsContext';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DeleteAllButton } from '../../components/DeleteAllButton';
import styles from '../../styles/PageStyles.module.css';
import local_style from './MyMap.module.css';

export function MyMap() {
  const { myMapLocations } = useLocationsContext();
  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>My Map</h1>
        <p className={styles.description}>Collection of your own map locations</p>
      </header>
      <Accordion title="About" startingState={false}>
        <p>
          Here's a collection of your personalized locations. You can{' '}
          <Link to="create-location" className={local_style.link}>
            create
          </Link>
          ,{' '}
          <Link to="edit-location" className={local_style.link}>
            edit
          </Link>{' '}
          and{' '}
          <Link to="delete-location" className={local_style.link}>
            delete
          </Link>{' '}
          your locations as well as using the bookmark{' '}
          <MdOutlineBookmarkAdd className={local_style.icon} /> on locations page to save/remove a
          location from your MyMap.
          <span className={local_style.asterisk}>
            {' '}
            *Locations saved locally and will be removed when browser history is cleared.
          </span>
        </p>
      </Accordion>
      <LocationsStats locations={myMapLocations} startingState={false} />
      <LocationsMap locations={myMapLocations} isLoading={false} />
      <DeleteAllButton />
    </section>
  );
}
