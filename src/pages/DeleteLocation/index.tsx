import React, { useState } from 'react';
import { StepsDisplay } from '../../components/StepsDisplay';
import { useLocationsContext } from '../../context/LocationsContext';
import { DeleteLocationSteps, LocationType } from '../../types/types';
import { MdNotListedLocation, MdTask } from 'react-icons/md';
import { ChooseLocationMap } from '../../components/ChooseLocationMap';
import { Success } from '../../components/Success';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import { useDeleteLocation } from '../../hooks/useDeleteLocation';
import styles from './DeleteLocation.module.css';

export function DeleteLocation() {
  const { locations } = useLocationsContext();
  const [step, setStep] = useState<DeleteLocationSteps>('choose location');
  const [error, setError] = useState<string | null>(null);
  const { deleteLocation, isLoading } = useDeleteLocation();

  const deleteNew = () => {
    setStep('choose location');
  };

  const submitLocationToDelete = async (location: LocationType) => {
    setError(null);

    const result = await deleteLocation(location._id);

    if (result.error) {
      setError(result.error);
      return;
    }

    setStep('success');
  };

  return (
    <section>
      <h1 className={styles.page_heading}>
        <span>Admin</span> Delete Location
      </h1>
      <StepsDisplay
        steps={['choose location', 'success']}
        currentStep={step}
        Icons={[MdNotListedLocation, MdTask]}
      />

      {step === 'choose location' && (
        <ChooseLocationMap
          locations={locations}
          chooseLocation={{ name: 'delete', action: submitLocationToDelete }}
          isLoading={isLoading}
        />
      )}

      {step === 'success' && (
        <Success startNew={deleteNew} pageName="delete" parentPage={'Admin'} />
      )}

      {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(null)} />}
    </section>
  );
}
