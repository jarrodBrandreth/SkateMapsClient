import React from 'react';
import { MapMarker } from '../MapMarker';
import { Map } from '../Map';
import { LocationType } from '../../types/types';
import { Button } from '../Button';
import { MdEdit, MdCheck } from 'react-icons/md';
import { Drawer } from '../Drawer';
import styles from './LocationPreview.module.css';
import { Loader } from '../Loader';

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
      <h2 className={styles.heading}>Preview</h2>
      <div className={styles.content}>
        <div className={styles.top_section}>
          <Button className={styles.edit} onClick={edit}>
            <MdEdit size="16px" />
            Edit
          </Button>
          <Button className={styles.submit} disabled={isLoading} onClick={submitLocation}>
            <MdCheck size="16px" />
            Submit
          </Button>
        </div>
        <div className={styles.map_wrapper}>
          {isLoading && <Loader />}
          <Drawer location={location} />
          <Map center={[location.coordinates.lat, location.coordinates.lng]} zoom={16}>
            <MapMarker
              id={location._id}
              title={location.title}
              category={location.category}
              neighborhood={location.neighborhood}
              coordinates={location.coordinates}
              rating={location.rating}
            />
          </Map>
        </div>
      </div>
    </section>
  );
}
