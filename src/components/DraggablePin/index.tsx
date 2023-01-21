import React, { useMemo, useRef } from 'react';
import L from 'leaflet';
import MapPinSvg from '../../assets/push_pin.svg';
import { Marker, useMap } from 'react-leaflet';
import { LocationPinPosition } from '../../types/types';
import { MdFilterCenterFocus } from 'react-icons/md';
import { Button } from '../Button';
import styles from './DraggablePin.module.css';

interface DraggablePinProps {
  coords: LocationPinPosition;
  setCoords: React.Dispatch<React.SetStateAction<LocationPinPosition>>;
}

const MapPinIcon = new L.Icon({
  iconUrl: MapPinSvg,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
});

export function DraggablePin({ coords, setCoords }: DraggablePinProps) {
  const map = useMap();
  const markerRef: React.MutableRefObject<null | any> = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      drag: () => {
        const marker = markerRef.current;
        if (marker !== null) {
          setCoords(marker.getLatLng());
        }
      },
    }),
    [setCoords],
  );
  const centerMarker = () => {
    const marker = markerRef.current;
    if (marker != null) {
      marker.setLatLng(map.getCenter());
    }
  };

  return (
    <>
      <Button className={styles.center_marker_button} onClick={centerMarker}>
        <MdFilterCenterFocus size="22px" /> Marker
      </Button>
      <Marker
        icon={MapPinIcon}
        draggable={true}
        eventHandlers={eventHandlers}
        position={coords ? [coords.lat, coords.lng] : map.getCenter()}
        ref={markerRef}
      />
    </>
  );
}
