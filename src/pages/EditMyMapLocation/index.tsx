import React, { useState } from 'react';
import { StepsDisplay } from '../../components/StepsDisplay';
import { useLocationsContext } from '../../context/LocationsContext';
import { EditLocationSteps, LocationType } from '../../types/types';
import { MdNotListedLocation, MdDescription, MdPreview, MdTask } from 'react-icons/md';
import { ChooseLocationMap } from '../../components/ChooseLocationMap';
import { LocationForm } from '../../components/LocationForm';
import { LocationPreview } from '../../components/LocationPreview';
import { Success } from '../../components/Success';
import { useEditMyMapLocation } from '../../hooks/useEditMyMapLocation';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import styles from '../../styles/PageStyles.module.css';

export function EditMyMapLocation() {
  const { myMapLocations } = useLocationsContext();
  const { editMyMapLocation } = useEditMyMapLocation();
  const [step, setStep] = useState<EditLocationSteps>('choose location');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);

  // updates location based on Location Form data
  const updateLocation = (newLocation: LocationType) => {
    setLocation(newLocation);
    setStep('preview');
  };

  // button appears with form to take user back to choose location state
  const chooseDifferentLocation = () => {
    setLocation(null);
    setStep('choose location');
  };

  // removes error display and takes user back to form
  const backToForm = () => {
    setStep('form');
  };

  const editNew = () => {
    setStep('choose location');
    setLocation(null);
  };

  const chooseLocation = (location: LocationType) => {
    setLocation(location);
    setStep('form');
  };

  const submitLocation = () => {
    if (!location) return;
    const result = editMyMapLocation(location);
    if (result.error) {
      setError(result.error);
      return;
    }
    setStep('success');
  };

  return (
    <section className={styles.container}>
      <header className={styles.page_header}>
        <h1 className={styles.page_heading}>
          <span className={styles.decorative}>My Map</span> Edit Location
        </h1>
        <StepsDisplay
          steps={['choose location', 'form', 'preview', 'success']}
          currentStep={step}
          Icons={[MdNotListedLocation, MdDescription, MdPreview, MdTask]}
        />
      </header>

      {step === 'choose location' && (
        <ChooseLocationMap
          locations={myMapLocations}
          chooseLocation={{ name: 'edit', action: chooseLocation }}
          isLoading={false}
        />
      )}

      {step === 'form' && (
        <LocationForm
          location={location}
          updateLocation={updateLocation}
          chooseDifferentLocation={chooseDifferentLocation}
        />
      )}

      {step === 'preview' && location && (
        <LocationPreview
          location={location}
          isLoading={false}
          submitLocation={submitLocation}
          edit={backToForm}
        />
      )}
      {step === 'success' && <Success startNew={editNew} pageName="edit" parentPage={'My Map'} />}

      {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(null)} />}
    </section>
  );
}
