import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdApartment } from 'react-icons/md';
import styles from './Header.module.css';

export function Header() {
  const location = useLocation();
  const myMapString = 'my-map';
  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <MdApartment size="30px" />
        </Link>
        <span className={styles.title}>NYC SkateMaps</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={`${location.pathname === '/' && styles.on_page}`}>
            <Link to="">Locations</Link>
          </li>
          <li className={`${location.pathname.includes(myMapString) && styles.on_page}`}>
            <Link to="my-map">My Map</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
