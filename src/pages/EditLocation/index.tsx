import React, { useState } from 'react';
import { StepsDisplay } from '../../components/StepsDisplay';
import { useLocationsContext } from '../../context/LocationsContext';
import { EditLocationSteps, LocationType } from '../../types/types';
import { MdNotListedLocation, MdDescription, MdPreview, MdTask } from 'react-icons/md';
import { ChooseLocationMap } from '../../components/ChooseLocationMap';
import { LocationForm } from '../../components/LocationForm';
import { LocationPreview } from '../../components/LocationPreview';
import { Success } from '../../components/Success';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import { useEditLocation } from '../../hooks/useEditLocation';
import styles from '../../styles/PageStyles.module.css';

export function EditLocation() {
  const { locations } = useLocationsContext();
  const [step, setStep] = useState<EditLocationSteps>('choose location');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { editLocation, isLoading } = useEditLocation();

  // updates location based on Location Form data
  const updateLocation = (newLocation: LocationType) => {
    setLocation(newLocation);
    setStep('preview');
  };

  // removes error display and takes user back to form
  const backToForm = () => {
    setStep('form');
    setError(null);
  };

  const editNew = () => {
    setStep('choose location');
    setLocation(null);
  };

  const chooseLocation = (location: LocationType) => {
    setLocation(location);
    setStep('form');
  };

  const submitLocation = async () => {
    if (!location) return;
    setError(null);
    const result = await editLocation(location);
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
          <span className={styles.decorative}>Dashboard</span> Edit Location
        </h1>
        <StepsDisplay
          steps={['choose location', 'form', 'preview', 'success']}
          currentStep={step}
          Icons={[MdNotListedLocation, MdDescription, MdPreview, MdTask]}
        />
      </header>

      {step === 'choose location' && (
        <ChooseLocationMap
          locations={locations}
          chooseLocation={{ name: 'edit', action: chooseLocation }}
          isLoading={false}
        />
      )}

      {step === 'form' && <LocationForm location={location} updateLocation={updateLocation} />}
      {step === 'preview' && location && (
        <LocationPreview
          location={location}
          isLoading={isLoading}
          submitLocation={submitLocation}
          edit={backToForm}
        />
      )}
      {step === 'success' && (
        <Success startNew={editNew} pageName="edit" parentPage={'Dashboard'} />
      )}

      {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(null)} />}
    </section>
  );
}
