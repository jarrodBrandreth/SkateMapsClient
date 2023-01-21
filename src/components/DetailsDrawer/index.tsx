import React, { useMemo } from 'react';
import {
  MdLocationPin,
  MdShoppingBag,
  MdSkateboarding,
  MdClear,
  MdDirections,
} from 'react-icons/md';
import { useOnOff } from '../../hooks/useOnOff';
import { LocationType } from '../../types/types';
import { Button } from '../Button';
import { DetailsDrawerContent } from '../DetailsDrawerContent';
import styles from './DetailsDrawer.module.css';

interface DetailsDrawerProps {
  location: LocationType | null;
}

export function DetailsDrawer({ location }: DetailsDrawerProps) {
  const { isOn, toggle } = useOnOff(false);
  const googleLink = `https://www.google.com/maps/dir/?api=1&destination=${location?.coordinates.lat}%2C${location?.coordinates.lng}`;
  const LocationIcon = useMemo(() => {
    switch (location?.category) {
      case 'spot':
        return <MdLocationPin size="20px" />;
      case 'skatepark':
        return <MdSkateboarding size="20px" />;
      case 'shop':
        return <MdShoppingBag size="20px" />;
      default:
        return <MdLocationPin size="20px" />;
    }
  }, [location]);

  if (!location) return <></>;

  return (
    <section className={`${styles.container} ${isOn && styles.opened}`}>
      <Button className={styles.tab} onClick={toggle}>
        {isOn ? <MdClear size="20px" /> : LocationIcon}
      </Button>
      <h3 className={styles.title}>
        {LocationIcon}
        {location.title}
      </h3>
      <DetailsDrawerContent
        className={styles.content}
        id={location._id}
        images={location.images}
        description={location.description}
        neighborhood={location.neighborhood}
        borough={location.borough}
        rating={location.rating}
      />
      <div className={styles.link_wrapper}>
        <a className={styles.link} href={googleLink} rel="noreferrer" target="_blank">
          Get Directions <MdDirections size="18px" />
        </a>
      </div>
    </section>
  );
}
