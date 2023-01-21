import { LocationFormType, LocationType } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

const getEmptyLocationForm = (): LocationFormType => {
  return {
    _id: uuidv4(),
    title: '',
    category: 'spot',
    description: '',
    borough: 'manhattan',
    neighborhood: '',
    coordinates: {
      lat: '0',
      lng: '0',
    },
    rating: 1,
    add_image_url: '',
    images: [],
  };
};

export const locationToForm = (location: LocationType | null): LocationFormType => {
  if (!location) return getEmptyLocationForm();
  const { lat, lng } = location.coordinates;
  return {
    ...location,
    coordinates: {
      lat: lat.toString(),
      lng: lng.toString(),
    },
    add_image_url: '',
  };
};
