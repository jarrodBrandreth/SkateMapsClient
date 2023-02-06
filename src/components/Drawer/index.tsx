import React, { useMemo, useState } from 'react';
import styles from './Drawer.module.css';
import {
  MdLocationPin,
  MdShoppingBag,
  MdSkateboarding,
  MdClear,
  MdDirections,
} from 'react-icons/md';
import { Button } from '../Button';
import { LocationType } from '../../types/types';
import { DrawerContent } from '../DrawerContent';

interface DrawerProps {
  location: LocationType | null;
}

export function Drawer({ location }: DrawerProps) {
  const [open, setOpen] = useState(false);
  const googleLink = `https://www.google.com/maps/dir/?api=1&destination=${location?.coordinates.lat}%2C${location?.coordinates.lng}`;
  const LocationIcon = useMemo(() => {
    switch (location?.category) {
      case 'spot':
        return <MdLocationPin size="24px" />;
      case 'skatepark':
        return <MdSkateboarding size="24px" />;
      case 'shop':
        return <MdShoppingBag size="24px" />;
      default:
        return <MdLocationPin size="24px" />;
    }
  }, [location]);

  if (!location) return <></>;
  return (
    <>
      <Button className={styles.tab} onClick={() => setOpen(true)}>
        {LocationIcon}
      </Button>
      <section className={`${styles.container} ${open && styles.opened}`}>
        <header className={styles.heading}>
          {LocationIcon}
          <h3 className={styles.title}>{location.title}</h3>
          <Button className={styles.close} onClick={() => setOpen(false)}>
            <MdClear />
          </Button>
        </header>
        <DrawerContent
          id={location._id}
          images={location.images}
          description={location.description}
          neighborhood={location.neighborhood}
          borough={location.borough}
          rating={location.rating}
        />
        <div className={styles.link_wrapper}>
          <a className={styles.link} href={googleLink} rel="noreferrer" target="_blank">
            Get Directions <MdDirections size="26px" />
          </a>
        </div>
      </section>
    </>
  );
}
