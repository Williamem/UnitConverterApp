import { CategoryDefinition } from './types';

export const dataTransferRate: CategoryDefinition = {
  baseUnit: 'bit per second',
  description: 'Data transfer rate measures the speed of data transmission. While bits per second is the standard unit, larger prefixes are common for modern networks and storage.',
  categories: {
    binary: ['bit per second', 'kilobit per second', 'megabit per second', 'gigabit per second', 'terabit per second'],
    bytes: ['byte per second', 'kilobyte per second', 'megabyte per second', 'gigabyte per second', 'terabyte per second']
  },
  units: {
    'bit per second': {
      names: ['bit per second', 'bits per second'],
      abbreviations: ['bps', 'bit/s'],
      description: 'The basic unit of data transfer rate',
    },
    'kilobit per second': {
      names: ['kilobit per second', 'kilobits per second'],
      abbreviations: ['kbps', 'Kbps', 'Kb/s'],
      description: 'One thousand bits per second',
    },
    'megabit per second': {
      names: ['megabit per second', 'megabits per second'],
      abbreviations: ['Mbps', 'Mb/s'],
      description: 'One million bits per second',
    },
    'gigabit per second': {
      names: ['gigabit per second', 'gigabits per second'],
      abbreviations: ['Gbps', 'Gb/s'],
      description: 'One billion bits per second',
    },
    'terabit per second': {
      names: ['terabit per second', 'terabits per second'],
      abbreviations: ['Tbps', 'Tb/s'],
      description: 'One trillion bits per second',
    },
    'byte per second': {
      names: ['byte per second', 'bytes per second'],
      abbreviations: ['B/s', 'Bps'],
      description: 'Eight bits per second',
    },
    'kilobyte per second': {
      names: ['kilobyte per second', 'kilobytes per second'],
      abbreviations: ['KB/s', 'KBps'],
      description: 'One thousand bytes per second',
    },
    'megabyte per second': {
      names: ['megabyte per second', 'megabytes per second'],
      abbreviations: ['MB/s', 'MBps'],
      description: 'One million bytes per second',
    },
    'gigabyte per second': {
      names: ['gigabyte per second', 'gigabytes per second'],
      abbreviations: ['GB/s', 'GBps'],
      description: 'One billion bytes per second',
    },
    'terabyte per second': {
      names: ['terabyte per second', 'terabytes per second'],
      abbreviations: ['TB/s', 'TBps'],
      description: 'One trillion bytes per second',
    }
  },
  conversions: {
    'bit per second': 1,
    'kilobit per second': 1000,
    'megabit per second': 1000000,
    'gigabit per second': 1000000000,
    'terabit per second': 1000000000000,
    'byte per second': 8,
    'kilobyte per second': 8000,
    'megabyte per second': 8000000,
    'gigabyte per second': 8000000000,
    'terabyte per second': 8000000000000
  }
};
