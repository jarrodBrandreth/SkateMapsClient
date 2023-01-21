import { LocationType } from "../types/types";

export const applyFilters = (location: LocationType,searchValue:string,selectedBorough:string|null) => {
  const { title, category, description, borough, neighborhood } = location;
  const hasSearchValue = [title, category, description, borough, neighborhood].some((value) =>
    value.toLowerCase().includes(searchValue.toLowerCase()),
  );
  if (!hasSearchValue) {
    return false;
  }
  if (selectedBorough && selectedBorough !== borough) {
    return false;
  }
  return true;
};


