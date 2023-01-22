import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdEditLocationAlt,
  MdAddLocationAlt,
  MdLocationOff,
  MdLocationOn,
  MdDashboard,
} from 'react-icons/md';
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
            {parentPage === 'Admin' ? <MdDashboard size="24px" /> : <MdLocationOn size="24px" />}
            {parentPage}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="create-location">
            <MdAddLocationAlt size="24px" />
            Create
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="edit-location">
            <MdEditLocationAlt size="24px" />
            Edit
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="delete-location">
            <MdLocationOff size="24px" />
            Delete
          </Link>
        </li>
      </ul>
    </nav>
  );
}
