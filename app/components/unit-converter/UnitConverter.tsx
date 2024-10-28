import React, { useEffect, useState, useMemo } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useConversion } from '../../hooks/useConversion';
import type { CategoryDefinition, UnitCategory } from '../../constants/units/types';
import * as unitDefinitions from '../../constants/units/';
import { getUniqueUnits } from './utils';
import { LinearGradient } from 'expo-linear-gradient';

interface UnitConverterProps {
  unitCategory: UnitCategory;
}

const UnitConverter: React.FC<UnitConverterProps> = ({ unitCategory }) => {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['all']));
  const [values, setValues] = useState<Record<string, string>>({});
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const unitData = unitDefinitions[unitCategory];
  const displayUnits = useMemo(() => 
    getUniqueUnits(Array.from(selectedCategories), unitData.categories),
    [selectedCategories, unitData.categories]
  );
  const { convert } = useConversion();

  useEffect(() => {
    const initialValues: Record<string, string> = {};
    displayUnits.forEach(unit => {
      initialValues[unit] = '';
    });
    setValues(initialValues);
  }, []);

  const handleInputChange = (unit: string, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const newValues: Record<string, string> = {};
      displayUnits.forEach(otherUnit => {
        if (otherUnit === unit) {
          newValues[otherUnit] = value;
        } else {
          const convertedValue = convert(
            unitCategory,
            numValue,
            unit as keyof typeof unitData.conversions,
            otherUnit as keyof typeof unitData.conversions
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
        <View className="flex-row flex-wrap mb-4">
          <TouchableOpacity
            key="all"
            className={`mr-2 mb-2 p-2 rounded ${
              selectedCategories.has('all') ? 'bg-blue-500' : 'bg-gray-200'
            }`}
            onPress={() => {
              if (selectedCategories.has('all')) {
                setSelectedCategories(new Set());
              } else {
                setSelectedCategories(new Set(['all']));
              }
            }}
          >
            <Text className={selectedCategories.has('all') ? 'text-white' : 'text-black'}>
              All
            </Text>
          </TouchableOpacity>

          {Object.keys(unitData.categories).map(category => (
            <TouchableOpacity
              key={category}
              className={`mr-2 mb-2 p-2 rounded ${
                selectedCategories.has(category) ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onPress={() => {
                setSelectedCategories(prev => {
                  const newSelection = new Set(prev);
                  if (prev.has(category)) {
                    newSelection.delete(category);
                  } else {
                    newSelection.add(category);
                    newSelection.delete('all');
                  }
                  return newSelection;
                });
              }}
            >
              <Text className={selectedCategories.has(category) ? 'text-white' : 'text-black'}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            key="myUnits"
            className={`mr-2 mb-2 p-2 rounded ${
              selectedCategories.has('myUnits') ? 'bg-blue-500' : 'bg-gray-200'
            }`}
            onPress={() => {
              setSelectedCategories(prev => {
                const newSelection = new Set(prev);
                if (prev.has('myUnits')) {
                  newSelection.delete('myUnits');
                } else {
                  newSelection.add('myUnits');
                  newSelection.delete('all');
                }
                return newSelection;
              });
            }}
          >
            <Text className={selectedCategories.has('myUnits') ? 'text-white' : 'text-black'}>
              My Units
            </Text>
          </TouchableOpacity>
        </View>

        {unitData.categoryAlert && showInfo && (
          <View className="mb-4 relative">
            <View className={`bg-background-secondary rounded-lg ${!showFullInfo ? 'max-h-24' : 'pb-12'}`}>
              <Text className="p-4 pr-12 text-text-primary">
                {unitData.categoryAlert}
              </Text>
              <View className="absolute bottom-0 left-0 right-0">
                {!showFullInfo ? (
                  <View className="h-12">
                    <LinearGradient
                      colors={['rgba(243,244,246,0)', 'rgb(243,244,246)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: .5 }}
                      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    />
                    <TouchableOpacity
                      onPress={() => setShowFullInfo(true)}
                      className="absolute bottom-2 left-2"
                    >
                      <Text className="text-blue-500 text-sm">
                        Show more
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() => setShowFullInfo(false)}
                    className="absolute bottom-2 left-2"
                  >
                    <Text className="text-blue-500 text-sm">
                      Show less
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setShowInfo(false)}
              className="absolute top-2 right-2 p-2"
            >
              <Ionicons name="close" size={20} color="#475569" />
            </TouchableOpacity>
          </View>
        )}

        {displayUnits.map(unit => (
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
                    {unitData.units[unit].needsAsterisk && (
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
                    {unitData.units[selectedUnit].abbreviations.join(', ')}
                  </Text>
                </View>

                <View className="mb-4">
                  <Text className="text-sm text-text-secondary mb-1">Description</Text>
                  <Text className="text-text-primary">
                    {unitData.units[selectedUnit].description}
                  </Text>
                </View>

                {unitData.units[selectedUnit].needsAsterisk && (
                  <View className="mb-4">
                    <Text className="text-sm text-text-secondary mb-1">Special Consideration</Text>
                    <Text className="text-accent-red">
                      {unitData.units[selectedUnit].asteriskReason}
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

export default UnitConverter;
