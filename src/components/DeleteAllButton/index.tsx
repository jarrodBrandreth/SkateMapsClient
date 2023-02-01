import React, { useState } from 'react';
import { useDeleteMyMapLocation } from '../../hooks/useDeleteMyMapLocation';
import { MdWarning } from 'react-icons/md';
import { Button } from '../Button';
import styles from './DeleteAllButton.module.css';

export function DeleteAllButton() {
  const { deleteAllMyMapLocations } = useDeleteMyMapLocation();
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <Button className={styles.delete} onClick={() => setPopUp(true)}>
        <MdWarning size="24px" />
        Delete All Locations
      </Button>
      {popUp && (
        <div className={styles.confirm_container}>
          <p>Are you sure you would like to remove all MyMap locations?</p>
          <Button className={styles.cancel} onClick={() => setPopUp(false)}>
            Cancel
          </Button>
          <Button className={styles.confirm} onClick={deleteAllMyMapLocations}>
            Confirm
          </Button>
        </div>
      )}
    </>
  );
}
