import { acceleration, distance, weight } from '../constants/units/';

const unitDefinitions = {
  acceleration,
  distance,
  weight
};

type UnitCategory = keyof typeof unitDefinitions;
type ConversionFactors<T extends UnitCategory> = typeof unitDefinitions[T]['conversions'];

export const useConversion = () => {
  const convert = <T extends UnitCategory>(
    category: T,
    value: number,
    fromUnit: keyof ConversionFactors<T>,
    toUnit: keyof ConversionFactors<T>
  ): number => {
    const categoryData = unitDefinitions[category];
    const conversions = categoryData.conversions as { [key: string]: number };
    
    const fromFactor = conversions[fromUnit as string];
    const toFactor = conversions[toUnit as string];
    
    if (typeof fromFactor !== 'number' || typeof toFactor !== 'number') {
      throw new Error(`Invalid conversion factors for ${category}: ${String(fromUnit)} to ${String(toUnit)}`);
    }
    
    // Convert to base unit, then to target unit
    return (value * fromFactor) / toFactor;
  };

  return { convert };
};
