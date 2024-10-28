import { CategoryDefinition } from './types';

export const angle: CategoryDefinition = {
  baseUnit: 'radian',
  description: 'Angle units measure rotation or orientation. While radians are used in mathematics and science, degrees are more common in everyday use.',
  categories: {
    scientific: ['radian'],
    common: ['degree'],
    navigation: ['arcminute', 'arcsecond'],
    other: ['gradian', 'turn']
  },
  units: {
    radian: {
      names: ['radian'],
      abbreviations: ['rad'],
      description: 'The SI unit for angles, based on the radius of a circle',
    },
    degree: {
      names: ['degree'],
      abbreviations: ['°', 'deg'],
      description: '1/360 of a full rotation',
    },
    arcminute: {
      names: ['arcminute', 'minute of arc'],
      abbreviations: ['′', 'arcmin'],
      description: '1/60 of a degree',
    },
    arcsecond: {
      names: ['arcsecond', 'second of arc'],
      abbreviations: ['″', 'arcsec'],
      description: '1/60 of an arcminute',
    },
    gradian: {
      names: ['gradian', 'gon'],
      abbreviations: ['grad', 'gon'],
      description: '1/400 of a full rotation',
      needsAsterisk: true,
      asteriskReason: 'Mainly used in surveying and some European countries',
    },
    turn: {
      names: ['turn', 'revolution', 'cycle'],
      abbreviations: ['rev', 'cyc'],
      description: 'One complete rotation',
    }
  },
  conversions: {
    radian: 1,
    degree: 0.0174533,  // π/180
    arcminute: 0.000290888,  // π/10800
    arcsecond: 4.84814e-6,   // π/648000
    gradian: 0.015708,  // π/200
    turn: 6.28319      // 2π
  }
};
