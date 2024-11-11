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
      description: 'European standard for fuel consumption. Lower numbers indicate better efficiency.',
    },
    'miles per gallon': {
      names: ['miles per gallon', 'miles per US gallon'],
      abbreviations: ['mpg', 'MPG'],
      description: 'US standard measure of fuel efficiency',
    },
    'miles per Imperial gallon': {
      names: ['miles per Imperial gallon'],
      abbreviations: ['mpg (imp)', 'MPG (imp)'],
      description: 'UK measure of fuel efficiency, using the larger Imperial gallon (4.54609 L)',
    }
  },
  conversions: {
    'kilometers per liter': {
      toBase: (kpl: number) => kpl,
      fromBase: (kpl: number) => kpl
    },
    'liters per 100 kilometers': {
      toBase: (l100km: number) => 100 / l100km,
      fromBase: (kpl: number) => 100 / kpl
    },
    'miles per gallon': {
      toBase: (mpg: number) => mpg * 0.4251437075,
      fromBase: (kpl: number) => kpl / 0.4251437075
    },
    'miles per Imperial gallon': {
      toBase: (mpg: number) => mpg * 0.354006189,
      fromBase: (kpl: number) => kpl / 0.354006189
    }
  }
};
