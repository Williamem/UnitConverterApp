import { CategoryDefinition } from './types';

export const time: CategoryDefinition = {
  baseUnit: 'second',
  description: 'Time units range from tiny fractions of a second to millennia. While most time units are standardized globally, some historical units remain in specific contexts.',
  categoryAlert: 'Due to varying lengths of months (28-31 days) and years (365-366 days), conversions involving these units require a reference date.',
  categories: {
    small: ['nanosecond', 'microsecond', 'millisecond', 'second'],
    medium: ['minute', 'hour', 'day', 'week'],
    large: ['month', 'year', 'decade', 'century'],
    xlarge: ['millennium'],
    common: ['minute', 'hour', 'day', 'week', 'month', 'year'],
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
      description: 'Calendar month, varying between 28 and 31 days depending on the month',
    },
    year: {
      names: ['year'],
      abbreviations: ['yr', 'y'],
      description: 'Calendar year of 365 days, or 366 days in leap years',
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
      description: '14 days, historical unit still used in some English-speaking regions',
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
    second: {
      toBase: (s: number) => s,
      fromBase: (s: number) => s
    },
    nanosecond: {
      toBase: (ns: number) => ns * 1e-9,
      fromBase: (s: number) => s * 1e9
    },
    microsecond: {
      toBase: (μs: number) => μs * 1e-6,
      fromBase: (s: number) => s * 1e6
    },
    millisecond: {
      toBase: (ms: number) => ms * 0.001,
      fromBase: (s: number) => s * 1000
    },
    minute: {
      toBase: (min: number) => min * 60,
      fromBase: (s: number) => s / 60
    },
    hour: {
      toBase: (h: number) => h * 3600,
      fromBase: (s: number) => s / 3600
    },
    day: {
      toBase: (d: number) => d * 86400,
      fromBase: (s: number) => s / 86400
    },
    week: {
      toBase: (w: number) => w * 604800,
      fromBase: (s: number) => s / 604800
    },
    month: {
      toBase: (m: number, date = new Date()) => {
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setMonth(endDate.getMonth() + m);
        return (endDate.getTime() - startDate.getTime()) / 1000;
      },
      fromBase: (s: number, date = new Date()) => {
        const startDate = new Date(date);
        const endDate = new Date(startDate.getTime() + s * 1000);
        return endDate.getMonth() - startDate.getMonth() + 
          (endDate.getFullYear() - startDate.getFullYear()) * 12;
      }
    },
    year: {
      toBase: (y: number, date = new Date()) => {
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setFullYear(endDate.getFullYear() + y);
        return (endDate.getTime() - startDate.getTime()) / 1000;
      },
      fromBase: (s: number, date = new Date()) => {
        const startDate = new Date(date);
        const endDate = new Date(startDate.getTime() + s * 1000);
        return endDate.getFullYear() - startDate.getFullYear();
      }
    },
    decade: {
      toBase: (d: number) => d * 315569520,
      fromBase: (s: number) => s / 315569520
    },
    century: {
      toBase: (c: number) => c * 3155695200,
      fromBase: (s: number) => s / 3155695200
    },
    millennium: {
      toBase: (m: number) => m * 31556952000,
      fromBase: (s: number) => s / 31556952000
    },
    fortnight: {
      toBase: (f: number) => f * 1209600,
      fromBase: (s: number) => s / 1209600
    },
    score: {
      toBase: (sc: number) => sc * 631152000,
      fromBase: (s: number) => s / 631152000
    }
  }
};
