import { CategoryDefinition } from './types';

export const power: CategoryDefinition = {
  baseUnit: 'watt',
  description: 'Power units measure the rate of energy transfer. While watts are standard in most contexts, horsepower variants are still common for engines and motors.',
  categories: {
    metric: ['watt', 'kilowatt', 'megawatt'],
    mechanical: ['horsepower', 'metric horsepower', 'electrical horsepower'],
    thermal: ['BTU per hour'],
    other: ['foot pound per minute']
  },
  units: {
    watt: {
      names: ['watt'],
      abbreviations: ['W'],
      description: 'The SI unit of power (one joule per second)',
    },
    kilowatt: {
      names: ['kilowatt'],
      abbreviations: ['kW'],
      description: 'One thousand watts',
    },
    megawatt: {
      names: ['megawatt'],
      abbreviations: ['MW'],
      description: 'One million watts',
    },
    horsepower: {
      names: ['horsepower', 'mechanical horsepower'],
      abbreviations: ['hp', 'HP'],
      description: 'Traditional unit for engine power',
      needsAsterisk: true,
      asteriskReason: 'Multiple definitions exist; this is the mechanical/imperial horsepower',
    },
    'metric horsepower': {
      names: ['metric horsepower', 'PS', 'Pferdestärke'],
      abbreviations: ['PS', 'cv', 'pk'],
      description: 'Slightly different from mechanical horsepower',
      needsAsterisk: true,
      asteriskReason: 'Common in European engine specifications',
    },
    'electrical horsepower': {
      names: ['electrical horsepower'],
      abbreviations: ['hp(E)', 'HP(E)'],
      description: 'Used for electrical motor power',
      needsAsterisk: true,
      asteriskReason: 'Different from mechanical horsepower, equals exactly 746 watts',
    },
    'BTU per hour': {
      names: ['BTU per hour', 'BTU/hour'],
      abbreviations: ['BTU/h', 'BTU/hr'],
      description: 'Common in HVAC applications',
    },
    'foot pound per minute': {
      names: ['foot pound per minute', 'foot-pound per minute'],
      abbreviations: ['ft⋅lb/min', 'ft-lb/min'],
      description: 'Traditional unit of mechanical power',
      needsAsterisk: true,
      asteriskReason: 'Obsolete unit, rarely used in modern applications',
    }
  },
  conversions: {
    watt: 1,
    kilowatt: 1000,
    megawatt: 1000000,
    horsepower: 745.7,
    'metric horsepower': 735.49875,
    'electrical horsepower': 746,
    'BTU per hour': 0.29307107,
    'foot pound per minute': 0.0225969658
  }
};
