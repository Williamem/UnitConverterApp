import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import CategoryIcon from './components/CategoryIcon';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <ScrollView className="flex-1 bg-white">
        <Text className="text-2xl font-bold mb-4 px-4 pt-4">Unit Converter</Text>
        <View className="flex-row flex-wrap gap-6 p-4 justify-center">
          <CategoryIcon name="Acceleration" icon="🚀" />
          <CategoryIcon name="Angle" icon="📐" />
          <CategoryIcon name="Area" icon="⬜" />
          <CategoryIcon name="DataStorage" icon="💾" />
          <CategoryIcon name="DataTransferRate" icon="📡" />
          <CategoryIcon name="Density" icon="🎯" />
          <CategoryIcon name="DigitalResolution" icon="🖥️" />
          <CategoryIcon name="Distance" icon="📏" />
          <CategoryIcon name="Energy" icon="⚡" />
          <CategoryIcon name="Frequency" icon="〰️" />
          <CategoryIcon name="FuelEconomy" icon="⛽" />
          <CategoryIcon name="Power" icon="💪" />
          <CategoryIcon name="Pressure" icon="🌡️" />
          <CategoryIcon name="Radiation" icon="☢️" />
          <CategoryIcon name="Temperature" icon="🌡️" />
          <CategoryIcon name="Time" icon="⏰" />
          <CategoryIcon name="Torque" icon="🔧" />
          <CategoryIcon name="Velocity" icon="🏃" />
          <CategoryIcon name="Volume" icon="🧊" />
          <CategoryIcon name="Weight" icon="⚖️" />
        </View>
      </ScrollView>
    </>
  );
}
