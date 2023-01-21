import React, { useState } from 'react';
import { MdDescription, MdPreview, MdTask } from 'react-icons/md';
import { ErrorDisplay } from '../../components/ErrorDisplay';
import { LocationForm } from '../../components/LocationForm';
import { LocationPreview } from '../../components/LocationPreview';
import { StepsDisplay } from '../../components/StepsDisplay';
import { Success } from '../../components/Success';
import { useCreateMyMapLocation } from '../../hooks/useCreateMyMapLocation';
import { CreateLocationSteps, LocationType } from '../../types/types';
import styles from '../CreateLocation/CreateLocation.module.css';

export function CreateMyMapLocation() {
  const [step, setStep] = useState<CreateLocationSteps>('form');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { createMyMapLocation } = useCreateMyMapLocation();

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
  const submitLocation = () => {
    if (!location) return;
    setError(null);

    const result = createMyMapLocation(location);

    if (result.error) {
      setError(result.error);
      return;
    }

    setStep('success');
  };

  return (
    <section>
      <h1 className={styles.page_heading}>
        <span>My Map</span> Create Location
      </h1>
      <StepsDisplay
        steps={['form', 'preview', 'success']}
        currentStep={step}
        Icons={[MdDescription, MdPreview, MdTask]}
      />

      {step === 'form' && <LocationForm location={location} updateLocation={updateLocation} />}
      {step === 'preview' && location && (
        <LocationPreview
          location={location}
          isLoading={false}
          submitLocation={submitLocation}
          edit={backToForm}
        />
      )}
      {step === 'success' && (
        <Success startNew={createNew} pageName="create" parentPage={'My Map'} />
      )}

      {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(null)} />}
    </section>
  );
}
