import { CategoryDefinition } from './types';

export const radioactivity: CategoryDefinition = {
  baseUnit: 'becquerel',
  description: 'Radioactivity measures the rate of radioactive decay.',
  categoryAlert: 'Becquerel and curie measure the same thing (decay events per time) but at vastly different scales.',
  categories: {
    si: ['becquerel'],
    traditional: ['curie']
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
      description: 'Traditional unit for radioactivity',
      needsAsterisk: true,
      asteriskReason: 'Older unit, being replaced by becquerel (1 Ci = 3.7×10¹⁰ Bq)',
    }
  },
  conversions: {
    becquerel: {
      toBase: (bq: number) => bq,
      fromBase: (bq: number) => bq
    },
    curie: {
      toBase: (ci: number) => ci * 3.7e10,
      fromBase: (bq: number) => bq / 3.7e10
    }
  }
}; 