import { CategoryDefinition } from './types';

export const digitalResolution: CategoryDefinition = {
  baseUnit: 'pixel',
  description: 'Digital resolution measures image quality and screen density. Different units are used for various aspects of digital imaging and printing.',
  categories: {
    basic: ['pixel', 'megapixel'],
    density: ['pixels per inch', 'dots per inch', 'lines per inch']
  },
  units: {
    pixel: {
      names: ['pixel', 'picture element'],
      abbreviations: ['px'],
      description: 'The smallest controllable element of a picture',
    },
    megapixel: {
      names: ['megapixel'],
      abbreviations: ['MP', 'Mpx'],
      description: 'One million pixels',
    },
    'pixels per inch': {
      names: ['pixels per inch'],
      abbreviations: ['ppi', 'PPI'],
      description: 'Screen resolution measurement',
      needsAsterisk: true,
      asteriskReason: 'Often confused with DPI, but specifically refers to digital display resolution',
    },
    'dots per inch': {
      names: ['dots per inch'],
      abbreviations: ['dpi', 'DPI'],
      description: 'Printer resolution measurement',
      needsAsterisk: true,
      asteriskReason: 'Refers to physical dots in printing, not pixels on screen',
    },
    'lines per inch': {
      names: ['lines per inch'],
      abbreviations: ['lpi', 'LPI'],
      description: 'Halftone screen frequency in printing',
      needsAsterisk: true,
      asteriskReason: 'Used in commercial printing to specify halftone screen resolution',
    }
  },
  conversions: {
    pixel: 1,
    megapixel: 1000000,
    'pixels per inch': 1,      // These are density measurements
    'dots per inch': 1,        // and don't convert directly to pixels
    'lines per inch': 1        // without additional context
  }
};
