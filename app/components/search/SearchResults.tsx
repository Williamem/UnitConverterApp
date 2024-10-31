import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SearchResult } from './searchUtils';

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

  return (
    <View className="absolute top-12 left-0 right-0 bg-background-primary border border-border-light rounded-lg shadow-lg z-50 max-h-96">
      <ScrollView>
        {results.map((result, index) => (
          <TouchableOpacity
            key={`${result.category}-${result.match}-${index}`}
            onPress={() => onSelect(result.category)}
            className="p-4 border-b border-border-light active:bg-background-secondary"
          >
            <Text className="text-text-primary">
              {result.category} - {result.match}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchResults;
