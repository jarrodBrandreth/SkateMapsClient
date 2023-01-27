import React, { useState } from 'react';
import { MdDescription, MdPreview, MdTask } from 'react-icons/md';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import { LocationForm } from '../../components/LocationForm';
import { LocationPreview } from '../../components/LocationPreview';
import { StepsDisplay } from '../../components/StepsDisplay';
import { Success } from '../../components/Success';
import { useCreateLocation } from '../../hooks/useCreateLocation';
import { CreateLocationSteps, LocationType } from '../../types/types';
import styles from '../../styles/PageStyles.module.css';

export function CreateLocation() {
  const [step, setStep] = useState<CreateLocationSteps>('form');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { createLocation, isLoading } = useCreateLocation();

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

  const createNew = () => {
    setStep('form');
    setLocation(null);
  };

  // submit location shows error display if error exists
  const submitLocation = async () => {
    if (!location) return;
    setError(null);
    const result = await createLocation(location);

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
          <span className={styles.decorative}>Dashboard</span> Create Location
        </h1>
        <StepsDisplay
          steps={['form', 'preview', 'success']}
          currentStep={step}
          Icons={[MdDescription, MdPreview, MdTask]}
        />
      </header>

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
        <Success startNew={createNew} pageName="create" parentPage={'Dashboard'} />
      )}

      {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(null)} />}
    </section>
  );
}
