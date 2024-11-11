import { CategoryDefinition } from './types';

export const acceleration: CategoryDefinition = {
  baseUnit: 'meter per second squared',
  description: 'Acceleration measures the rate of change of velocity. While metric units are standard in science, g-force is commonly used to describe acceleration in terms of Earth\'s gravity.',
  categories: {
    metric: ['meter per second squared'],
    customary: ['foot per second squared'],
    other: ['g-force (standard gravity)']
  },
  units: {
    'meter per second squared': {
      names: ['meter per second squared', 'metres per second squared'],
      abbreviations: ['m/s²', 'm/s/s', 'm⋅s⁻²'],
      description: 'The SI unit of acceleration, measuring velocity change per second',
    },
    'foot per second squared': {
      names: ['foot per second squared', 'feet per second squared'],
      abbreviations: ['ft/s²', 'ft/s/s', 'ft⋅s⁻²'],
      description: 'The traditional unit of acceleration in US Customary and Imperial systems',
      needsAsterisk: true,
      asteriskReason: 'While historically used in both US and UK engineering, metric units are now preferred in most contexts',
    },
    'g-force (standard gravity)': {
      names: ['g-force', 'g-force (standard gravity)', 'standard gravity'],
      abbreviations: ['g', 'g₀', 'gₙ'],
      description: 'Acceleration relative to Earth\'s gravitational acceleration',
      needsAsterisk: true,
      asteriskReason: 'The actual acceleration due to gravity varies slightly depending on location on Earth',
    }
  },
  conversions: {
    'meter per second squared': 1,
    'foot per second squared': 0.3048,
    'g-force (standard gravity)': 9.80665
  }
};
