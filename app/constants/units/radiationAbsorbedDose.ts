import { CategoryDefinition } from './types';

export const radiationAbsorbedDose: CategoryDefinition = {
  baseUnit: 'gray',
  description: 'Absorbed dose measures the energy deposited in matter by ionizing radiation. This measures raw energy deposition, without accounting for biological effects.',
  categories: {
    si: ['gray', 'milligray', 'microgray', 'nanogray', 'kilogray', 'megagray'],
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
      description: 'Traditional unit for absorbed dose. Being replaced by gray (1 Gy = 100 rad)',
    },
    milligray: {
      names: ['milligray'],
      abbreviations: ['mGy'],
      description: 'One thousandth of a gray',
    },
    microgray: {
      names: ['microgray'],
      abbreviations: ['µGy'],
      description: 'One millionth of a gray',
    },
    nanogray: {
      names: ['nanogray'],
      abbreviations: ['nGy'],
      description: 'One billionth of a gray',
    },
    kilogray: {
      names: ['kilogray'],
      abbreviations: ['kGy'],
      description: 'One thousand gray',
    },
    megagray: {
      names: ['megagray'],
      abbreviations: ['MGy'],
      description: 'One million gray',
    }
  },
  conversions: {
    gray: 1,
    rad: 0.01,
    milligray: 0.001,
    microgray: 0.000001,
    nanogray: 1e-9,
    kilogray: 1000,
    megagray: 1000000
  }
}; 