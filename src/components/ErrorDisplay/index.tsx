import React from 'react';
import { MdCancel, MdError } from 'react-icons/md';
import { Button } from '../Button';
import styles from './ErrorDisplay.module.css';

interface ErrorDisplayProps {
  errorMessage: string;
  closeErrorDisplay: () => void;
}

export function ErrorDisplay({ errorMessage, closeErrorDisplay }: ErrorDisplayProps) {
  return (
    <div className={styles.container}>
      <MdError className={styles.error_icon} />
      <p className={styles.msg}>{errorMessage}</p>
      <Button className={styles.close_button} onClick={closeErrorDisplay}>
        <MdCancel size="24px" />
      </Button>
    </div>
  );
}
