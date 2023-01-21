import React from 'react';
import { MapMarker } from '../MapMarker';
import { Map } from '../Map';
import { LocationType } from '../../types/types';
import { Button } from '../Button';
import { MdEdit, MdCheck } from 'react-icons/md';
import { DetailsDrawer } from '../DetailsDrawer';
import styles from './LocationPreview.module.css';

interface LocationPreviewProps {
  location: LocationType;
  isLoading: boolean;
  submitLocation: () => void;
  edit: () => void;
}
export function LocationPreview({
  location,
  isLoading,
  submitLocation,
  edit,
}: LocationPreviewProps) {
  return (
    <section className={styles.container}>
      <h3>Preview</h3>
      <Map center={[location.coordinates.lat, location.coordinates.lng]} zoom={16}>
        <MapMarker
          id={location._id}
          title={location.title}
          category={location.category}
          neighborhood={location.neighborhood}
          coordinates={location.coordinates}
          rating={location.rating}
        />
        <DetailsDrawer location={location} />
      </Map>
      <div className={styles.bottom_section}>
        <Button className={styles.edit_button} onClick={edit}>
          <MdEdit size="24px" /> Edit
        </Button>
        <Button className={styles.submit_button} disabled={isLoading} onClick={submitLocation}>
          <MdCheck size="24px" /> Submit
        </Button>
      </div>
    </section>
  );
}
