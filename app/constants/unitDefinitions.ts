export const unitDefinitions = {
  acceleration: {
    baseUnit: 'meter per second squared',
    categories: {
      metric: ['meter per second squared'],
      imperial: ['foot per second squared'],
      other: ['g-force (standard gravity)']
    },
    conversions: {
      'meter per second squared': 1,
      'foot per second squared': 0.3048,
      'g-force (standard gravity)': 9.80665
    }
  },
  distance: {
    baseUnit: 'meter',
    categories: {
      metric: ['millimeter', 'centimeter', 'meter', 'kilometer'],
      imperial: ['inch', 'foot', 'yard', 'mile'],
      nautical: ['nautical mile'],
      astronomical: ['light-year', 'astronomical unit', 'parsec'],
      obsolete: ['furlong', 'league', 'fathom', 'rod', 'chain']
    },
    conversions: {
      millimeter: 0.001,
      centimeter: 0.01,
      meter: 1,
      kilometer: 1000,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.344,
      'nautical mile': 1852,
      'light-year': 9.461e15,
      'astronomical unit': 1.496e11,
      parsec: 3.086e16,
      furlong: 201.168,
      league: 4828.032,
      fathom: 1.8288,
      rod: 5.0292,
      chain: 20.1168
    }
  },
  weight: {
    baseUnit: 'gram',
    categories: {
      metric: ['milligram', 'gram', 'kilogram', 'metric ton'],
      imperial: ['ounce', 'pound', 'stone', 'ton (long)'],
      us: ['ton (short)'],
      troy: ['troy ounce', 'troy pound'],
      obsolete: ['grain', 'dram', 'hundredweight', 'slug']
    },
    conversions: {
      milligram: 0.001,
      gram: 1,
      kilogram: 1000,
      'metric ton': 1e6,
      ounce: 28.34952,
      pound: 453.5924,
      stone: 6350.293,
      'ton (long)': 1.016e6,
      'ton (short)': 907184.74,
      'troy ounce': 31.10348,
      'troy pound': 373.2417,
      grain: 0.06479891,
      dram: 1.7718451953125,
      hundredweight: 50802.345,
      slug: 14593.903
    }
  },
  // Add similar objects for other categories
};
