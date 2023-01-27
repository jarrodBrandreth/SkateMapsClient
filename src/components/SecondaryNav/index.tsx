import React from 'react';
import { Link } from 'react-router-dom';
import { MdEditLocationAlt, MdAddLocationAlt, MdLocationOff, MdDashboard } from 'react-icons/md';
import { RiUserLocationFill } from 'react-icons/ri';
import styles from './SecondaryNav.module.css';
import { ParentPageOptions } from '../../types/types';

interface SecondaryNavProps {
  parentPage: ParentPageOptions;
}

export function SecondaryNav({ parentPage }: SecondaryNavProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list_container}>
        <li>
          <Link className={styles.link} to="">
            {parentPage === 'Dashboard' ? (
              <MdDashboard size="22px" />
            ) : (
              <RiUserLocationFill size="22px" />
            )}
            {parentPage}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="create-location">
            <MdAddLocationAlt size="22px" />
            Create
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="edit-location">
            <MdEditLocationAlt size="22px" />
            Edit
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="delete-location">
            <MdLocationOff size="22px" />
            Delete
          </Link>
        </li>
      </ul>
    </nav>
  );
}
