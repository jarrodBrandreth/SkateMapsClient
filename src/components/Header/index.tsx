import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdApartment, MdDashboard, MdLocationOn } from 'react-icons/md';
import { RiUserLocationFill } from 'react-icons/ri';
import { useAuthContext } from '../../context/AuthContext';
import styles from './Header.module.css';

export function Header() {
  const { user } = useAuthContext();
  const location = useLocation();
  const myMapString = 'my-map';
  const dashboardString = 'dashboard';
  return (
    <header className={styles.site_header}>
      <div className={styles.logo}>
        <Link to="/">
          <MdApartment size="30px" />
        </Link>
        <span className={styles.title}>NYC SkateMaps</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={`${location.pathname === '/' && styles.on_page}`}>
            <Link to="">
              <MdLocationOn className={styles.mobile_nav_icon} />
              Locations
            </Link>
          </li>
          <li className={`${location.pathname.includes(myMapString) && styles.on_page}`}>
            <Link to="my-map">
              <RiUserLocationFill className={styles.mobile_nav_icon} />
              My Map
            </Link>
          </li>
          {user && (
            <li className={`${location.pathname.includes(dashboardString) && styles.on_page}`}>
              <Link to="dashboard">
                <MdDashboard className={styles.mobile_nav_icon} />
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
