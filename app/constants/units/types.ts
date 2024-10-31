import { 
  acceleration,
  distance,
  weight,
  dataStorage,
  area,
  volume,
  temperature,
  velocity,
  energy,
  radiationExposure,
  radiationAbsorbedDose,
  radiationEquivalentDose,
  radioactivity,
  pressure,
  power,
  fuelEconomy,
  frequency,
  digitalResolution,
  density,
  torque,
  angle,
  dataTransferRate,
  time,
} from './';

export const unitDefinitions = {
  acceleration,
  distance,
  weight,
  dataStorage,
  area,
  volume,
  temperature,
  velocity,
  energy,
  radiationExposure,
  radiationAbsorbedDose,
  radiationEquivalentDose,
  radioactivity,
  pressure,
  power,
  fuelEconomy,
  frequency,
  digitalResolution,
  density,
  torque,
  angle,
  dataTransferRate,
  time,
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

type ConversionFunction = (value: number) => number;

interface CustomConversions {
  toBase: ConversionFunction;
  fromBase: ConversionFunction;
}

export interface CategoryDefinition {
  baseUnit: string;
  description: string;
  categoryAlert?: string;
  categories: {
    [key: string]: string[];
  };
  units: {
    [key: string]: UnitInfo;
  };
  conversions: {
    [key: string]: number | CustomConversions;
  };
}

export type ConversionFactors<T extends UnitCategory> = {
  [K in keyof typeof unitDefinitions[T]['conversions']]: 
    typeof unitDefinitions[T]['conversions'][K] extends number ? number : CustomConversions;
};
