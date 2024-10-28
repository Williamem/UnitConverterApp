import { CategoryDefinition } from './types';

export const density: CategoryDefinition = {
  baseUnit: 'kilogram per cubic meter',
  description: 'Density measures mass per unit volume. While SI units use kg/m³, other units are common in specific applications and regions.',
  categories: {
    metric: ['kilogram per cubic meter', 'gram per cubic centimeter', 'kilogram per liter'],
    imperial: ['pound per cubic foot', 'ounce per cubic inch']
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
      description: 'Common laboratory density unit',
    },
    'kilogram per liter': {
      names: ['kilogram per liter', 'kilogramme per litre'],
      abbreviations: ['kg/L', 'kg/l'],
      description: 'Convenient for measuring liquid densities',
    },
    'pound per cubic foot': {
      names: ['pound per cubic foot'],
      abbreviations: ['lb/ft³', 'lb/ft^3', 'pcf'],
      description: 'Common in US construction and engineering',
    },
    'ounce per cubic inch': {
      names: ['ounce per cubic inch'],
      abbreviations: ['oz/in³', 'oz/in^3'],
      description: 'Used in some US engineering applications',
    }
  },
  conversions: {
    'kilogram per cubic meter': 1,
    'gram per cubic centimeter': 1000,
    'kilogram per liter': 1000,
    'pound per cubic foot': 16.0185,
    'ounce per cubic inch': 1729.994
  }
};
