import React from 'react';
import { useOnOff } from '../../hooks/useOnOff';
import { Link } from 'react-router-dom';
import {
  MdEditLocationAlt,
  MdAddLocationAlt,
  MdLocationOff,
  MdLocationOn,
  MdDashboard,
  MdMenu,
  MdClear,
} from 'react-icons/md';
import styles from './SecondaryNav.module.css';
import { ParentPageOptions } from '../../types/types';

interface SecondaryNavProps {
  parentPage: ParentPageOptions;
}

export function SecondaryNav({ parentPage }: SecondaryNavProps) {
  const { isOn: menuOpen, toggle } = useOnOff(false);
  return (
    <>
      <button className={styles.menu_button} onClick={toggle}>
        {menuOpen ? <MdClear size="24px" /> : <MdMenu size="24px" />}
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.opened : ''}`}>
        <ul className={styles.list_container}>
          <p className={styles.parent_page}>{parentPage}</p>
          <li>
            {parentPage === 'Admin' ? (
              <Link className={styles.link} to="">
                <MdDashboard size="24px" />
                Dashboard
              </Link>
            ) : (
              <Link className={styles.link} to="">
                <MdLocationOn size="24px" />
                My Map
              </Link>
            )}
          </li>
          <li>
            <Link className={styles.link} to="create-location">
              <MdAddLocationAlt size="24px" />
              Create Location
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="edit-location">
              <MdEditLocationAlt size="24px" />
              Edit Location
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="delete-location">
              <MdLocationOff size="24px" />
              Delete Location
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
