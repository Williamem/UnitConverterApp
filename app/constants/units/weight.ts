import { CategoryDefinition } from './types';

export const weight: CategoryDefinition = {
  baseUnit: 'kilogram',
  description: 'Weight (mass) units vary by region and use case. Metric units are standard in science, imperial units are common in the US and UK, and specialized units like troy weight are used for precious metals.',
  categories: {
    small: ['milligram', 'grain', 'dram'],
    medium: ['gram', 'ounce', 'troy ounce'],
    large: ['kilogram', 'pound', 'troy pound', 'stone', 'slug'],
    xlarge: ['metric ton', 'long ton', 'short ton', 'jumbo jet', 'blue whale', 'african elephant'],
    metric: ['milligram', 'gram', 'kilogram', 'metric ton'],
    imperial: ['ounce', 'pound', 'stone', 'long ton'],
    us: ['short ton'],
    troy: ['troy ounce', 'troy pound'],
    obsolete: ['grain', 'dram', 'slug'],
    comparative: ['jumbo jet', 'blue whale', 'african elephant', 'statue of liberty', 'aircraft carrier']
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
      description: 'Used for precious metals. Different from regular ounce.',
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
      description: 'The smallest unit in the imperial weight system. Historical unit, mainly used in specialized fields like bullet weights.',
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
    },
    'jumbo jet': {
      names: ['jumbo jet', 'Boeing 747'],
      abbreviations: ['747'],
      description: 'Empty weight of a typical Boeing 747-400 (varies by model)',
      needsAsterisk: true,
      asteriskReason: 'Based on empty weight of Boeing 747-400, varies by model',
    },
    'blue whale': {
      names: ['blue whale'],
      abbreviations: ['whale'],
      description: 'Average weight of an adult blue whale',
      needsAsterisk: true,
      asteriskReason: 'Based on average adult weight, individual weights vary significantly',
    },
    'african elephant': {
      names: ['african elephant'],
      abbreviations: ['elephant'],
      description: 'Average weight of an adult African bush elephant',
      needsAsterisk: true,
      asteriskReason: 'Based on average adult weight, individual weights vary significantly',
    },
    'statue of liberty': {
      names: ['statue of liberty'],
      abbreviations: ['sol'],
      description: 'Weight of the Statue of Liberty',
      needsAsterisk: true,
      asteriskReason: 'Weight of metal structure without base',
    },
    'aircraft carrier': {
      names: ['aircraft carrier', 'nimitz class carrier'],
      abbreviations: ['carrier'],
      description: 'Weight of a Nimitz-class aircraft carrier',
      needsAsterisk: true,
      asteriskReason: 'Based on full load displacement of Nimitz-class carrier',
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
    slug: 14.593902937206364,
    'jumbo jet': 180000,
    'blue whale': 140000,
    'african elephant': 6000,
    'statue of liberty': 225000,
    'aircraft carrier': 100000000
  }
};
