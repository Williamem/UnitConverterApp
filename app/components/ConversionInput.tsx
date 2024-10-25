import React from 'react';
import { View, TextInput, Text } from 'react-native';

type ConversionInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  unit: string;
};

export default function ConversionInput({ value, onChangeText, unit }: ConversionInputProps) {
  return (
    <View className="flex-row items-center">
      <TextInput
        className="border border-gray-300 rounded px-2 py-1 w-32"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
      <Text className="ml-2">{unit}</Text>
    </View>
  );
}

