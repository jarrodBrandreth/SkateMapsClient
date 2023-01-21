export type UserProps = {
  email: string;
  token: string;
} | null;

export type CategoryOptions = 'shop' | 'spot' | 'skatepark';

export type ParentPageOptions = 'My Map' | 'Admin';

export type CreateLocationSteps = 'form' | 'preview' | 'success';

export type EditLocationSteps = 'choose location' | 'form' | 'preview' | 'success';

export type DeleteLocationSteps = 'choose location' | 'success';

export interface LocationType {
  _id: string;
  title: string;
  category: string;
  description: string;
  borough: string;
  neighborhood: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  rating: number;
}

export type LocationPinPosition = {
  lat: number;
  lng: number;
};

export type LocationFormCoordsType = {
  lat: string;
  lng: string;
};

export type LocationFormType = {
  _id: string;
  title: string;
  category: string;
  description: string;
  borough: string;
  neighborhood: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  images: string[];
  rating: number;
  add_image_url: string;
};

export type LocationFormAction =
  | {
      type:
        | 'title'
        | 'category'
        | 'description'
        | 'borough'
        | 'neighborhood'
        | 'longitude'
        | 'latitude'
        | 'add image url'
        | 'add image'
        | 'remove image';
      payload: string;
    }
  | {
      type: 'rating';
      payload: number;
    }
  | {
      type: 'update coordinates';
      payload: {
        lat: string;
        lng: string;
      };
    };

export type LocationActionResult = {
  error: null | string;
};
