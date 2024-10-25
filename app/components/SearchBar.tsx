import React from 'react';
import { TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View className="w-full px-4 py-2">
      <TextInput
        className="bg-gray-100 rounded-full px-4 py-2"
        placeholder="Search units..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

