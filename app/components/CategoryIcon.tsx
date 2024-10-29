import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UnitConverter from './unit-converter/UnitConverter';
import { useRouter } from 'expo-router';

type CategoryIconProps = {
  name: string;
  icon: string;
};

export default function CategoryIcon({ name, icon }: CategoryIconProps) {
  const router = useRouter();

  const handlePress = () => {
    const formattedCategory = name.charAt(0).toLowerCase() + name.slice(1);
    router.push({
      pathname: '/converter',
      params: { category: formattedCategory }
    });
  };

  return (
    <TouchableOpacity style={{ width: 96 }} onPress={handlePress}>
      <View className={`w-20 h-20 rounded-full justify-center items-center bg-background-tertiary border border-border-light`}>
        <Text className="text-text-primary text-2xl font-bold">{icon}</Text>
      </View>
      <Text className="text-center mt-2">{name}</Text>
    </TouchableOpacity>
  );
}
