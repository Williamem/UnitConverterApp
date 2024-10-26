import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type UnitSelectorProps = {
  categories: Record<string, string[]>;
  selectedUnit: string;
  onUnitChange: (unit: string) => void;
};

const UnitSelector: React.FC<UnitSelectorProps> = ({ categories, selectedUnit, onUnitChange }) => {
  return (
    <View>
      {Object.entries(categories).map(([category, units]) => (
        <View key={category}>
          <Text className="font-bold">{category}</Text>
          {units.map(unit => (
            <TouchableOpacity
              key={unit}
              onPress={() => onUnitChange(unit)}
              className={`p-2 ${selectedUnit === unit ? 'bg-blue-200' : ''}`}
            >
              <Text>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default UnitSelector;

