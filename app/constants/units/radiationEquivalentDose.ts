import { CategoryDefinition } from './types';

export const radiationEquivalentDose: CategoryDefinition = {
  baseUnit: 'sievert',
  description: 'Equivalent dose measures biological effect of radiation, accounting for radiation type.',
  categoryAlert: 'Different types of radiation have different biological effects. Equivalent dose accounts for these differences.',
  categories: {
    si: ['sievert'],
    traditional: ['rem']
  },
  units: {
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
    }
  },
  conversions: {
    sievert: {
      toBase: (sv: number) => sv,
      fromBase: (sv: number) => sv
    },
    rem: {
      toBase: (rem: number) => rem * 0.01,
      fromBase: (sv: number) => sv * 100
    }
  }
}; 