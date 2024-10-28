import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import CategoryIcon from './components/CategoryIcon';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-2xl font-bold mb-4">Unit Converter</Text>
        <View className="flex-row flex-wrap justify-around">
          <CategoryIcon name="Acceleration" icon="🚀" />
          <CategoryIcon name="Area" icon="📏" />
          <CategoryIcon name="Energy" icon="⚡" />
          <CategoryIcon name="Length" icon="📏" />
          {/* Add more CategoryIcons as needed */}
        </View>
      </ScrollView>
    </>
  );
}
