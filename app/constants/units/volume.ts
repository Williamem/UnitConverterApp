import { CategoryDefinition } from './types';

export const volume: CategoryDefinition = {
  baseUnit: 'cubic meter',
  description: 'Volume units measure three-dimensional space. Different systems exist for liquid and dry measurements, with variations between US and Imperial standards.',
  categories: {
    small: ['milliliter', 'centiliter', 'cubic centimeter', 'fluid ounce', 'US fluid ounce', 'cup', 'gill', 'fluid dram'],
    medium: ['liter', 'pint', 'quart', 'US pint', 'US quart', 'dry pint', 'dry quart'],
    large: ['cubic meter', 'gallon', 'US gallon', 'barrel', 'hogshead', 'peck', 'bushel'],
    xlarge: ['olympic swimming pool', 'cubic kilometer', 'cubic mile'],
    metric: ['milliliter', 'centiliter', 'liter', 'cubic centimeter', 'cubic meter', 'cubic kilometer'],
    imperial: ['fluid ounce', 'pint', 'quart', 'gallon'],
    us: ['US fluid ounce', 'US pint', 'US quart', 'US gallon'],
    cooking: ['cup', 'tablespoon', 'teaspoon'],
    dry: ['dry pint', 'dry quart', 'peck', 'bushel'],
    obsolete: ['gill', 'barrel', 'hogshead', 'fluid dram'],
    comparative: ['olympic swimming pool', 'great pyramid', 'empire state building']
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
    },
    // Dry Measure
    'dry pint': {
      names: ['dry pint', 'US dry pint'],
      abbreviations: ['dry pt'],
      description: 'US dry measure unit',
      needsAsterisk: true,
      asteriskReason: 'US dry measure differs from liquid measure',
    },
    'dry quart': {
      names: ['dry quart', 'US dry quart'],
      abbreviations: ['dry qt'],
      description: 'US dry measure unit',
      needsAsterisk: true,
      asteriskReason: 'US dry measure differs from liquid measure',
    },
    peck: {
      names: ['peck'],
      abbreviations: ['pk'],
      description: 'US dry measure unit',
      needsAsterisk: true,
      asteriskReason: 'Primarily used for agricultural products',
    },
    bushel: {
      names: ['bushel'],
      abbreviations: ['bu'],
      description: 'US dry measure unit',
      needsAsterisk: true,
      asteriskReason: 'Primarily used for agricultural products',
    },
    // Obsolete
    gill: {
      names: ['gill'],
      abbreviations: ['gi'],
      description: 'Quarter of a pint',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, rarely used today',
    },
    barrel: {
      names: ['barrel'],
      abbreviations: ['bbl'],
      description: 'Historical volume measure',
      needsAsterisk: true,
      asteriskReason: 'Multiple definitions exist depending on context',
    },
    hogshead: {
      names: ['hogshead'],
      abbreviations: ['hhd'],
      description: 'Historical large volume measure',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, historically used for wine and beer',
    },
    'fluid dram': {
      names: ['fluid dram', 'fluid drachm'],
      abbreviations: ['fl dr'],
      description: 'Historical small volume measure',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, historically used in pharmacy',
    },
    'olympic swimming pool': {
      names: ['olympic swimming pool'],
      abbreviations: ['osp'],
      description: '2500 cubic meters (50m × 25m × 2m)',
      needsAsterisk: true,
      asteriskReason: 'Based on minimum Olympic pool dimensions',
    },
    'cubic kilometer': {
      names: ['cubic kilometer', 'cubic kilometre'],
      abbreviations: ['km³', 'km^3'],
      description: 'One billion cubic meters',
    },
    'cubic mile': {
      names: ['cubic mile'],
      abbreviations: ['mi³', 'mi^3'],
      description: 'Imperial unit for very large volumes',
    },
    'great pyramid': {
      names: ['great pyramid', 'great pyramid of giza'],
      abbreviations: ['pyramid'],
      description: 'Volume of the Great Pyramid of Giza',
      needsAsterisk: true,
      asteriskReason: 'Approximate volume based on external dimensions',
    },
    'empire state building': {
      names: ['empire state building'],
      abbreviations: ['esb'],
      description: 'Volume of the Empire State Building',
      needsAsterisk: true,
      asteriskReason: 'Approximate volume based on main building structure',
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
    teaspoon: 0.00000492892,
    'dry pint': 0.000550610,
    'dry quart': 0.001101221,
    peck: 0.00880977,
    bushel: 0.035239070,
    gill: 0.0001420653,
    barrel: 0.158987295,
    hogshead: 0.238480942,
    'fluid dram': 0.0000036967,
    'olympic swimming pool': 2500,
    'cubic kilometer': 1000000000,
    'cubic mile': 4168181825.44058,
    'great pyramid': 2600000,
    'empire state building': 1050000
  }
};
