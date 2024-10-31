import { CategoryDefinition } from './types';

export const dataStorage: CategoryDefinition = {
  baseUnit: 'byte',
  categoryAlert: 'Be careful! Data storage units can mean different things in different contexts. For example, a "gigabyte" on your hard drive (1000³ bytes) is different from a "gibibyte" in your RAM (1024³ bytes).',
  description: 'Digital data storage units come in two standards: the decimal (SI) system using powers of 1000, and the binary system using powers of 1024.',
  categories: {
    small: ['bit', 'byte', 'kilobyte', 'kibibyte'],
    medium: ['megabyte', 'mebibyte', 'gigabyte', 'gibibyte'],
    large: ['terabyte', 'tebibyte', 'petabyte', 'pebibyte', 'exabyte', 'exbibyte'],
    binary: ['bit', 'byte', 'kibibyte', 'mebibyte', 'gibibyte', 'tebibyte', 'pebibyte', 'exbibyte'],
    decimal: ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte', 'exabyte']
  },
  units: {
    bit: {
      names: ['bit'],
      abbreviations: ['b'],
      description: 'The basic unit of digital information',
    },
    byte: {
      names: ['byte'],
      abbreviations: ['B'],
      description: 'A group of 8 bits',
    },
    kilobyte: {
      names: ['kilobyte'],
      abbreviations: ['KB', 'kB'],
      description: 'One thousand bytes (1000 bytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with kibibyte (1024 bytes) in computing contexts',
    },
    megabyte: {
      names: ['megabyte'],
      abbreviations: ['MB'],
      description: 'One million bytes (1000 kilobytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with mebibyte (1024 kilobytes) in computing contexts',
    },
    gigabyte: {
      names: ['gigabyte'],
      abbreviations: ['GB'],
      description: 'One billion bytes (1000 megabytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with gibibyte (1024 megabytes) in computing contexts',
    },
    terabyte: {
      names: ['terabyte'],
      abbreviations: ['TB'],
      description: 'One trillion bytes (1000 gigabytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with tebibyte (1024 gigabytes) in computing contexts',
    },
    petabyte: {
      names: ['petabyte'],
      abbreviations: ['PB'],
      description: 'One quadrillion bytes (1000 terabytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with pebibyte (1024 terabytes) in computing contexts',
    },
    exabyte: {
      names: ['exabyte'],
      abbreviations: ['EB'],
      description: 'One quintillion bytes (1000 petabytes)',
      needsAsterisk: true,
      asteriskReason: 'Often confused with exbibyte (1024 petabytes) in computing contexts',
    },
    kibibyte: {
      names: ['kibibyte'],
      abbreviations: ['KiB'],
      description: '1024 bytes (2¹⁰ bytes)',
    },
    mebibyte: {
      names: ['mebibyte'],
      abbreviations: ['MiB'],
      description: '1024 kibibytes (2²⁰ bytes)',
    },
    gibibyte: {
      names: ['gibibyte'],
      abbreviations: ['GiB'],
      description: '1024 mebibytes (2³⁰ bytes)',
    },
    tebibyte: {
      names: ['tebibyte'],
      abbreviations: ['TiB'],
      description: '1024 gibibytes (2⁴⁰ bytes)',
    },
    pebibyte: {
      names: ['pebibyte'],
      abbreviations: ['PiB'],
      description: '1024 tebibytes (2⁵⁰ bytes)',
    },
    exbibyte: {
      names: ['exbibyte'],
      abbreviations: ['EiB'],
      description: '1024 pebibytes (2⁶⁰ bytes)',
    }
  },
  conversions: {
    bit: 0.125,
    byte: 1,
    kilobyte: 1000,
    megabyte: 1000000,
    gigabyte: 1000000000,
    terabyte: 1000000000000,
    petabyte: 1000000000000000,
    exabyte: 1000000000000000000,
    kibibyte: 1024,
    mebibyte: 1048576,
    gibibyte: 1073741824,
    tebibyte: 1099511627776,
    pebibyte: 1125899906842624,
    exbibyte: 1152921504606846976
  }
};
