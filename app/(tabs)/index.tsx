import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import SearchHeader from '../components/SearchHeader';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <SearchHeader
              onSearch={(text) => {
                // Add home-specific search logic here
                console.log(`Searching home for ${text}`);
              }}
              placeholder="Search categories..."
            />
          ),
        }}
      />
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold mb-4">Unit Converter</Text>
        <Link href="/categories/Acceleration" asChild>
          <TouchableOpacity className="bg-blue-500 p-2 rounded">
            <Text className="text-white">Go to Acceleration</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
