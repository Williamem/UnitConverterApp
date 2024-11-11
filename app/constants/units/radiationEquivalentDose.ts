import { CategoryDefinition } from './types';

export const radiationEquivalentDose: CategoryDefinition = {
  baseUnit: 'sievert',
  description: 'Equivalent dose measures biological effect of radiation, accounting for radiation type. Different types of radiation have different biological effects.',
  categories: {
    si: ['sievert', 'millisievert', 'microsievert', 'nanosievert', 'kilosievert', 'megasievert'],
    traditional: ['rem']
  },
  units: {
    sievert: {
      names: ['sievert'],
      abbreviations: ['Sv'],
      description: 'The SI unit for equivalent radiation dose (accounts for biological effects)',
    },
    rem: {
      names: ['rem', 'roentgen equivalent man'],
      abbreviations: ['rem'],
      description: 'Traditional unit for equivalent dose, being replaced by sievert (1 Sv = 100 rem)',
    },
    millisievert: {
      names: ['millisievert'],
      abbreviations: ['mSv'],
      description: 'One thousandth of a sievert',
    },
    microsievert: {
      names: ['microsievert'],
      abbreviations: ['µSv'],
      description: 'One millionth of a sievert',
    },
    nanosievert: {
      names: ['nanosievert'],
      abbreviations: ['nSv'],
      description: 'One billionth of a sievert',
    },
    kilosievert: {
      names: ['kilosievert'],
      abbreviations: ['kSv'],
      description: 'One thousand sievert',
    },
    megasievert: {
      names: ['megasievert'],
      abbreviations: ['MSv'],
      description: 'One million sievert',
    }
  },
  conversions: {
    sievert: 1,
    rem: 0.01,                   // This is exact
    millisievert: 0.001,         // This is exact
    microsievert: 0.000001,      // This is exact
    nanosievert: 1e-9,           // This is exact
    kilosievert: 1000,           // This is exact
    megasievert: 1000000         // This is exact
  }
}; 