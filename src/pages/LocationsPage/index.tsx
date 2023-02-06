import React from 'react';
import { Accordion } from '../../components/Accordion';
import { LocationsMap } from '../../components/LocationsMap';
import { useLocationsContext } from '../../context/LocationsContext';
import SkateparkIcon from '../../assets/skater.svg';
import styles from '../../styles/PageStyles.module.css';

export function LocationsPage() {
  const { locations, isLoading } = useLocationsContext();

  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={`${styles.page_heading} ${styles.decorative}`}>Locations</h1>
        <p className={styles.description}>Popular NYC skate destinations</p>
      </header>
      <Accordion title="About" startingState={true}>
        <p>
          This site is a a homage to New York skateboarding. It is a collection of some popular
          locations among skateboarders in New York City. It is a re-imagined version of{' '}
          <a
            href="https://quartersnacks.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#0e7531', fontWeight: 500 }}
          >
            Quartersnacks
          </a>{' '}
          spots map. Many of the images used are taken from Quartersnacks,{' '}
          <a
            href="https://quartersnacks.com/spots/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#0e7531', fontWeight: 500 }}
          >
            view their map here.
          </a>
        </p>
      </Accordion>
      <Accordion title="Disclaimer" startingState={true}>
        <p>
          Unless explicitly marked as a skatepark{' '}
          <img
            src={SkateparkIcon}
            alt="skatepark icon"
            style={{ width: '24px', verticalAlign: 'text-bottom' }}
          />{' '}
          some locations may be prohibited for skateboarding. Be respectful of the community and
          follow local laws and by-laws. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam modi, doloremque et quos dolorum labore. Nobis molestias ab itaque excepturi eius
          reprehenderit sunt blanditiis qui? Dolorem amet porro cupiditate. Ipsa.
        </p>
      </Accordion>
      <LocationsMap locations={locations} isLoading={isLoading} />
    </section>
  );
}
