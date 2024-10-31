import { unitDefinitions } from '../../constants/units/types';

export interface SearchResult {
  category: string;
  match: string;
  type: 'category' | 'unit' | 'abbreviation';
  unitName: string;
  abbreviations: string[];
  searchTerm: string;
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

// Helper function to properly capitalize each word in a string
const toTitleCase = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const useSearch = (searchTerm: string): SearchResult[] => {
  if (!searchTerm) return [];

  const normalizedSearchTerm = normalizeString(searchTerm);
  const results: SearchResult[] = [];

  Object.entries(unitDefinitions).forEach(([category, definition]) => {
    const formattedCategory = category.replace(/([A-Z])/g, ' $1').trim();

    // Check category name
    if (normalizeString(formattedCategory).includes(normalizedSearchTerm)) {
      const titleCaseCategory = toTitleCase(formattedCategory);
      results.push({
        category: titleCaseCategory,
        match: titleCaseCategory,
        type: 'category',
        unitName: titleCaseCategory,
        abbreviations: [],
        searchTerm: normalizedSearchTerm
      });
    }

    // Check units and their properties
    Object.entries(definition.units).forEach(([unitKey, unitInfo]) => {
      let shouldAdd = false;
      
      // Check unit names
      const nameMatch = unitInfo.names.some(name => 
        normalizeString(name).includes(normalizedSearchTerm)
      );

      // Check abbreviations
      const abbrMatch = unitInfo.abbreviations.some(abbr => 
        normalizeString(abbr).includes(normalizedSearchTerm)
      );

      if (nameMatch || abbrMatch) {
        results.push({
          category: formattedCategory,
          match: unitInfo.names[0], // Primary name
          type: nameMatch ? 'unit' : 'abbreviation',
          unitName: unitInfo.names[0],
          abbreviations: unitInfo.abbreviations,
          searchTerm: normalizedSearchTerm
        });
      }
    });
  });

  return results;
};
