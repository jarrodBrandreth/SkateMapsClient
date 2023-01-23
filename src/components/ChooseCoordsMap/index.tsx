import React, { useState } from 'react';
import { Map } from '../Map';
import { DraggablePin } from '../DraggablePin';
import { LocationFormCoordsType, LocationPinPosition } from '../../types/types';
import { Button } from '../Button';
import { MdPushPin, MdArrowBack } from 'react-icons/md';
import { checkCoords } from '../../helperFunctions/checkCoords';
import styles from './ChooseCoordsMap.module.css';

interface ChooseCoordsProps {
  previousLocation: LocationFormCoordsType;
  cancel: () => void;
  updateWithCoords: (coords: LocationPinPosition) => void;
}

export function ChooseCoordsMap({ previousLocation, updateWithCoords, cancel }: ChooseCoordsProps) {
  const [coords, setCoords] = useState<LocationPinPosition>(checkCoords(previousLocation));

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Choose Coordinates</h2>
      <Button className={`${styles.cancel} ${styles.action}`} onClick={cancel}>
        <MdArrowBack size="20px" />
        Cancel
      </Button>
      <div className={styles.coordinates}>
        <p className={styles.coordinate}>
          <span className={styles.title}>Latitude: </span>
          <span className={styles.value}>{coords ? coords.lat.toFixed(4) : 0}</span>
        </p>
        <p className={styles.coordinate}>
          <span className={styles.title}>Longitude: </span>
          <span className={styles.value}>{coords ? coords.lng.toFixed(4) : 0}</span>
        </p>
      </div>
      <Map center={[coords.lat, coords.lng]} zoom={17}>
        <Button
          className={`${styles.use_coords} ${styles.action}`}
          disabled={coords ? false : true}
          onClick={() => updateWithCoords(coords)}
        >
          <MdPushPin size="22px" /> Use Coords
        </Button>
        <DraggablePin coords={coords} setCoords={setCoords} />
      </Map>
    </section>
  );
}
