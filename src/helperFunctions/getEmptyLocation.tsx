import { LocationType } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

export const getEmptyLocation = (): LocationType => {
  return {
    _id: uuidv4(),
    title: '',
    category: 'spot',
    description: '',
    borough: 'manhattan',
    neighborhood: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    rating: 1,
    images: [],
  };
};
