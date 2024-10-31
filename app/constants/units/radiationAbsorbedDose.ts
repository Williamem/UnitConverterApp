import { CategoryDefinition } from './types';

export const radiationAbsorbedDose: CategoryDefinition = {
  baseUnit: 'gray',
  description: 'Absorbed dose measures the energy deposited in matter by ionizing radiation.',
  categoryAlert: 'Absorbed dose measures raw energy deposition, without accounting for biological effects.',
  categories: {
    si: ['gray'],
    traditional: ['rad']
  },
  units: {
    gray: {
      names: ['gray'],
      abbreviations: ['Gy'],
      description: 'The SI unit for absorbed radiation dose (1 joule/kilogram)',
    },
    rad: {
      names: ['rad', 'radiation absorbed dose'],
      abbreviations: ['rad'],
      description: 'Traditional unit for absorbed dose',
      needsAsterisk: true,
      asteriskReason: 'Older unit, being replaced by gray (1 Gy = 100 rad)',
    }
  },
  conversions: {
    gray: {
      toBase: (gy: number) => gy,
      fromBase: (gy: number) => gy
    },
    rad: {
      toBase: (rad: number) => rad * 0.01,
      fromBase: (gy: number) => gy * 100
    }
  }
}; 