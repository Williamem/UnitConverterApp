import { CategoryDefinition } from './types';

export const volume: CategoryDefinition = {
  baseUnit: 'cubic meter',
  description: 'Volume units measure three-dimensional space. Different systems exist for liquid and dry measurements, with variations between US and Imperial standards.',
  categories: {
    metric: ['milliliter', 'centiliter', 'liter', 'cubic centimeter', 'cubic meter'],
    imperial: ['fluid ounce', 'pint', 'quart', 'gallon'],
    us: ['US fluid ounce', 'US pint', 'US quart', 'US gallon'],
    cooking: ['cup', 'tablespoon', 'teaspoon'],
    dry: ['dry pint', 'dry quart', 'peck', 'bushel'],
    obsolete: ['gill', 'barrel', 'hogshead', 'fluid dram']
  },
  units: {
    // Metric
    milliliter: {
      names: ['milliliter', 'millilitre'],
      abbreviations: ['ml', 'mL'],
      description: 'One thousandth of a liter',
    },
    centiliter: {
      names: ['centiliter', 'centilitre'],
      abbreviations: ['cl', 'cL'],
      description: 'One hundredth of a liter',
    },
    liter: {
      names: ['liter', 'litre'],
      abbreviations: ['l', 'L'],
      description: 'Basic metric unit for volume',
    },
    'cubic centimeter': {
      names: ['cubic centimeter', 'cubic centimetre'],
      abbreviations: ['cc', 'cm³'],
      description: 'Equal to one milliliter',
    },
    'cubic meter': {
      names: ['cubic meter', 'cubic metre'],
      abbreviations: ['m³'],
      description: 'The SI unit for volume',
    },
    // Imperial
    'fluid ounce': {
      names: ['fluid ounce', 'imperial fluid ounce'],
      abbreviations: ['fl oz'],
      description: 'Imperial fluid ounce',
      needsAsterisk: true,
      asteriskReason: 'Different from US fluid ounce',
    },
    pint: {
      names: ['pint', 'imperial pint'],
      abbreviations: ['pt'],
      description: 'Imperial pint',
      needsAsterisk: true,
      asteriskReason: 'Different from US pint',
    },
    quart: {
      names: ['quart', 'imperial quart'],
      abbreviations: ['qt'],
      description: 'Imperial quart',
      needsAsterisk: true,
      asteriskReason: 'Different from US quart',
    },
    gallon: {
      names: ['gallon', 'imperial gallon'],
      abbreviations: ['gal'],
      description: 'Imperial gallon',
      needsAsterisk: true,
      asteriskReason: 'Different from US gallon',
    },
    // US
    'US fluid ounce': {
      names: ['US fluid ounce'],
      abbreviations: ['US fl oz'],
      description: 'US fluid ounce',
    },
    'US pint': {
      names: ['US pint'],
      abbreviations: ['US pt'],
      description: 'US liquid pint',
    },
    'US quart': {
      names: ['US quart'],
      abbreviations: ['US qt'],
      description: 'US liquid quart',
    },
    'US gallon': {
      names: ['US gallon'],
      abbreviations: ['US gal'],
      description: 'US liquid gallon',
    },
    // Cooking
    cup: {
      names: ['cup'],
      abbreviations: ['c'],
      description: 'Cooking measurement',
      needsAsterisk: true,
      asteriskReason: 'Can vary between US and metric systems',
    },
    tablespoon: {
      names: ['tablespoon'],
      abbreviations: ['tbsp', 'Tbsp'],
      description: 'Cooking measurement',
      needsAsterisk: true,
      asteriskReason: 'Can vary between US and metric systems',
    },
    teaspoon: {
      names: ['teaspoon'],
      abbreviations: ['tsp'],
      description: 'Cooking measurement',
      needsAsterisk: true,
      asteriskReason: 'Can vary between US and metric systems',
    }
  },
  conversions: {
    'cubic meter': 1,
    milliliter: 0.000001,
    centiliter: 0.00001,
    liter: 0.001,
    'cubic centimeter': 0.000001,
    'fluid ounce': 0.0000284131,
    pint: 0.000568261,
    quart: 0.00113652,
    gallon: 0.00454609,
    'US fluid ounce': 0.0000295735,
    'US pint': 0.000473176,
    'US quart': 0.000946353,
    'US gallon': 0.00378541,
    cup: 0.000236588,
    tablespoon: 0.0000147868,
    teaspoon: 0.00000492892
  }
};
