import { CategoryDefinition } from './types';

export const fuelEconomy: CategoryDefinition = {
  baseUnit: 'kilometers per liter',
  description: 'Fuel economy measures vehicle efficiency. Different regions use different units, with some measuring distance per volume and others measuring volume per distance.',
  categoryAlert: 'Units like L/100km are inverse measurements - higher numbers mean worse efficiency.',
  categories: {
    metric: ['kilometers per liter', 'liters per 100 kilometers'],
    imperial: ['miles per gallon'],
    'imperial uk': ['miles per Imperial gallon']
  },
  units: {
    'kilometers per liter': {
      names: ['kilometers per liter', 'kilometres per litre'],
      abbreviations: ['km/L', 'km/l'],
      description: 'Metric measure of distance traveled per unit of fuel',
    },
    'liters per 100 kilometers': {
      names: ['liters per 100 kilometers', 'litres per 100 kilometres'],
      abbreviations: ['L/100km', 'l/100km'],
      description: 'European standard for fuel consumption',
      needsAsterisk: true,
      asteriskReason: 'Inverse measurement - lower numbers indicate better efficiency',
    },
    'miles per gallon': {
      names: ['miles per gallon', 'miles per US gallon'],
      abbreviations: ['mpg', 'MPG'],
      description: 'US standard measure of fuel efficiency',
    },
    'miles per Imperial gallon': {
      names: ['miles per Imperial gallon'],
      abbreviations: ['mpg (imp)', 'MPG (imp)'],
      description: 'UK measure of fuel efficiency',
      needsAsterisk: true,
      asteriskReason: 'Different from US MPG due to larger Imperial gallon',
    }
  },
  conversions: {
    'kilometers per liter': 1,
    'liters per 100 kilometers': 100,  // Special conversion needed
    'miles per gallon': 0.425144,
    'miles per Imperial gallon': 0.354006
  }
};
