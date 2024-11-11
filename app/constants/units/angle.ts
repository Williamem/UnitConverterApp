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
      description: 'The SI unit for angles, defined by the arc length equal to the radius',
    },
    degree: {
      names: ['degree'],
      abbreviations: ['°', 'deg'],
      description: '1/360 of a full rotation, the most commonly used angle unit',
    },
    arcminute: {
      names: ['arcminute', 'minute of arc'],
      abbreviations: ['′', 'arcmin'],
      description: '1/60 of a degree, used in astronomy and navigation',
    },
    arcsecond: {
      names: ['arcsecond', 'second of arc'],
      abbreviations: ['″', 'arcsec'],
      description: '1/60 of an arcminute, used in astronomy and navigation',
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
    degree: 0.017453292519943295,  // π/180
    arcminute: 0.0002908882086657216,  // π/10800
    arcsecond: 0.000004848136811095360,  // π/648000
    gradian: 0.015707963267948967,  // π/200
    turn: 6.283185307179586  // 2π
  }
};
