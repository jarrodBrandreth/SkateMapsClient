import React from 'react';
import { MdTaskAlt, MdArrowForward, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ParentPageOptions } from '../../types/types';
import { Button } from '../Button';
import styles from './Success.module.css';

interface SuccessProps {
  pageName: string;
  startNew: () => void;
  parentPage: ParentPageOptions;
}

export function Success({ pageName, startNew, parentPage }: SuccessProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Success!</h2>
      <MdTaskAlt className={styles.success_icon} />

      <div className={styles.actions_container}>
        <Link
          className={`${styles.action} ${styles.back_to}`}
          to={`${parentPage === 'Dashboard' ? '/dashboard' : '/my-map'}`}
        >
          <MdArrowBack size="22px" />
          Back To {parentPage}
        </Link>
        <Button className={`${styles.action} ${styles.new}`} onClick={startNew}>
          {`${pageName} new location`}
          <MdArrowForward size="22px" />
        </Button>
      </div>
    </div>
  );
}
