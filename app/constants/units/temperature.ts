import { CategoryDefinition } from './types';

export const temperature: CategoryDefinition = {
    // TODO: these conversions don't work because they need a special formula
  baseUnit: 'kelvin',
  description: 'Temperature units measure thermal energy. While Celsius is used globally, Fahrenheit remains common in the US, and Kelvin is the scientific standard.',
  categoryAlert: 'Temperature conversions are not simple multiplications - they involve different formulas for each conversion.',
  categories: {
    scientific: ['kelvin'],
    metric: ['celsius'],
    imperial: ['fahrenheit'],
    obsolete: ['rankine', 'réaumur']
  },
  units: {
    kelvin: {
      names: ['kelvin'],
      abbreviations: ['K'],
      description: 'The SI base unit of temperature, starting from absolute zero',
    },
    celsius: {
      names: ['celsius', 'centigrade'],
      abbreviations: ['°C', 'C'],
      description: 'The most widely used temperature scale globally',
    },
    fahrenheit: {
      names: ['fahrenheit'],
      abbreviations: ['°F', 'F'],
      description: 'Temperature scale commonly used in the United States',
    },
    rankine: {
      names: ['rankine'],
      abbreviations: ['°R', 'R'],
      description: 'Absolute temperature scale using Fahrenheit degrees',
      needsAsterisk: true,
      asteriskReason: 'Primarily used in engineering calculations, rarely in general use',
    },
    réaumur: {
      names: ['réaumur', 'reaumur'],
      abbreviations: ['°Ré', '°Re'],
      description: 'Historical temperature scale once used in Europe',
      needsAsterisk: true,
      asteriskReason: 'Obsolete scale, no longer in common use',
    }
  },
  conversions: {
    kelvin: 1,
    celsius: 1,  // Special case: needs formula (K = °C + 273.15)
    fahrenheit: 1,  // Special case: needs formula (K = (°F + 459.67) × 5/9)
    rankine: 5/9,  // K = °R × 5/9
    réaumur: 1.25  // K = °Ré × 1.25 + 273.15
  }
};
