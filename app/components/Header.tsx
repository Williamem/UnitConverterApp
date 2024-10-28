import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  screenName: string;
  onSearch?: (text: string) => void;
  placeholder?: string;
  showBackButton: boolean;
  showSearch?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  screenName,
  onSearch,
  placeholder = "Search...",
  showBackButton,
  showSearch = false,
}) => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="bg-background-primary shadow-sm">
      <View className="flex-row items-center justify-between bg-background-primary px-4 py-3">
        <View className="w-10 h-10 justify-center">
          {showBackButton ? (
            <TouchableOpacity 
              onPress={() => router.back()} 
              className="p-2 active:bg-background-tertiary rounded-full"
            >
              <Text>
                <Ionicons name="arrow-back" size={24} color="#475569" />
              </Text>
            </TouchableOpacity>
          ) : (
            <Text>
              <Ionicons name="logo-github" size={24} color="#475569" />
            </Text>
          )}
        </View>
        
        {showSearch ? (
          <TextInput
            className="flex-1 mx-3 bg-background-secondary px-4 py-2 rounded-full border border-border-light focus:border-ui-primary"
            placeholder={placeholder}
            placeholderTextColor="#94a3b8"
            onChangeText={(text) => onSearch?.(text)}
          />
        ) : (
          <Text className="flex-1 mx-3 text-lg font-semibold text-text-primary">
            {screenName}
          </Text>
        )}

        <TouchableOpacity
          onPress={() => router.push("/settings")}
          className="p-2 active:bg-background-tertiary rounded-full"
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
