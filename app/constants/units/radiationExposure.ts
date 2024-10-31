import { CategoryDefinition } from './types';

export const radiationExposure: CategoryDefinition = {
    baseUnit: 'roentgen',
    description: 'Radiation exposure in air',
    categoryAlert: 'Roentgen measures ionization in air and can only be approximately converted to absorbed dose in air.',
    categories: {
      exposure: ['roentgen'],
      'absorbed dose in air': ['gray', 'rad']
    },
    units: {
      roentgen: {
        names: ['roentgen'],
        abbreviations: ['R'],
        description: 'Traditional unit for radiation exposure',
        needsAsterisk: true,
        asteriskReason: 'Historical unit, measures ionization in air',
      },
      gray: {
        names: ['gray'],
        abbreviations: ['Gy'],
        description: 'The SI unit for absorbed radiation dose',
        needsAsterisk: true,
        asteriskReason: 'This conversion is only valid for exposure in air',
      },
      rad: {
        names: ['rad'],
        abbreviations: ['rad'],
        description: 'Traditional unit for absorbed dose',
        needsAsterisk: true,
        asteriskReason: 'This conversion is only valid for exposure in air',
      }
    },
    conversions: {
      roentgen: {
        toBase: (r: number) => r,
        fromBase: (r: number) => r
      },
      gray: {
        toBase: (gy: number) => gy / 0.00876,
        fromBase: (r: number) => r * 0.00876
      },
      rad: {
        toBase: (rad: number) => rad / 0.876,
        fromBase: (r: number) => r * 0.876
      }
    }
  };