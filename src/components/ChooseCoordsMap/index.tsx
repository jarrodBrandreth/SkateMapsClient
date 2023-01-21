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
      <Map center={[coords.lat, coords.lng]} zoom={17}>
        <DraggablePin coords={coords} setCoords={setCoords} />
      </Map>
    </div>
  );
}
