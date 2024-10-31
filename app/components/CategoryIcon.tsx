import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UnitConverter from "./unit-converter/UnitConverter";
import { useRouter } from "expo-router";

type CategoryIconProps = {
  name: string;
  icon: string;
};

export default function CategoryIcon({ name, icon }: CategoryIconProps) {
  const router = useRouter();

  const handlePress = () => {
    const formattedCategory = name.charAt(0).toLowerCase() + name.slice(1);
    router.push({
      pathname: "/converter",
      params: { category: formattedCategory },
    });
  };
  const displayText = name
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <TouchableOpacity 
      style={{ 
        width: 100,
        aspectRatio: 1  // Keeps it square
      }} 
      onPress={handlePress}
    >
      <View className="flex-1 flex flex-col items-center justify-center bg-background-secondary border border-border-light/20 rounded-xl p-2 shadow-lg">
        <View className="flex-1 justify-center items-center w-full">
          <Text className="text-text-primary text-2xl font-bold">{icon}</Text>
        </View>
        <Text className="text-center text-text-secondary text-sm" numberOfLines={2}>{displayText}</Text>
      </View>
    </TouchableOpacity>
  );
}
