import { useLocationsContext } from '../context/LocationsContext';

export const useBookmark = (id: string) => {
  const { myMapLocations, setMyMapLocations, locations } = useLocationsContext();
  const location = locations.find((location) => location._id === id);
  const isBookmarked = myMapLocations.some((location) => location._id === id);
  const addBookmark = () => {
    if (location) setMyMapLocations((myMapLocations) => [...myMapLocations, location]);
  };
  const removeBookmark = () => {
    setMyMapLocations((myMapLocations) =>
      [...myMapLocations].filter((myMapLocation) => myMapLocation._id !== id),
    );
  };

  return { addBookmark, removeBookmark, isBookmarked };
};
