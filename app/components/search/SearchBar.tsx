import React, { useState, useCallback } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import SearchResults from './SearchResults';
import { useSearch } from './searchUtils';
import { useRouter } from 'expo-router';

type SearchBarProps = {
  placeholder?: string;
  onClose?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search units...",
  onClose 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const searchResults = useSearch(searchTerm);

  const handleResultSelect = useCallback((category: string) => {
    const formattedCategory = category
      .replace(/\s+/g, '')
      .charAt(0).toLowerCase() + category.replace(/\s+/g, '').slice(1);

    router.push({
      pathname: "/converter",
      params: { category: formattedCategory },
    });
    
    setSearchTerm('');
    onClose?.();
  }, [router, onClose]);

  return (
    <View className="flex-1">
      <View className="flex-row items-center bg-background-primary px-4 py-2 rounded-full border border-border-light focus:border-ui-primary">
        <Ionicons name="search" size={20} color="#94a3b8" />
        <TextInput
          className="flex-1 ml-2"
          placeholder={placeholder}
          placeholderTextColor="#94a3b8"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={() => setSearchTerm('')}>
            <Ionicons name="close-circle" size={20} color="#94a3b8" />
          </TouchableOpacity>
        )}
      </View>
      {searchTerm.length > 0 && (
        <SearchResults 
          results={searchResults} 
          onSelect={handleResultSelect}
        />
      )}
    </View>
  );
};

export default SearchBar;
