import React from 'react';
import { MdOutlineSettings } from 'react-icons/md';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Loading</p>
        <MdOutlineSettings className={styles.spinner} />
      </div>
    </div>
  );
}
