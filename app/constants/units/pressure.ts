import { CategoryDefinition } from './types';

export const pressure: CategoryDefinition = {
  baseUnit: 'pascal',
  description: 'Pressure units measure force per unit area. While pascal is the SI unit, many specialized units are used in different fields like meteorology and engineering.',
  categories: {
    metric: ['pascal', 'kilopascal', 'megapascal', 'bar'],
    atmospheric: ['atmosphere', 'torr', 'millimeter of mercury'],
    imperial: ['pound per square inch', 'inch of mercury'],
    technical: ['technical atmosphere']
  },
  units: {
    pascal: {
      names: ['pascal'],
      abbreviations: ['Pa'],
      description: 'The SI unit of pressure (1 newton per square meter)',
    },
    kilopascal: {
      names: ['kilopascal'],
      abbreviations: ['kPa'],
      description: 'One thousand pascals',
    },
    megapascal: {
      names: ['megapascal'],
      abbreviations: ['MPa'],
      description: 'One million pascals',
    },
    bar: {
      names: ['bar'],
      abbreviations: ['bar'],
      description: 'Metric unit equal to 100,000 pascals, close to one atmosphere',
    },
    atmosphere: {
      names: ['atmosphere', 'standard atmosphere'],
      abbreviations: ['atm'],
      description: 'Standard pressure at sea level (101,325 Pa)',
    },
    'technical atmosphere': {
      names: ['technical atmosphere'],
      abbreviations: ['at'],
      description: 'Defined as exactly 1 kgf/cm², still used in some European countries',
    },
    torr: {
      names: ['torr'],
      abbreviations: ['Torr'],
      description: 'Equal to 1/760 of a standard atmosphere, mainly used in vacuum technology',
    },
    'millimeter of mercury': {
      names: ['millimeter of mercury', 'millimetre of mercury'],
      abbreviations: ['mmHg'],
      description: 'Common unit in medical blood pressure measurements, equal to one torr',
    },
    'pound per square inch': {
      names: ['pound per square inch', 'pounds per square inch'],
      abbreviations: ['psi', 'lb/in²'],
      description: 'Common pressure unit in US engineering',
    },
    'inch of mercury': {
      names: ['inch of mercury', 'inches of mercury'],
      abbreviations: ['inHg', 'in Hg'],
      description: 'Common in US weather reports for atmospheric pressure',
    }
  },
  conversions: {
    pascal: 1,
    kilopascal: 1000,
    megapascal: 1000000,
    bar: 100000,
    atmosphere: 101325,
    'technical atmosphere': 98066.5,
    torr: 133.32236842105263,
    'millimeter of mercury': 133.32236842105263,
    'pound per square inch': 6894.757293168361,
    'inch of mercury': 3386.388640341555
  }
};
