import { CategoryDefinition } from './types';

export const radiationExposure: CategoryDefinition = {
    baseUnit: 'roentgen',
    description: 'Radiation exposure measures ionization in air',
    categoryAlert: 'Roentgen measures ionization in air and can only be approximately converted to absorbed dose in air.',
    categories: {
      exposure: ['roentgen', 'milliroentgen'],
      'absorbed dose in air': ['gray', 'rad'],
      si: ['coulomb per kilogram']
    },
    units: {
      roentgen: {
        names: ['roentgen'],
        abbreviations: ['R'],
        description: 'Traditional unit for radiation exposure',
        needsAsterisk: true,
        asteriskReason: 'Measures ionization in air only',
      },
      'coulomb per kilogram': {
        names: ['coulomb per kilogram'],
        abbreviations: ['C/kg'],
        description: 'SI unit for radiation exposure',
      },
      milliroentgen: {
        names: ['milliroentgen'],
        abbreviations: ['mR'],
        description: 'One thousandth of a roentgen',
      },
      gray: {
        names: ['gray'],
        abbreviations: ['Gy'],
        description: 'The SI unit for absorbed radiation dose',
        needsAsterisk: true,
        asteriskReason: 'Conversion from roentgen only valid for exposure in air',
      },
      rad: {
        names: ['rad'],
        abbreviations: ['rad'],
        description: 'Traditional unit for absorbed dose',
        needsAsterisk: true,
        asteriskReason: 'Conversion from roentgen only valid for exposure in air',
      }
    },
    conversions: {
      roentgen: {
        toBase: (r: number) => r,
        fromBase: (r: number) => r
      },
      'coulomb per kilogram': {
        toBase: (ckg: number) => ckg / 0.000258,
        fromBase: (r: number) => r * 0.000258
      },
      milliroentgen: {
        toBase: (mr: number) => mr * 0.001,
        fromBase: (r: number) => r / 0.001
      },
      gray: {
        toBase: (gy: number) => gy / 0.00876,
        fromBase: (r: number) => r * 0.00876
      },
      rad: {
        toBase: (rad: number) => rad / 0.00876,
        fromBase: (r: number) => r * 0.00876
      }
    }
  };