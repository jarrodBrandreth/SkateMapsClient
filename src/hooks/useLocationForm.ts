import { useReducer } from 'react';
import { locationToForm } from '../helperFunctions/locationToForm';
import { LocationFormType, LocationFormAction, LocationType } from '../types/types';

const formReducer = (state: LocationFormType, action: LocationFormAction): LocationFormType => {
  switch (action.type) {
    case 'title':
      return {
        ...state,
        title: action.payload,
      };
    case 'category':
      return {
        ...state,
        category: action.payload,
      };
    case 'description':
      return {
        ...state,
        description: action.payload,
      };
    case 'borough':
      return {
        ...state,
        borough: action.payload,
      };
    case 'neighborhood':
      return {
        ...state,
        neighborhood: action.payload,
      };
    case 'latitude':
   
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          lat: action.payload,
        },
      };
    case 'longitude':
 
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          lng: action.payload,
        },
      };
    case 'update coordinates':
      return {
        ...state,
        coordinates: action.payload,
      };
    case 'add image url':
      return {
        ...state,
        add_image_url: action.payload,
      };
    case 'add image':
      return {
        ...state,
        images: [...state.images, action.payload],
        add_image_url: '',
      };
    case 'remove image':
      return {
        ...state,
        images: [...state.images].filter((url) => url !== action.payload),
      };
    case 'rating':
      return {
        ...state,
        rating: action.payload,
      };

    default:
      throw new Error();
  }
};

export const useLocationForm = (location: LocationType|null) => {
  const [formState, formDispatch] = useReducer(formReducer,locationToForm(location));

  return { formState, formDispatch };
};
