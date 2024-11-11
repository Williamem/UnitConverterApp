import { CategoryDefinition } from './types';

export const density: CategoryDefinition = {
  baseUnit: 'kilogram per cubic meter',
  description: 'Density measures mass per unit volume. While SI units use kg/m³, other units are common in specific applications and regions.',
  categories: {
    metric: ['kilogram per cubic meter', 'gram per cubic centimeter', 'kilogram per liter'],
    imperial: ['pound per cubic foot', 'ounce per cubic inch', 'ounce per imperial gallon'],
    us: ['ounce per US gallon']
  },
  units: {
    'kilogram per cubic meter': {
      names: ['kilogram per cubic meter', 'kilogramme per cubic metre'],
      abbreviations: ['kg/m³', 'kg/m^3'],
      description: 'The SI unit for density',
    },
    'gram per cubic centimeter': {
      names: ['gram per cubic centimeter', 'gramme per cubic centimetre'],
      abbreviations: ['g/cm³', 'g/cc', 'g/cm^3'],
      description: 'Common laboratory density unit, numerically equal to specific gravity in g/cm³',
    },
    'kilogram per liter': {
      names: ['kilogram per liter', 'kilogramme per litre'],
      abbreviations: ['kg/L', 'kg/l'],
      description: 'Convenient for measuring liquid densities',
    },
    'pound per cubic foot': {
      names: ['pound per cubic foot'],
      abbreviations: ['lb/ft³', 'lb/ft^3', 'pcf'],
      description: 'Common in US construction and engineering, often notated as pcf',
    },
    'ounce per cubic inch': {
      names: ['ounce per cubic inch'],
      abbreviations: ['oz/in³', 'oz/in^3'],
      description: 'Used in some US engineering applications. Uses avoirdupois ounce which is the same in both US and Imperial systems.',
    },
    'ounce per imperial gallon': {
      names: ['ounce per imperial gallon'],
      abbreviations: ['oz/imp.gal'],
      description: 'Common in British fluid mixing applications. Uses avoirdupois ounce with Imperial gallon.',
    },
    'ounce per US gallon': {
      names: ['ounce per US gallon'],
      abbreviations: ['oz/US.gal'],
      description: 'Common in US fluid mixing applications. Uses avoirdupois ounce with US gallon.',
    },
    'ounce per liter': {
      names: ['ounce per liter', 'ounce per litre'],
      abbreviations: ['oz/L', 'oz/l'],
      description: 'A hybrid unit combining avoirdupois ounce with metric volume. Not commonly used in practice.',
    }
  },
  conversions: {
    'kilogram per cubic meter': 1,
    'gram per cubic centimeter': 1000,
    'kilogram per liter': 1000,
    'pound per cubic foot': 16.018463373960145,
    'ounce per cubic inch': 1729.9940473427304,
    'ounce per imperial gallon': 6.236023,       // Based on imperial gallon conversion
    'ounce per US gallon': 7.489151527163733,    // Based on US gallon conversion
    'ounce per liter': 28.349523125              // Based on exact ounce conversion
  }
};
