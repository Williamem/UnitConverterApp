import { unitDefinitions } from '../constants/unitDefinitions';

export const categories = Object.entries(unitDefinitions).map(([key, value]) => ({
  id: key,
  name: key.charAt(0).toUpperCase() + key.slice(1),
  baseUnit: value.baseUnit,
  categories: value.categories
}));

