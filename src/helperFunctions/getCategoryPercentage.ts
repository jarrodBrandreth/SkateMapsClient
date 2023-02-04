import { CategoryOptions, LocationType } from "../types/types";

export const getCategoryPercentage = (locations: LocationType[], category: CategoryOptions) => {
  const numOfLocations = locations.length;
  const numOfCategoryType = locations.reduce((acc, curr) => {
    if (curr.category === category) return acc + 1;
    return acc;
  }, 0);

  const percentageNum = (numOfCategoryType / numOfLocations) * 100;
  if (Number.isNaN(percentageNum)) return 0;
  return percentageNum;
};