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
    celsius: {
      toBase: (c: number) => c + 273.15,
      fromBase: (k: number) => k - 273.15
    },
    fahrenheit: {
      toBase: (f: number) => (f + 459.67) * (5/9),
      fromBase: (k: number) => k * (9/5) - 459.67
    },
    kelvin: {
      toBase: (k: number) => k,
      fromBase: (k: number) => k
    },
    rankine: {
      toBase: (r: number) => r * (5/9),  // Rankine to Kelvin
      fromBase: (k: number) => k * (9/5)  // Kelvin to Rankine
    },
    réaumur: {
      toBase: (re: number) => (re * (5/4)) + 273.15,  // Réaumur to Kelvin
      fromBase: (k: number) => (k - 273.15) * (4/5)   // Kelvin to Réaumur
    }
  }
};
