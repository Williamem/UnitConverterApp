import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type CategoryIconProps = {
  name: string;
  icon: string;
};

export default function CategoryIcon({ name, icon }: CategoryIconProps) {
  return (
    <Link href={`../categories/${name}`} asChild>
      <TouchableOpacity style={{ width: 96 }}>
        <View className={`w-20 h-20 rounded-full justify-center items-center bg-background-tertiary border border-border-light`}>
          <Text className="text-text-primary text-2xl font-bold">{icon}</Text>
        </View>
        <Text className="text-center mt-2">{name}</Text>
      </TouchableOpacity>
    </Link>
  );
}
