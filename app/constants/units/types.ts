import { acceleration, distance, weight } from './';

export const unitDefinitions = {
  acceleration,
  distance,
  weight
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
