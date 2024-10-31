import { unitDefinitions } from '../../constants/units/types';

export interface SearchResult {
  category: string;
  match: string;
  type: 'category' | 'unit' | 'abbreviation';
}

const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[³²¹⁰]/g, (match) => {
      const superscriptMap: { [key: string]: string } = {
        '³': '3',
        '²': '2',
        '¹': '1',
        '⁰': '0'
      };
      return superscriptMap[match] || match;
    });
};

export const useSearch = (searchTerm: string): SearchResult[] => {
  if (!searchTerm) return [];

  const normalizedSearchTerm = normalizeString(searchTerm);
  const results: SearchResult[] = [];

  // Search through all categories
  Object.entries(unitDefinitions).forEach(([category, definition]) => {
    const formattedCategory = category.replace(/([A-Z])/g, ' $1').trim();

    // Check category name
    if (normalizeString(formattedCategory).includes(normalizedSearchTerm)) {
      results.push({
        category: formattedCategory,
        match: formattedCategory,
        type: 'category'
      });
    }

    // Check units and their properties
    Object.entries(definition.units).forEach(([unitName, unitInfo]) => {
      // Check unit names
      unitInfo.names.forEach(name => {
        if (normalizeString(name).includes(normalizedSearchTerm)) {
          results.push({
            category: formattedCategory,
            match: name,
            type: 'unit'
          });
        }
      });

      // Check abbreviations
      unitInfo.abbreviations.forEach(abbr => {
        if (normalizeString(abbr).includes(normalizedSearchTerm)) {
          results.push({
            category: formattedCategory,
            match: abbr,
            type: 'abbreviation'
          });
        }
      });
    });
  });

  return results;
};
