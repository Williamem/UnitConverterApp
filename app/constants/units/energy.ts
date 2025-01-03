import { CategoryDefinition } from './types';

export const energy: CategoryDefinition = {
  baseUnit: 'joule',
  description: 'Energy units measure work or heat. While joules are the SI standard, calories are common in food energy, and BTUs in heating/cooling.',
  categories: {
    small: ['electronvolt', 'erg', 'calorie', 'joule'],
    medium: ['kilojoule', 'kilocalorie', 'watt hour', 'British Thermal Unit', 'foot pound'],
    large: ['megajoule', 'kilowatt hour', 'megawatt hour', 'gigawatt hour'],
    metric: ['joule', 'kilojoule', 'megajoule'],
    caloric: ['calorie', 'kilocalorie'],
    electrical: ['watt hour', 'kilowatt hour', 'megawatt hour', 'gigawatt hour'],
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
      description: 'Energy to raise 1g of water by 1°C (thermochemical definition)',
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
      description: 'Energy gained by electron moved by one volt, commonly used in atomic and nuclear physics',
    },
    'British Thermal Unit': {
      names: ['British Thermal Unit', 'BTU'],
      abbreviations: ['BTU', 'Btu'],
      description: 'Traditional unit for heating and cooling, defined as 1055.05585262 joules (ISO standard BTU)',
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
    },
    'megawatt hour': {
      names: ['megawatt hour', 'megawatt-hour'],
      abbreviations: ['MWh'],
      description: 'Common unit for large-scale electrical energy measurement',
    },
    'gigawatt hour': {
      names: ['gigawatt hour', 'gigawatt-hour'],
      abbreviations: ['GWh'],
      description: 'Used for measuring very large amounts of electrical energy',
    }
  },
  conversions: {
    joule: 1,
    kilojoule: 1000,
    megajoule: 1000000,
    calorie: 4.1868,
    kilocalorie: 4186.8,
    'watt hour': 3600,
    'kilowatt hour': 3600000,
    electronvolt: 1.602176634e-19,
    'British Thermal Unit': 1055.05585262,
    'foot pound': 1.3558179483314004,
    erg: 1e-7,
    'megawatt hour': 3.6e9,
    'gigawatt hour': 3.6e12
  }
};
