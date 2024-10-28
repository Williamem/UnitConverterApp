import { CategoryDefinition } from './types';

export const weight: CategoryDefinition = {
  baseUnit: 'kilogram',
  description: 'Weight (mass) units vary by region and use case. Metric units are standard in science, imperial units are common in the US and UK, and specialized units like troy weight are used for precious metals.',
  categories: {
    metric: ['milligram', 'gram', 'kilogram', 'metric ton'],
    imperial: ['ounce', 'pound', 'stone', 'long ton'],
    us: ['short ton'],
    troy: ['troy ounce', 'troy pound'],
    obsolete: ['grain', 'dram', 'slug']
  },
  units: {
    // Metric
    milligram: {
      names: ['milligram'],
      abbreviations: ['mg'],
      description: 'One thousandth of a gram',
    },
    gram: {
      names: ['gram', 'gramme'],
      abbreviations: ['g'],
      description: 'One thousandth of a kilogram',
    },
    kilogram: {
      names: ['kilogram', 'kilogramme'],
      abbreviations: ['kg'],
      description: 'The base SI unit of mass',
    },
    'metric ton': {
      names: ['metric ton', 'tonne'],
      abbreviations: ['t', 'MT'],
      description: 'Equal to 1000 kilograms',
    },
    // Imperial
    ounce: {
      names: ['ounce'],
      abbreviations: ['oz'],
      description: 'Equal to 1/16 of a pound',
    },
    pound: {
      names: ['pound'],
      abbreviations: ['lb', 'lbs'],
      description: 'The basic unit of weight in the imperial system',
    },
    stone: {
      names: ['stone'],
      abbreviations: ['st'],
      description: 'Equal to 14 pounds, commonly used in the UK for body weight',
    },
    'long ton': {
      names: ['long ton', 'imperial ton'],
      abbreviations: ['long tn'],
      description: 'Equal to 2240 pounds',
    },
    'short ton': {
      names: ['short ton', 'US ton'],
      abbreviations: ['sh tn', 'tn'],
      description: 'Equal to 2000 pounds',
    },
    // Troy
    'troy ounce': {
      names: ['troy ounce'],
      abbreviations: ['oz t', 'tr oz'],
      description: 'Used for precious metals',
      needsAsterisk: true,
      asteriskReason: 'Different from regular ounce, only used for precious metals',
    },
    'troy pound': {
      names: ['troy pound'],
      abbreviations: ['lb t'],
      description: 'Equal to 12 troy ounces',
      needsAsterisk: true,
      asteriskReason: 'Different from regular pound, only used for precious metals',
    },
    // Obsolete
    grain: {
      names: ['grain'],
      abbreviations: ['gr'],
      description: 'The smallest unit in the imperial weight system',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, mainly used in specialized fields like bullet weights',
    },
    dram: {
      names: ['dram'],
      abbreviations: ['dr'],
      description: '1/16 of an ounce',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, can be confused with fluid dram',
    },
    slug: {
      names: ['slug'],
      abbreviations: ['slug'],
      description: 'Imperial unit of mass',
      needsAsterisk: true,
      asteriskReason: 'Primarily used in engineering calculations, not for general weight measurement',
    }
  },
  conversions: {
    kilogram: 1,
    milligram: 0.000001,
    gram: 0.001,
    'metric ton': 1000,
    ounce: 0.028349523125,
    pound: 0.45359237,
    stone: 6.35029318,
    'long ton': 1016.047,
    'short ton': 907.18474,
    'troy ounce': 0.0311034768,
    'troy pound': 0.3732417216,
    grain: 0.00006479891,
    dram: 0.0017718451953125,
    slug: 14.593903
  }
};
