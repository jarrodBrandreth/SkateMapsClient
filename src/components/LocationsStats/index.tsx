import React from 'react';
import SpotIcon from '../../assets/location.svg';
import ShopIcon from '../../assets/shop.svg';
import SkateparkIcon from '../../assets/skater.svg';
import { MdOutlineAddBox, MdOutlineIndeterminateCheckBox } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import { getCategoryPercentage } from '../../helperFunctions/getCategoryPercentage';
import { LocationType } from '../../types/types';
import { Button } from '../Button';
import { useOnOff } from '../../hooks/useOnOff';
import styles from './LocationsStats.module.css';

interface LocationsStatsProps {
  locations: LocationType[];
  startingState: boolean;
}

export function LocationsStats({ locations, startingState }: LocationsStatsProps) {
  const totalLocations = locations.length;
  const shopsPercentage = getCategoryPercentage(locations, 'shop');
  const spotsPercentage = getCategoryPercentage(locations, 'spot');
  const skateparkPercentage = getCategoryPercentage(locations, 'skatepark');
  const { isOn, toggle } = useOnOff(startingState);

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>Statistics</h2>
        <Button onClick={toggle}>
          {isOn ? <MdOutlineIndeterminateCheckBox size="24px" /> : <MdOutlineAddBox size="24px" />}
        </Button>
      </div>

      <ul className={`${styles.list_container} ${isOn && styles.opened}`}>
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
    </section>
  );
}
