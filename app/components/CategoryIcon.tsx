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
    <TouchableOpacity style={{ width: 96, height: 96 }} onPress={handlePress}>
      <View className="flex flex-col items-center bg-background-tertiary border border-border-light rounded-xl">
        <View className={`w-20 h-20 justify-center items-center`}>
          <Text className="text-text-primary text-2xl font-bold">{icon}</Text>
        </View>
        <Text className="text-center mb-1">{displayText}</Text>
      </View>
    </TouchableOpacity>
  );
}
