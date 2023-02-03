import React from 'react';
import { useOnOff } from '../../hooks/useOnOff';
import LocationIcon from '../../assets/location.svg';
import ShopIcon from '../../assets/shop.svg';
import SkateparkIcon from '../../assets/skater.svg';
import { MdOutlineMap, MdZoomIn } from 'react-icons/md';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { Button } from '../Button';
import styles from './Legend.module.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export function Legend() {
  const { isOn, turnOff, toggle } = useOnOff(false);
  const ref = useOutsideClick(turnOff);

  return (
    <div ref={ref}>
      <Button className={styles.button} onClick={toggle}>
        {isOn ? (
          <HiChevronDoubleLeft className={styles.icon} />
        ) : (
          <MdOutlineMap className={styles.icon} />
        )}
      </Button>
      <section className={`${styles.legend_container} ${isOn && styles.opened} `}>
        <h3 className={styles.heading}>Legend</h3>
        <ul className={styles.list_container}>
          <li className={styles.list_item}>
            <img src={LocationIcon} alt="" /> Spot
          </li>
          <li className={styles.list_item}>
            <img src={SkateparkIcon} alt="" /> Skatepark
          </li>
          <li className={styles.list_item}>
            <img src={ShopIcon} alt="" /> Shop
          </li>
          <li className={styles.list_item}>
            <MdZoomIn size="30px" /> Zoom On Marker
          </li>
        </ul>
      </section>
    </div>
  );
}
