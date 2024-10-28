import { acceleration, distance, weight, dataStorage } from './';

export const unitDefinitions = {
  acceleration,
  distance,
  weight,
  dataStorage
  // Add more as we implement them
} as const;

export type UnitCategory = keyof typeof unitDefinitions;

export interface UnitInfo {
  names: string[];
  abbreviations: string[];
  description: string;
  needsAsterisk?: boolean;
  asteriskReason?: string;
}

export interface CategoryDefinition {
  baseUnit: string;
  description?: string;  // General informative description
  categoryAlert?: string;  // Important information users need to know
  categories: {
    [key: string]: string[];
  };
  units: {
    [key: string]: UnitInfo;
  };
  conversions: {
    [key: string]: number;
  };
}

export type ConversionFactors<T extends UnitCategory> = typeof unitDefinitions[T]['conversions'];
