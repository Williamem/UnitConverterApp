import React from "react";
import { View, TextInput, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SearchHeaderProps = {
  onSearch: (text: string) => void;
  placeholder?: string;
};

const SearchHeader: React.FC<SearchHeaderProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  return (
      <SafeAreaView edges={["top"]} className="bg-white">
        <View className="px-4 py-2">
          <TextInput
            className="bg-gray-100 p-2 rounded-full"
            placeholder={placeholder}
            onChangeText={onSearch}
          />
        </View>
      </SafeAreaView>
  );
};

export default SearchHeader;
