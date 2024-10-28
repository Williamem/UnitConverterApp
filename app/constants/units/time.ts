import { CategoryDefinition } from './types';

export const time: CategoryDefinition = {
  //TODO: add special logic for month and year with starting time now?
  baseUnit: 'second',
  description: 'Time units range from tiny fractions of a second to millennia. While most time units are standardized globally, some historical units remain in specific contexts.',
  categories: {
    small: ['nanosecond', 'microsecond', 'millisecond', 'second'],
    common: ['minute', 'hour', 'day', 'week', 'month', 'year'],
    large: ['decade', 'century', 'millennium'],
    obsolete: ['fortnight', 'score']
  },
  units: {
    // Small units
    nanosecond: {
      names: ['nanosecond'],
      abbreviations: ['ns'],
      description: 'One billionth of a second',
    },
    microsecond: {
      names: ['microsecond'],
      abbreviations: ['μs', 'us'],
      description: 'One millionth of a second',
    },
    millisecond: {
      names: ['millisecond'],
      abbreviations: ['ms'],
      description: 'One thousandth of a second',
    },
    second: {
      names: ['second'],
      abbreviations: ['s', 'sec'],
      description: 'The SI base unit of time',
    },
    // Common units
    minute: {
      names: ['minute'],
      abbreviations: ['min'],
      description: '60 seconds',
    },
    hour: {
      names: ['hour'],
      abbreviations: ['h', 'hr'],
      description: '60 minutes',
    },
    day: {
      names: ['day'],
      abbreviations: ['d'],
      description: '24 hours',
    },
    week: {
      names: ['week'],
      abbreviations: ['wk'],
      description: '7 days',
    },
    month: {
      names: ['month'],
      abbreviations: ['mo'],
      description: 'Approximately 30 days',
      needsAsterisk: true,
      asteriskReason: 'Varies between 28 and 31 days depending on the calendar month',
    },
    year: {
      names: ['year'],
      abbreviations: ['yr', 'y'],
      description: 'Approximately 365.25 days',
      needsAsterisk: true,
      asteriskReason: 'Can be 365 or 366 days depending on leap years',
    },
    // Large units
    decade: {
      names: ['decade'],
      abbreviations: ['dec'],
      description: '10 years',
    },
    century: {
      names: ['century'],
      abbreviations: ['c'],
      description: '100 years',
    },
    millennium: {
      names: ['millennium'],
      abbreviations: ['kyr'],
      description: '1000 years',
    },
    // Obsolete
    fortnight: {
      names: ['fortnight'],
      abbreviations: ['fn'],
      description: '14 days',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, still used in some English-speaking regions',
    },
    score: {
      names: ['score'],
      abbreviations: [],
      description: '20 years',
      needsAsterisk: true,
      asteriskReason: 'Historical unit, rarely used in modern context',
    }
  },
  conversions: {
    second: 1,
    nanosecond: 1e-9,
    microsecond: 1e-6,
    millisecond: 0.001,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2629746,  // Average month (365.2425 days / 12)
    year: 31556952,  // Average year (365.2425 days)
    decade: 315569520,
    century: 3155695200,
    millennium: 31556952000,
    fortnight: 1209600,
    score: 631139040
  }
};
