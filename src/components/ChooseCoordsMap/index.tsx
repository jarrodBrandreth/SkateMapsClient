import React, { useState } from 'react';
import { Map } from '../Map';
import { DraggablePin } from '../DraggablePin';
import { LocationPinPosition } from '../../types/types';
import { Button } from '../Button';
import { MdPushPin, MdArrowBack } from 'react-icons/md';
import { hasCoords } from '../../helperFunctions/hasCoords';
import styles from './ChooseCoordsMap.module.css';

interface ChooseCoordsProps {
  previousLocation: LocationPinPosition;
  cancel: () => void;
  updateWithCoords: (coords: LocationPinPosition) => void;
}

export function ChooseCoordsMap({ previousLocation, updateWithCoords, cancel }: ChooseCoordsProps) {
  const [coords, setCoords] = useState<LocationPinPosition>(
    hasCoords(previousLocation) ? previousLocation : { lat: 40.735036, lng: -73.991531 },
  );

  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <Button className={styles.cancel} onClick={cancel}>
          <MdArrowBack size="20px" />
          Cancel
        </Button>

        <div className={styles.coordinates}>
          <div className={styles.coordinate}>
            <span className={styles.title}>Latitude:</span>
            {coords ? coords.lat.toFixed(5) : 0}
          </div>
          <div className={styles.coordinate}>
            <span className={styles.title}>Longitude:</span>
            {coords ? coords.lng.toFixed(5) : 0}
          </div>
        </div>
        <Button
          className={styles.use_coords}
          disabled={coords ? false : true}
          onClick={() => updateWithCoords(coords)}
        >
          <MdPushPin size="20px" /> Use Coords
        </Button>
      </section>
      <Map
        center={
          hasCoords(previousLocation)
            ? [previousLocation.lat, previousLocation.lng]
            : [40.735036, -73.991531]
        }
        zoom={17}
      >
        <DraggablePin coords={coords} setCoords={setCoords} />
      </Map>
    </div>
  );
}
