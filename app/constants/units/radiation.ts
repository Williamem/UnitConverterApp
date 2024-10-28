import { CategoryDefinition } from './types';

export const radiation: CategoryDefinition = {
    //TODO: this might need special logic or splitting up, the units are kind of measuring different things
  baseUnit: 'gray',
  description: 'Radiation units measure different aspects of radioactive phenomena. Different units exist for absorbed dose, equivalent dose, radioactivity, and exposure.',
  categoryAlert: 'These units measure different aspects of radiation and are not directly interchangeable. Proper understanding is crucial for safety.',
  categories: {
    'absorbed dose': ['gray', 'rad'],
    'equivalent dose': ['sievert', 'rem'],
    radioactivity: ['becquerel', 'curie'],
    exposure: ['roentgen']
  },
  units: {
    // Absorbed dose
    gray: {
      names: ['gray'],
      abbreviations: ['Gy'],
      description: 'The SI unit for absorbed radiation dose',
    },
    rad: {
      names: ['rad', 'radiation absorbed dose'],
      abbreviations: ['rad'],
      description: 'Traditional unit for absorbed dose',
      needsAsterisk: true,
      asteriskReason: 'Older unit, being replaced by gray (1 Gy = 100 rad)',
    },
    // Equivalent dose
    sievert: {
      names: ['sievert'],
      abbreviations: ['Sv'],
      description: 'The SI unit for equivalent radiation dose',
    },
    rem: {
      names: ['rem', 'roentgen equivalent man'],
      abbreviations: ['rem'],
      description: 'Traditional unit for equivalent dose',
      needsAsterisk: true,
      asteriskReason: 'Older unit, being replaced by sievert (1 Sv = 100 rem)',
    },
    // Radioactivity
    becquerel: {
      names: ['becquerel'],
      abbreviations: ['Bq'],
      description: 'The SI unit for radioactivity (one decay per second)',
    },
    curie: {
      names: ['curie'],
      abbreviations: ['Ci'],
      description: 'Traditional unit for radioactivity',
      needsAsterisk: true,
      asteriskReason: 'Older unit, being replaced by becquerel (1 Ci = 3.7×10¹⁰ Bq)',
    },
    // Exposure
    roentgen: {
      names: ['roentgen'],
      abbreviations: ['R'],
      description: 'Traditional unit for radiation exposure',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, largely replaced by modern units',
    }
  },
  conversions: {
    gray: 1,
    rad: 0.01,  // 1 rad = 0.01 Gy
    sievert: 1,  // Different measurement, but same scale as gray
    rem: 0.01,   // 1 rem = 0.01 Sv
    becquerel: 1,
    curie: 3.7e10,  // 1 Ci = 3.7×10¹⁰ Bq
    roentgen: 0.000258  // Approximate conversion to gray in air
  }
};
