import { CategoryDefinition } from './types';

export const distance: CategoryDefinition = {
  baseUnit: 'meter',
  description: 'Distance units range from microscopic to astronomical scales. While metric units are used globally, imperial units remain common in some countries, and specialized units exist for maritime and astronomical measurements.',
  categories: {
    small: ['millimeter', 'centimeter', 'inch', 'foot'],
    medium: ['meter', 'yard', 'fathom', 'rod', 'chain', 'american football field'],
    large: ['kilometer', 'mile', 'nautical mile', 'furlong', 'league', 'empire state building', 'mount everest', 'burj khalifa'],
    xlarge: ['light-year', 'astronomical unit', 'parsec'],
    metric: ['millimeter', 'centimeter', 'meter', 'kilometer'],
    imperial: ['inch', 'foot', 'yard', 'mile'],
    nautical: ['nautical mile'],
    astronomical: ['light-year', 'astronomical unit', 'parsec'],
    obsolete: ['furlong', 'league', 'fathom', 'rod', 'chain'],
    comparative: ['american football field', 'empire state building', 'mount everest', 'burj khalifa']
  },
  units: {
    // Metric
    millimeter: {
      names: ['millimeter', 'millimetre'],
      abbreviations: ['mm'],
      description: 'One thousandth of a meter, common for small measurements',
    },
    centimeter: {
      names: ['centimeter', 'centimetre'],
      abbreviations: ['cm'],
      description: 'One hundredth of a meter, common in everyday measurements',
    },
    meter: {
      names: ['meter', 'metre'],
      abbreviations: ['m'],
      description: 'The base SI unit for length',
    },
    kilometer: {
      names: ['kilometer', 'kilometre'],
      abbreviations: ['km'],
      description: 'One thousand meters, common for distances between cities',
    },
    // Imperial
    inch: {
      names: ['inch'],
      abbreviations: ['in', '"'],
      description: 'Equal to exactly 2.54 centimeters',
    },
    foot: {
      names: ['foot', 'feet'],
      abbreviations: ['ft', '\''],
      description: 'Equal to 12 inches',
    },
    yard: {
      names: ['yard'],
      abbreviations: ['yd'],
      description: 'Equal to 3 feet',
    },
    mile: {
      names: ['mile', 'statute mile'],
      abbreviations: ['mi'],
      description: 'Equal to 5280 feet, commonly used for road distances',
    },
    // Nautical
    'nautical mile': {
      names: ['nautical mile'],
      abbreviations: ['nmi', 'NM'],
      description: 'Used in marine navigation, approximately one minute of arc of latitude',
      needsAsterisk: true,
      asteriskReason: 'Now defined as exactly 1852 meters, though originally based on Earth\'s circumference',
    },
    // Astronomical
    'light-year': {
      names: ['light-year', 'light year'],
      abbreviations: ['ly'],
      description: 'The distance light travels in one year in vacuum',
      needsAsterisk: true,
      asteriskReason: 'Exact value depends on the definition of the year used',
    },
    'astronomical unit': {
      names: ['astronomical unit', 'AU'],
      abbreviations: ['au', 'AU'],
      description: 'The mean distance between Earth and Sun, now defined as exactly 149,597,870,700 meters',
      needsAsterisk: true,
      asteriskReason: 'Since 2012, defined as an exact value rather than based on observation',
    },
    parsec: {
      names: ['parsec'],
      abbreviations: ['pc'],
      description: 'Distance at which one astronomical unit subtends an angle of one arcsecond',
    },
    // Obsolete
    furlong: {
      names: ['furlong'],
      abbreviations: ['fur'],
      description: 'Historical unit equal to 220 yards',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, not commonly used in modern measurements',
    },
    league: {
      names: ['league'],
      abbreviations: ['lea'],
      description: 'Historical unit, typically 3 miles',
      needsAsterisk: true,
      asteriskReason: 'Variable definition depending on historical context and region',
    },
    fathom: {
      names: ['fathom'],
      abbreviations: ['ftm'],
      description: 'Equal to 6 feet, traditionally used for water depth',
      needsAsterisk: true,
      asteriskReason: 'Still used in some maritime contexts but being phased out',
    },
    rod: {
      names: ['rod', 'pole', 'perch'],
      abbreviations: ['rd'],
      description: 'Historical unit equal to 5.5 yards',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, rarely used in modern measurements',
    },
    chain: {
      names: ['chain', 'Gunter\'s chain'],
      abbreviations: ['ch'],
      description: 'Equal to 66 feet or 22 yards',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, mainly used in land surveying',
    },
    'american football field': {
      names: ['american football field'],
      abbreviations: ['field'],
      description: 'Length of an American football field from goal line to goal line',
      needsAsterisk: true,
      asteriskReason: 'Based on playing field length (100 yards), excluding end zones',
    },
    'empire state building': {
      names: ['empire state building'],
      abbreviations: ['esb'],
      description: 'Height of the Empire State Building to tip',
      needsAsterisk: true,
      asteriskReason: 'Measured to the tip of the spire',
    },
    'mount everest': {
      names: ['mount everest', 'everest'],
      abbreviations: ['everest'],
      description: 'Height of Mount Everest above sea level',
      needsAsterisk: true,
      asteriskReason: 'Height varies slightly due to geological activity',
    },
    'burj khalifa': {
      names: ['burj khalifa'],
      abbreviations: ['burj'],
      description: 'Height of the Burj Khalifa, the world\'s tallest building',
      needsAsterisk: true,
      asteriskReason: 'Measured to the architectural top',
    }
  },
  conversions: {
    meter: 1,
    millimeter: 0.001,
    centimeter: 0.01,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
    'nautical mile': 1852,
    'light-year': 9.4607304725808e15,
    'astronomical unit': 1.495978707e11,
    parsec: 3.0856775814913673e16,
    furlong: 201.168,
    league: 4828.032,
    fathom: 1.8288,
    rod: 5.0292,
    chain: 20.1168,
    'american football field': 91.44,
    'empire state building': 381.0,
    'mount everest': 8848.86,
    'burj khalifa': 828
  }
};
