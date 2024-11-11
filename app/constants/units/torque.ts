import { CategoryDefinition } from './types';

export const torque: CategoryDefinition = {
  baseUnit: 'newton meter',
  description: 'Torque measures rotational force. While newton-meters are the SI standard, foot-pounds are common in US automotive and engineering applications.',
  categories: {
    metric: ['newton meter', 'kilogram meter'],
    imperial: ['foot pound', 'inch pound']
  },
  units: {
    'newton meter': {
      names: ['newton meter', 'newton-meter'],
      abbreviations: ['N⋅m', 'N-m', 'Nm'],
      description: 'The SI unit for torque',
    },
    'kilogram meter': {
      names: ['kilogram meter', 'kilogram-meter'],
      abbreviations: ['kg⋅m', 'kg-m'],
      description: 'Traditional metric torque unit',
      needsAsterisk: true,
      asteriskReason: 'Older unit, newton meters are now standard',
    },
    'foot pound': {
      names: ['foot pound', 'foot-pound'],
      abbreviations: ['ft⋅lb', 'ft-lb', 'lbf⋅ft'],
      description: 'Common US unit for torque',
    },
    'inch pound': {
      names: ['inch pound', 'inch-pound'],
      abbreviations: ['in⋅lb', 'in-lb', 'lbf⋅in'],
      description: 'Used for lower torque measurements in US units',
    }
  },
  conversions: {
    'newton meter': 1,
    'kilogram meter': 9.80665,
    'foot pound': 1.3558179483314004,
    'inch pound': 0.112984829027617
  }
};
