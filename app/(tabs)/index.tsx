import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useCustomHeader } from '../hooks/useCustomHeader';

export default function HomeScreen() {
  const { setHeaderOptions } = useCustomHeader();

  useEffect(() => {
    setHeaderOptions({
      headerSearchHandler: (text: string) => {
        // Add home-specific search logic here
        console.log(`Searching home for ${text}`);
      },
      headerPlaceholder: "Search categories...",
      headerShowBackButton: false, // Hide back button on home screen
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold mb-4">Unit Converter</Text>
      <Link href="/categories/Acceleration" asChild>
        <TouchableOpacity className="bg-blue-500 p-2 rounded">
          <Text className="text-white">Go to Acceleration</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
