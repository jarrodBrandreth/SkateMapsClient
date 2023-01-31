import React, { useRef } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { MdZoomIn } from 'react-icons/md';
import { getCustomIcon } from '../../helperFunctions/getCustomIcons';
import { Button } from '../Button';
import { Rating } from '../Rating';
import styles from './MapMarker.module.css';

interface MapMarkerProps {
  updateCurrentLocation?: (id: string) => void;
  id: string;
  category: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  title: string;
  neighborhood: string;
  rating: number;
}

export function MapMarker({
  id,
  title,
  category,
  neighborhood,
  coordinates,
  rating,
  updateCurrentLocation,
}: MapMarkerProps) {
  const map = useMap();
  const markerRef: React.MutableRefObject<null | any> = useRef(null);
  const eventHandlers = {
    click: () => {
      const marker = markerRef.current;
      if (marker !== null && updateCurrentLocation) {
        updateCurrentLocation(id);
      }
    },
  };

  const zoomInOnMarker = () => map.flyTo([coordinates.lat, coordinates.lng], 18);

  return (
    <Marker
      position={[coordinates.lat, coordinates.lng]}
      icon={getCustomIcon(category)}
      ref={markerRef}
      eventHandlers={eventHandlers}
    >
      <Popup>
        <Button className={styles.zoom_in} onClick={zoomInOnMarker}>
          <MdZoomIn size="18px" />
        </Button>
        {title} <br />
        {neighborhood} <br />
        <Rating className={styles.rating} number={rating} />
      </Popup>
    </Marker>
  );
}
