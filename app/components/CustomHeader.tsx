import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

type CustomHeaderProps = {
  screenName: string;
  onSearch: (text: string, screenName: string) => void;
  placeholder?: string;
  showBackButton?: boolean;
  showSettingsButton?: boolean;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({
  screenName,
  onSearch,
  placeholder = "Search...",
  showBackButton = true,
  showSettingsButton = true,
}) => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="bg-white">
    <View className="flex-row items-center bg-blue-500 p-2">
      {showBackButton && (
        <TouchableOpacity onPress={() => router.back()} className="mr-2">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <TextInput
        className="flex-1 bg-gray-100 p-2 rounded-full"
        placeholder={placeholder}
        onChangeText={(text) => onSearch(text, screenName)}
      />
      {showSettingsButton && (
        <TouchableOpacity onPress={() => router.push('/settings')} className="ml-2">
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
