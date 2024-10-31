import { CategoryDefinition } from './types';

export const area: CategoryDefinition = {
  baseUnit: 'square meter',
  description: 'Area units measure two-dimensional space. While metric units are standard in science, various specialized units are used for land measurement in different regions.',
  categories: {
    small: ['square millimeter', 'square centimeter', 'square inch', 'square foot'],
    medium: ['square meter', 'square yard', 'rood', 'square chain', 'tennis court', 'basketball court'],
    large: ['hectare', 'acre', 'square kilometer', 'square mile', 'soccer field', 'american football field'],
    metric: ['square millimeter', 'square centimeter', 'square meter', 'square kilometer', 'hectare'],
    imperial: ['square inch', 'square foot', 'square yard', 'square mile', 'acre'],
    obsolete: ['rood', 'square chain'],
    comparative: ['tennis court', 'basketball court', 'soccer field', 'american football field']
  },
  units: {
    // Metric
    'square millimeter': {
      names: ['square millimeter', 'square millimetre'],
      abbreviations: ['mm²', 'sq mm'],
      description: 'Area of a square with 1mm sides',
    },
    'square centimeter': {
      names: ['square centimeter', 'square centimetre'],
      abbreviations: ['cm²', 'sq cm'],
      description: 'Area of a square with 1cm sides',
    },
    'square meter': {
      names: ['square meter', 'square metre'],
      abbreviations: ['m²', 'sq m'],
      description: 'The SI unit for area',
    },
    'square kilometer': {
      names: ['square kilometer', 'square kilometre'],
      abbreviations: ['km²', 'sq km'],
      description: 'Area of a square with 1km sides',
    },
    hectare: {
      names: ['hectare'],
      abbreviations: ['ha'],
      description: 'Equal to 10,000 square meters',
    },
    // Imperial
    'square inch': {
      names: ['square inch'],
      abbreviations: ['in²', 'sq in'],
      description: 'Area of a square with 1-inch sides',
    },
    'square foot': {
      names: ['square foot'],
      abbreviations: ['ft²', 'sq ft'],
      description: 'Area of a square with 1-foot sides',
    },
    'square yard': {
      names: ['square yard'],
      abbreviations: ['yd²', 'sq yd'],
      description: 'Area of a square with 1-yard sides',
    },
    'square mile': {
      names: ['square mile'],
      abbreviations: ['mi²', 'sq mi'],
      description: 'Area of a square with 1-mile sides',
    },
    acre: {
      names: ['acre'],
      abbreviations: ['ac'],
      description: 'Traditional unit of land area',
      needsAsterisk: true,
      asteriskReason: 'Size varies slightly in different countries',
    },
    // Obsolete
    rood: {
      names: ['rood'],
      abbreviations: ['ro'],
      description: 'Historical unit equal to quarter of an acre',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, rarely used in modern measurements',
    },
    'square chain': {
      names: ['square chain'],
      abbreviations: ['sq ch'],
      description: 'Area of a square with 1-chain sides',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, mainly used in land surveying',
    },
    'tennis court': {
      names: ['tennis court'],
      abbreviations: ['tc'],
      description: 'Area of a standard singles tennis court',
      needsAsterisk: true,
      asteriskReason: 'Based on standard singles court dimensions (23.77m × 8.23m)',
    },
    'basketball court': {
      names: ['basketball court'],
      abbreviations: ['bc'],
      description: 'Area of an NBA basketball court',
      needsAsterisk: true,
      asteriskReason: 'Based on NBA regulation court size (94ft × 50ft)',
    },
    'soccer field': {
      names: ['soccer field', 'football pitch'],
      abbreviations: ['pitch'],
      description: 'Area of a standard soccer/football field',
      needsAsterisk: true,
      asteriskReason: 'Based on FIFA recommended dimensions (105m × 68m)',
    },
    'american football field': {
      names: ['american football field'],
      abbreviations: ['aff'],
      description: 'Area of an American football field including end zones',
      needsAsterisk: true,
      asteriskReason: 'Based on NFL regulation size (120yd × 53.3yd)',
    }
  },
  conversions: {
    'square meter': 1,
    'square millimeter': 0.000001,
    'square centimeter': 0.0001,
    'square kilometer': 1000000,
    hectare: 10000,
    'square inch': 0.00064516,
    'square foot': 0.092903,
    'square yard': 0.836127,
    'square mile': 2589988.110336,
    acre: 4046.8564224,
    rood: 1011.7141056,
    'square chain': 404.68564224,
    'tennis court': 195.63,
    'basketball court': 436.32,
    'soccer field': 7140,
    'american football field': 5351
  }
};
