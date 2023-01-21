import L, { Icon } from 'leaflet';
import LocationSvg from '../assets/location.svg';
import ShopSvg from '../assets/shop.svg';
import SkaterSvg from '../assets/skater.svg';

const ShopIcon = new L.Icon({
  iconUrl: ShopSvg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});
const LocationIcon = new L.Icon({
  iconUrl: LocationSvg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});
const SkateparkIcon = new L.Icon({
  iconUrl: SkaterSvg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

export const getCustomIcon = (category: string): Icon => {
  switch (category) {
    case 'skatepark':
      return SkateparkIcon;
    case 'spot':
      return LocationIcon;
    case 'shop':
      return ShopIcon;
    default:
      return LocationIcon;
  }
};
