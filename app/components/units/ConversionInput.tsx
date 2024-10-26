import React from 'react';
import { View, TextInput, Text } from 'react-native';

type ConversionInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  unit: string;
  editable?: boolean;
};

const ConversionInput: React.FC<ConversionInputProps> = ({ value, onChangeText, unit, editable = true }) => {
  return (
    <View className="flex-row items-center">
      <TextInput
        className="border border-gray-300 rounded px-2 py-1 w-32"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        editable={editable}
      />
      <Text className="ml-2">{unit}</Text>
    </View>
  );
};

export default ConversionInput;

