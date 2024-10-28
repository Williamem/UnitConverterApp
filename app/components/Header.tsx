import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  screenName: string;
  onSearch: (text: string) => void;
  placeholder?: string;
  showBackButton: boolean;
};

const Header: React.FC<HeaderProps> = ({
  screenName,
  onSearch,
  placeholder = "Search...",
  showBackButton,
}) => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="bg-background-primary">
      <View className="flex-row items-center bg-background-tertiary p-2">
        {showBackButton && (
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <Text>
              <Ionicons name="arrow-back" size={24} color="#475569" />
            </Text>
          </TouchableOpacity>
        )}
        <TextInput
          className="flex-1 bg-background-secondary p-2 rounded-full border border-border-light"
          placeholder={placeholder}
          placeholderTextColor="#94a3b8"
          onChangeText={(text) => onSearch(text)}
        />
        <TouchableOpacity
          onPress={() => router.push("/settings")}
          className="ml-2"
        >
          <Text>
            <Ionicons name="settings-outline" size={24} color="#475569" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
