import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import UnitConverter from './components/unit-converter/UnitConverter';
import { UnitCategory } from './constants/units/types';

export default function ConverterScreen() {
  const { category } = useLocalSearchParams<{ category: UnitCategory }>();

  return (
    <UnitConverter
      unitCategory={category}
    />
  );
} 