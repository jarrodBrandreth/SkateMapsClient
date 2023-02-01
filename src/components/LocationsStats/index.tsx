import React from 'react';
import SpotIcon from '../../assets/location.svg';
import ShopIcon from '../../assets/shop.svg';
import SkateparkIcon from '../../assets/skater.svg';
import { GrMapLocation } from 'react-icons/gr';
import { getCategoryPercentage } from '../../helperFunctions/getCategoryPercentage';
import { LocationType } from '../../types/types';
import { Accordion } from '../Accordion';
import styles from './LocationsStats.module.css';

interface LocationsStatsProps {
  className?: string;
  locations: LocationType[];
  startingState: boolean;
}

export function LocationsStats({ className, locations, startingState }: LocationsStatsProps) {
  const totalLocations = locations.length;
  const shopsPercentage = getCategoryPercentage(locations, 'shop');
  const spotsPercentage = getCategoryPercentage(locations, 'spot');
  const skateparkPercentage = getCategoryPercentage(locations, 'skatepark');

  return (
    <Accordion className={className} title="Statistics" startingState={startingState}>
      <ul className={styles.list_container}>
        <li className={styles.list_item}>
          <span className={styles.title}>
            <GrMapLocation size="30px" /> Total Locations
          </span>
          <span className={styles.number}>{totalLocations}</span>
        </li>
        <li className={styles.list_item}>
          <span className={styles.title}>
            <img src={SpotIcon} alt="spot icon" /> Spots
          </span>
          <span className={styles.number}>{Math.floor(spotsPercentage)}%</span>
        </li>
        <li className={styles.list_item}>
          <span className={styles.title}>
            <img src={SkateparkIcon} alt="skatepark icon" /> Skateparks
          </span>
          <span className={styles.number}>{Math.floor(skateparkPercentage)}%</span>
        </li>
        <li className={styles.list_item}>
          <span className={styles.title}>
            <img src={ShopIcon} alt="shop icon" /> Shops
          </span>
          <span className={styles.number}>{Math.floor(shopsPercentage)}%</span>
        </li>
      </ul>
    </Accordion>
  );
}
