import { CategoryDefinition } from './types';

export const frequency: CategoryDefinition = {
  baseUnit: 'hertz',
  description: 'Frequency measures the number of occurrences per unit time. While hertz is the standard unit, specialized prefixes are common in electronics, and RPM is used for rotating machinery.',
  categories: {
    metric: ['hertz', 'kilohertz', 'megahertz', 'gigahertz', 'terahertz'],
    mechanical: ['revolution per minute']
  },
  units: {
    hertz: {
      names: ['hertz'],
      abbreviations: ['Hz'],
      description: 'One cycle per second, the SI unit of frequency',
    },
    kilohertz: {
      names: ['kilohertz'],
      abbreviations: ['kHz'],
      description: 'One thousand cycles per second',
    },
    megahertz: {
      names: ['megahertz'],
      abbreviations: ['MHz'],
      description: 'One million cycles per second',
    },
    gigahertz: {
      names: ['gigahertz'],
      abbreviations: ['GHz'],
      description: 'One billion cycles per second',
    },
    terahertz: {
      names: ['terahertz'],
      abbreviations: ['THz'],
      description: 'One trillion cycles per second',
    },
    'revolution per minute': {
      names: ['revolution per minute', 'revolutions per minute'],
      abbreviations: ['rpm', 'RPM'],
      description: 'Rotational speed measurement, commonly used for motors, engines, and other rotating machinery',
    }
  },
  conversions: {
    hertz: 1,
    kilohertz: 1000,
    megahertz: 1000000,
    gigahertz: 1000000000,
    terahertz: 1000000000000,
    'revolution per minute': 0.016666666666666666,
  }
};
