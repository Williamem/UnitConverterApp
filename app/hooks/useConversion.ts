import { unitDefinitions } from '../constants/units/types';
import type { UnitCategory, ConversionFactors } from '../constants/units/types';

type ConversionFunction = (value: number) => number;

interface CustomConversions {
  toBase: ConversionFunction;
  fromBase: ConversionFunction;
}

export const useConversion = () => {
  const convert = <T extends UnitCategory>(
    category: T,
    value: number,
    fromUnit: keyof ConversionFactors<T>,
    toUnit: keyof ConversionFactors<T>
  ): number => {
    const categoryData = unitDefinitions[category];
    const conversions = categoryData.conversions as { 
      [key: string]: number | CustomConversions 
    };
    
    const fromConversion = conversions[fromUnit as string];
    const toConversion = conversions[toUnit as string];
    
    // Handle custom conversion functions
    if (typeof fromConversion === 'object' && typeof toConversion === 'object') {
      // Convert to base unit first, then to target unit
      const baseValue = fromConversion.toBase(value);
      return toConversion.fromBase(baseValue);
    }
    
    // Handle simple multiplication/division conversions
    if (typeof fromConversion === 'number' && typeof toConversion === 'number') {
      return (value * fromConversion) / toConversion;
    }
    
    throw new Error(`Invalid conversion factors for ${category}: ${String(fromUnit)} to ${String(toUnit)}`);
  };

  return { convert };
};
