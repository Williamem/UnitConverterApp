import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-background-primary">
      <View className="p-4">
        <Text className="text-2xl font-bold text-text-primary mb-4">Settings</Text>
        
        {/* Placeholder sections */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-text-primary mb-2">Theme</Text>
          <View className="bg-background-secondary p-4 rounded-lg">
            <Text className="text-text-secondary">Theme settings coming soon</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold text-text-primary mb-2">Default Units</Text>
          <View className="bg-background-secondary p-4 rounded-lg">
            <Text className="text-text-secondary">Default unit preferences coming soon</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold text-text-primary mb-2">About</Text>
          <View className="bg-background-secondary p-4 rounded-lg">
            <Text className="text-text-secondary">Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
