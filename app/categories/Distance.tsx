/* import React from 'react';
import { View, Text } from 'react-native';
import { ConversionInput, UnitSelector } from '../components/units';
import { useConversion } from '../hooks/useConversion';
import { unitDefinitions } from '../constants/unitDefinitions';

const Distance: React.FC = () => {
  const { fromValue, setFromValue, toValue, fromUnit, setFromUnit, toUnit, setToUnit } = useConversion('distance', 'meter', 'kilometer');

  return (
    <View>
      <Text className="text-xl font-bold mb-4">Distance Conversion</Text>
      <ConversionInput
        value={fromValue}
        onChangeText={setFromValue}
        unit={fromUnit}
      />
      <UnitSelector
        categories={unitDefinitions.distance.categories}
        selectedUnit={fromUnit}
        onUnitChange={setFromUnit}
      />
      <ConversionInput
        value={toValue}
        onChangeText={() => {}}
        unit={toUnit}
        editable={false}
      />
      <UnitSelector
        categories={unitDefinitions.distance.categories}
        selectedUnit={toUnit}
        onUnitChange={setToUnit}
      />
    </View>
  );
};

export default Distance; */

