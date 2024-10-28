import { CategoryDefinition } from './types';

export const energy: CategoryDefinition = {
  baseUnit: 'joule',
  description: 'Energy units measure work or heat. While joules are the SI standard, calories are common in food energy, and BTUs in heating/cooling.',
  categories: {
    metric: ['joule', 'kilojoule', 'megajoule'],
    caloric: ['calorie', 'kilocalorie'],
    electrical: ['watt hour', 'kilowatt hour'],
    scientific: ['electronvolt'],
    imperial: ['British Thermal Unit', 'foot pound'],
    obsolete: ['erg']
  },
  units: {
    joule: {
      names: ['joule'],
      abbreviations: ['J'],
      description: 'The SI unit of energy',
    },
    kilojoule: {
      names: ['kilojoule'],
      abbreviations: ['kJ'],
      description: 'One thousand joules',
    },
    megajoule: {
      names: ['megajoule'],
      abbreviations: ['MJ'],
      description: 'One million joules',
    },
    calorie: {
      names: ['calorie', 'small calorie'],
      abbreviations: ['cal'],
      description: 'Energy to raise 1g of water by 1°C',
      needsAsterisk: true,
      asteriskReason: 'Often confused with kilocalorie (food calorie)',
    },
    kilocalorie: {
      names: ['kilocalorie', 'large calorie', 'food calorie'],
      abbreviations: ['kcal', 'Cal'],
      description: 'Common unit for food energy',
      needsAsterisk: true,
      asteriskReason: 'Often labeled as "Calories" (with capital C) on food packaging',
    },
    'watt hour': {
      names: ['watt hour', 'watt-hour'],
      abbreviations: ['Wh'],
      description: 'Energy of one watt sustained for one hour',
    },
    'kilowatt hour': {
      names: ['kilowatt hour', 'kilowatt-hour'],
      abbreviations: ['kWh'],
      description: 'Common unit for electrical energy billing',
    },
    electronvolt: {
      names: ['electronvolt', 'electron volt'],
      abbreviations: ['eV'],
      description: 'Energy gained by electron moved by one volt',
    },
    'British Thermal Unit': {
      names: ['British Thermal Unit', 'BTU'],
      abbreviations: ['BTU', 'Btu'],
      description: 'Traditional unit for heating and cooling',
      needsAsterisk: true,
      asteriskReason: 'Multiple definitions exist with slightly different values',
    },
    'foot pound': {
      names: ['foot pound', 'foot-pound'],
      abbreviations: ['ft⋅lb', 'ft-lb'],
      description: 'Work done by one pound force over one foot',
    },
    erg: {
      names: ['erg'],
      abbreviations: ['erg'],
      description: 'CGS system unit of energy',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, replaced by joule in modern usage',
    }
  },
  conversions: {
    joule: 1,
    kilojoule: 1000,
    megajoule: 1000000,
    calorie: 4.184,
    kilocalorie: 4184,
    'watt hour': 3600,
    'kilowatt hour': 3600000,
    electronvolt: 1.602176634e-19,
    'British Thermal Unit': 1055.06,
    'foot pound': 1.355818,
    erg: 1e-7
  }
};
