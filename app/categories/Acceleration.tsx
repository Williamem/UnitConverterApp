import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { acceleration } from '../constants/units/';
import { useConversion } from '../hooks/useConversion';

const Acceleration: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  const allUnits = Object.values(acceleration.categories).flat();

  const { convert } = useConversion();

  useEffect(() => {
    const initialValues: Record<string, string> = {};
    allUnits.forEach(unit => {
      initialValues[unit] = '';
    });
    setValues(initialValues);
  }, []);

  const handleInputChange = (unit: string, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const newValues: Record<string, string> = {};
      allUnits.forEach(otherUnit => {
        if (otherUnit === unit) {
          newValues[otherUnit] = value;
        } else {
          const convertedValue = convert(
            'acceleration',
            numValue,
            unit as keyof typeof acceleration.conversions,
            otherUnit as keyof typeof acceleration.conversions
          );
          newValues[otherUnit] = convertedValue.toFixed(4);
        }
      });
      setValues(newValues);
    } else {
      setValues(prev => ({ ...prev, [unit]: value }));
    }
  };

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Acceleration Conversion</Text>
      
      <View className="flex-row flex-wrap mb-4">
        {Object.keys(acceleration.categories).map(category => (
          <TouchableOpacity
            key={category}
            className={`mr-2 mb-2 p-2 rounded ${selectedCategory === category ? 'bg-blue-500' : 'bg-gray-200'}`}
            onPress={() => setSelectedCategory(selectedCategory === category ? null : category)}
          >
            <Text className={selectedCategory === category ? 'text-white' : 'text-black'}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {allUnits.map(unit => (
        <View key={unit} className="mb-4">
          <Text className="font-bold">{unit}</Text>
          <TextInput
            className="border border-gray-300 rounded p-2"
            value={values[unit]}
            onChangeText={(text) => handleInputChange(unit, text)}
            keyboardType="numeric"
            placeholder="Enter value"
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Acceleration;
