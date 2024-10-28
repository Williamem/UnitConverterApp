import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { acceleration } from '../constants/units/';
import { useConversion } from '../hooks/useConversion';
import { Ionicons } from '@expo/vector-icons';

const Acceleration: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
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
          <View key={unit} className="mb-4 flex-row items-stretch h-12">
            <TouchableOpacity 
              className="min-w-[120px] flex-1 mr-4 flex-row items-center bg-background-secondary rounded-lg px-3 active:bg-background-tertiary"
              onPress={() => {
                setSelectedUnit(unit);
                setModalVisible(true);
              }}
            >
              <View className="flex-1">
                <View className="flex-row items-center">
                  <View className="w-4 items-center">
                    {acceleration.units[unit].needsAsterisk && (
                      <Text className="text-accent-red font-bold text-lg">*</Text>
                    )}
                  </View>
                  <Text className="font-bold flex-shrink flex-wrap">
                    {unit}
                  </Text>
                </View>
              </View>
              <Ionicons 
                name="information-circle-outline" 
                size={20} 
                color="#475569"
                className="ml-2"
              />
            </TouchableOpacity>
            <TextInput
              className="w-[150px] border border-gray-300 rounded px-3 h-full"
              value={values[unit]}
              onChangeText={(text) => handleInputChange(unit, text)}
              keyboardType="numeric"
              placeholder="Enter value"
            />
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          className="flex-1 bg-black/50"
          onPress={() => setModalVisible(false)}
        >
          <Pressable 
            className="m-4 mt-20 bg-background-primary rounded-xl p-6 shadow-xl"
            onPress={e => e.stopPropagation()}
          >
            {selectedUnit && (
              <>
                <View className="flex-row justify-between items-center mb-4">
                  <Text className="text-xl font-bold">{selectedUnit}</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className="p-2 rounded-full active:bg-background-tertiary"
                  >
                    <Ionicons name="close" size={24} color="#475569" />
                  </TouchableOpacity>
                </View>

                <View className="mb-4">
                  <Text className="text-sm text-text-secondary mb-1">Abbreviations</Text>
                  <Text className="text-text-primary">
                    {acceleration.units[selectedUnit].abbreviations.join(', ')}
                  </Text>
                </View>

                <View className="mb-4">
                  <Text className="text-sm text-text-secondary mb-1">Description</Text>
                  <Text className="text-text-primary">
                    {acceleration.units[selectedUnit].description}
                  </Text>
                </View>

                {acceleration.units[selectedUnit].needsAsterisk && (
                  <View className="mb-4">
                    <Text className="text-sm text-text-secondary mb-1">Special Consideration</Text>
                    <Text className="text-accent-red">
                      {acceleration.units[selectedUnit].asteriskReason}
                    </Text>
                  </View>
                )}
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default Acceleration;
