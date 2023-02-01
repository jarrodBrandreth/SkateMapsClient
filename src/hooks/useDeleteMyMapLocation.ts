import { useLocationsContext } from '../context/LocationsContext';

export const useDeleteMyMapLocation = () => {
  const { setMyMapLocations } = useLocationsContext();

  const deleteMyMapLocation = (id: string) => {
    setMyMapLocations((prevLocations) =>
      [...prevLocations].filter((location) => location._id !== id),
    );
  };

  const deleteAllMyMapLocations = () => {
    setMyMapLocations([]);
  }

  return { deleteMyMapLocation,deleteAllMyMapLocations };
};
