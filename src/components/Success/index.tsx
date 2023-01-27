import React from 'react';
import { MdOutlineDashboard, MdOutlineDashboardCustomize, MdTaskAlt } from 'react-icons/md';
import { RiUserLocationFill } from 'react-icons/ri';
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
      <h3 className={styles.heading}>Success!</h3>
      <MdTaskAlt className={styles.success_icon} />
      <div className={styles.actions_container}>
        <Link
          className={styles.action}
          to={`${parentPage === 'Dashboard' ? '/dashboard' : '/my-map'}`}
        >
          {parentPage === 'Dashboard' ? (
            <MdOutlineDashboard size="22px" />
          ) : (
            <RiUserLocationFill size="22px" />
          )}
          {parentPage}
        </Link>
        <Button className={styles.action} onClick={startNew}>
          <MdOutlineDashboardCustomize size="22px" />
          {`${pageName} new location`}
        </Button>
      </div>
    </div>
  );
}
