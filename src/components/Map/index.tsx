import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface MapProps {
  children: React.ReactNode;
  center: LatLngExpression;
  zoom: number;
}

export function Map({ center, zoom, children }: MapProps) {
  return (
    <MapContainer
      center={center}
      minZoom={11}
      zoom={zoom}
      maxBounds={[
        [40.976443, -74.384081],
        [40.439284, -73.792193],
      ]}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
