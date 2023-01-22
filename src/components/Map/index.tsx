import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { latitudeMin, latitudeMax, longitudeMin, longitudeMax } from '../../globals';
import styles from './Map.module.css';

interface MapProps {
  children: React.ReactNode;
  center: LatLngExpression;
  zoom: number;
}

export function Map({ center, zoom, children }: MapProps) {
  return (
    <div className={styles.map_container}>
      <MapContainer
        center={center}
        minZoom={11}
        zoom={zoom}
        maxBounds={[
          [latitudeMax, longitudeMin],
          [latitudeMin, longitudeMax],
        ]}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
  );
}
