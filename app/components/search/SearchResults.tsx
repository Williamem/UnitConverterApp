import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SearchResult } from './searchUtils';

// Helper function to normalize strings for comparison
const normalizeForComparison = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[²³]/g, match => ({ '²': '2', '³': '3' })[match] || match);
};

// Helper function to check if strings match after normalization
const isExactMatch = (str1: string, str2: string): boolean => {
  return normalizeForComparison(str1) === normalizeForComparison(str2);
};

// Helper function to properly capitalize each word in a string
const toTitleCase = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

type SearchResultsProps = {
  results: SearchResult[];
  onSelect: (category: string) => void;
};

const SearchResults: React.FC<SearchResultsProps> = ({ results, onSelect }) => {
  if (results.length === 0) {
    return (
      <View className="absolute top-12 left-0 right-0 bg-background-primary border border-border-light rounded-lg shadow-lg z-50 p-4">
        <Text className="text-text-secondary">No results found</Text>
      </View>
    );
  }

  // Sort categories to prioritize those with exact matches
  const sortedCategories = Object.entries(
    results.reduce((acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = [];
      }
      acc[result.category].push(result);
      return acc;
    }, {} as Record<string, SearchResult[]>)
  ).sort(([categoryA, resultsA], [categoryB, resultsB]) => {
    const hasExactMatchA = resultsA.some(r => 
      isExactMatch(r.match, r.searchTerm || '') ||
      isExactMatch(r.unitName, r.searchTerm || '') ||
      r.abbreviations.some(abbr => isExactMatch(abbr, r.searchTerm || ''))
    );
    const hasExactMatchB = resultsB.some(r => 
      isExactMatch(r.match, r.searchTerm || '') ||
      isExactMatch(r.unitName, r.searchTerm || '') ||
      r.abbreviations.some(abbr => isExactMatch(abbr, r.searchTerm || ''))
    );
    
    if (hasExactMatchA && !hasExactMatchB) return -1;
    if (!hasExactMatchA && hasExactMatchB) return 1;
    return 0;
  });

  return (
    <View className="absolute top-12 left-0 right-0 bg-background-primary border border-border-light rounded-lg shadow-lg z-50 max-h-96">
      <ScrollView>
        {sortedCategories.map(([category, categoryResults]) => {
          // Sort results within each category
          const sortedResults = [...categoryResults].sort((a, b) => {
            const searchTerm = a.searchTerm || '';
            
            // Check for exact matches (unit name, match, or abbreviations)
            const aExactUnit = isExactMatch(a.unitName, searchTerm);
            const bExactUnit = isExactMatch(b.unitName, searchTerm);
            const aExactMatch = isExactMatch(a.match, searchTerm);
            const bExactMatch = isExactMatch(b.match, searchTerm);
            const aExactAbbr = a.abbreviations.some(abbr => isExactMatch(abbr, searchTerm));
            const bExactAbbr = b.abbreviations.some(abbr => isExactMatch(abbr, searchTerm));
            
            // Prioritize exact matches
            if ((aExactUnit || aExactMatch || aExactAbbr) && 
                !(bExactUnit || bExactMatch || bExactAbbr)) return -1;
            if (!(aExactUnit || aExactMatch || aExactAbbr) && 
                (bExactUnit || bExactMatch || bExactAbbr)) return 1;
            
            // Then check for partial matches at the start of the string
            const normalizedSearch = normalizeForComparison(searchTerm);
            const aStartsWith = normalizeForComparison(a.unitName).startsWith(normalizedSearch) ||
                              a.abbreviations.some(abbr => 
                                normalizeForComparison(abbr).startsWith(normalizedSearch));
            const bStartsWith = normalizeForComparison(b.unitName).startsWith(normalizedSearch) ||
                              b.abbreviations.some(abbr => 
                                normalizeForComparison(abbr).startsWith(normalizedSearch));
            
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            
            return 0;
          });

          return (
            <TouchableOpacity
              key={category}
              onPress={() => onSelect(category)}
              className="p-4 border-b border-border-light active:bg-background-secondary"
            >
              <Text className="text-text-primary text-lg font-bold mb-1">
                {toTitleCase(category)}
              </Text>
              <Text className="flex-wrap">
                {sortedResults.map((result, index) => (
                  <React.Fragment key={`${result.match}-${index}`}>
                    <Text>
                      <Text className="text-text-primary font-bold">{result.unitName}</Text>
                      {result.abbreviations.length > 0 && (
                        <Text className="text-text-secondary"> ({result.abbreviations.join(', ')})</Text>
                      )}
                      <Text className="text-text-secondary">
                        {index < sortedResults.length - 1 ? ', ' : ''}
                      </Text>
                    </Text>
                  </React.Fragment>
                ))}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchResults;
