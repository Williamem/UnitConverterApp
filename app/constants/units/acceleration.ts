import { CategoryDefinition } from './types';

export const acceleration: CategoryDefinition = {
  baseUnit: 'meter per second squared',
  categories: {
    metric: ['meter per second squared'],
    imperial: ['foot per second squared'],
    other: ['g-force (standard gravity)']
  },
  units: {
    'meter per second squared': {
      names: ['meter per second squared', 'metres per second squared'],
      abbreviations: ['m/s²', 'm/s/s', 'm⋅s⁻²'],
      description: 'The standard SI unit of acceleration',
    },
    'foot per second squared': {
      names: ['foot per second squared', 'feet per second squared'],
      abbreviations: ['ft/s²', 'ft/s/s', 'ft⋅s⁻²'],
      description: 'The imperial unit of acceleration',
    },
    'g-force (standard gravity)': {
      names: ['g-force', 'g-force (standard gravity)', 'standard gravity'],
      abbreviations: ['g', 'g₀', 'gₙ'],
      description: 'Acceleration relative to Earth\'s gravitational acceleration',
      needsAsterisk: true,
      asteriskReason: 'The actual acceleration due to gravity varies slightly depending on location on Earth',
    }
  },
  conversions: {
    'meter per second squared': 1,
    'foot per second squared': 0.3048,
    'g-force (standard gravity)': 9.80665
  }
};

