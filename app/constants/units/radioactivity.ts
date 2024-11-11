import { CategoryDefinition } from './types';

export const radioactivity: CategoryDefinition = {
  baseUnit: 'becquerel',
  description: 'Radioactivity measures the rate of radioactive decay. Becquerel and curie measure the same thing (decay events per time) but at vastly different scales.',
  categories: {
    si: ['becquerel'],
    traditional: ['curie', 'millicurie', 'microcurie', 'nanocurie', 'picocurie'],
    historical: ['rutherford']
  },
  units: {
    becquerel: {
      names: ['becquerel'],
      abbreviations: ['Bq'],
      description: 'The SI unit for radioactivity (one decay per second)',
    },
    curie: {
      names: ['curie'],
      abbreviations: ['Ci'],
      description: 'Traditional unit for radioactivity (1 Ci = 3.7×10¹⁰ Bq, based on radium-226 activity)',
      needsAsterisk: true,
      asteriskReason: 'Originally defined as the activity of one gram of radium-226',
    },
    rutherford: {
      names: ['rutherford'],
      abbreviations: ['rd'],
      description: 'Historical unit equal to one million decays per second (10⁶ Bq), rarely used today',
    },
    millicurie: {
      names: ['millicurie'],
      abbreviations: ['mCi'],
      description: 'One thousandth of a curie',
    },
    microcurie: {
      names: ['microcurie'],
      abbreviations: ['µCi'],
      description: 'One millionth of a curie',
    },
    nanocurie: {
      names: ['nanocurie'],
      abbreviations: ['nCi'],
      description: 'One billionth of a curie',
    },
    picocurie: {
      names: ['picocurie'],
      abbreviations: ['pCi'],
      description: 'One trillionth of a curie',
    }
  },
  conversions: {
    becquerel: 1,
    curie: 3.7e10,
    rutherford: 1000000,
    millicurie: 3.7e7,
    microcurie: 3.7e4,
    nanocurie: 37,
    picocurie: 0.037
  }
}; 