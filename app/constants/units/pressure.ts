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
      description: 'Metric unit close to one atmosphere',
    },
    atmosphere: {
      names: ['atmosphere', 'standard atmosphere'],
      abbreviations: ['atm'],
      description: 'Average pressure at sea level',
    },
    'technical atmosphere': {
      names: ['technical atmosphere'],
      abbreviations: ['at'],
      description: 'Defined as exactly 1 kgf/cm²',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, still used in some European countries',
    },
    torr: {
      names: ['torr'],
      abbreviations: ['Torr'],
      description: 'Approximately 1 mmHg',
      needsAsterisk: true,
      asteriskReason: 'Named after Evangelista Torricelli, mainly used in vacuum technology',
    },
    'millimeter of mercury': {
      names: ['millimeter of mercury', 'millimetre of mercury'],
      abbreviations: ['mmHg'],
      description: 'Common unit in medical blood pressure measurements',
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
    torr: 133.322,
    'millimeter of mercury': 133.322,
    'pound per square inch': 6894.76,
    'inch of mercury': 3386.39
  }
};
