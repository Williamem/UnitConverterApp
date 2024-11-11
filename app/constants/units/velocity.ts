import { CategoryDefinition } from './types';

export const velocity: CategoryDefinition = {
  baseUnit: 'meter per second',
  description: 'Velocity measures the rate of change of position. While metric units are standard in science, other units like miles per hour are common in everyday use, and specialized units like knots are used in navigation and aviation.',
  categoryAlert: 'Mach number varies with atmospheric conditions. Conversions use sea level standard conditions (15°C).',
  categories: {
    metric: ['meter per second', 'kilometer per hour'],
    imperial: ['mile per hour', 'foot per second'],
    nautical: ['knot'],
    aviation: ['mach']
  },
  units: {
    'meter per second': {
      names: ['meter per second', 'metres per second'],
      abbreviations: ['m/s', 'm⋅s⁻¹'],
      description: 'The SI unit for velocity',
    },
    'kilometer per hour': {
      names: ['kilometer per hour', 'kilometres per hour'],
      abbreviations: ['km/h', 'kph'],
      description: 'Common unit for vehicle speeds in most countries',
    },
    'mile per hour': {
      names: ['mile per hour', 'miles per hour'],
      abbreviations: ['mph', 'mi/h'],
      description: 'Common unit for vehicle speeds in the US and UK',
    },
    'foot per second': {
      names: ['foot per second', 'feet per second'],
      abbreviations: ['ft/s', 'fps'],
      description: 'Used in ballistics and some engineering applications',
    },
    knot: {
      names: ['knot'],
      abbreviations: ['kn', 'kt'],
      description: 'One nautical mile per hour, used in marine navigation and aviation. Historical unit derived from counting knots in a rope.',
    },
    mach: {
      names: ['mach number', 'mach'],
      abbreviations: ['M', 'Ma'],
      description: 'Ratio of speed to the speed of sound in air. Value varies with altitude and temperature. Standard conditions (sea level, 15°C) used for conversion.',
      needsAsterisk: true,
      asteriskReason: 'Varies with altitude and temperature as speed of sound changes',
    }
  },
  conversions: {
    'meter per second': 1,
    'kilometer per hour': 0.277777777777778,
    'mile per hour': 0.44704,
    'foot per second': 0.3048,
    knot: 0.514444444444444,
    mach: 340.2933
  }
};
