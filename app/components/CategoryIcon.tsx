import React from 'react';
import { View, Text } from 'react-native';

type CategoryIconProps = {
  name: string;
  color: string;
};

export default function CategoryIcon({ name, color }: CategoryIconProps) {
  return (
    <View className={`w-20 h-20 rounded-full justify-center items-center`} style={{ backgroundColor: color }}>
      <Text className="text-white text-2xl font-bold">{name[0]}</Text>
    </View>
  );
}

