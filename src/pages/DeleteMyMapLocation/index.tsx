import React, { useState } from 'react';
import { StepsDisplay } from '../../components/StepsDisplay';
import { useLocationsContext } from '../../context/LocationsContext';
import { DeleteLocationSteps, LocationType } from '../../types/types';
import { MdNotListedLocation, MdTask } from 'react-icons/md';
import { ChooseLocationMap } from '../../components/ChooseLocationMap';
import { Success } from '../../components/Success';
import { useDeleteMyMapLocation } from '../../hooks/useDeleteMyMapLocation';
import styles from '../../styles/PageStyles.module.css';

export function DeleteMyMapLocation() {
  const { myMapLocations } = useLocationsContext();
  const { deleteMyMapLocation } = useDeleteMyMapLocation();
  const [step, setStep] = useState<DeleteLocationSteps>('choose location');

  const deleteNew = () => {
    setStep('choose location');
  };

  const submitLocationToDelete = (locationToDelete: LocationType) => {
    deleteMyMapLocation(locationToDelete._id);
    setStep('success');
  };

  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={styles.page_heading}>
          <span className={styles.decorative}>My Map</span> Delete Location
        </h1>
        <StepsDisplay
          steps={['choose location', 'success']}
          currentStep={step}
          Icons={[MdNotListedLocation, MdTask]}
        />
      </header>

      {step === 'choose location' && (
        <ChooseLocationMap
          locations={myMapLocations}
          chooseLocation={{ name: 'delete', action: submitLocationToDelete }}
          isLoading={false}
        />
      )}

      {step === 'success' && (
        <Success startNew={deleteNew} pageName="delete" parentPage={'My Map'} />
      )}
    </section>
  );
}
