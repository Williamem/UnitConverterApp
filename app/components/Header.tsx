import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Pressable } from "react-native";
import { useRouter, usePathname, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import { Modal } from "react-native";
import { unitDefinitions } from '../constants/units/types';

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
  const pathname = usePathname();
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Check if we're on a converter screen and get the unit data
  const isConverterScreen = pathname.startsWith('/converter');
  
  // Convert the screenName to camelCase for unit lookup
  const camelCaseCategory = screenName.charAt(0).toLowerCase() + screenName.slice(1);
  const unitData = unitDefinitions[camelCaseCategory as keyof typeof unitDefinitions];
  const shouldShowInfo = isConverterScreen && unitData;

  // Format the screen name for display
  const formattedScreenName = screenName === '(tabs)' ? 'Home' : 
    screenName.replace(/([A-Z])/g, ' $1').trim();

  return (
    <SafeAreaView edges={["top"]} className="bg-background-primary shadow-sm">
      <View className="flex-row items-center justify-between bg-background-secondary px-4 py-3">
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
            className="flex-1 mx-3 bg-background-primary px-4 py-2 rounded-full border border-border-light focus:border-ui-primary"
            placeholder={placeholder}
            placeholderTextColor="#94a3b8"
            onChangeText={(text) => onSearch?.(text)}
          />
        ) : (
          <View className="flex-1 mx-3 flex-row items-center">
            <Text className="text-lg font-semibold text-text-primary">
              {formattedScreenName}
            </Text>
            {shouldShowInfo && (
              <TouchableOpacity
                onPress={() => setShowInfoModal(true)}
                className="ml-2"
              >
                <Ionicons name="information-circle-outline" size={20} color="#475569" />
              </TouchableOpacity>
            )}
          </View>
        )}

        <Link href="/settings" asChild>
          <TouchableOpacity
            className="p-2 active:bg-background-tertiary rounded-full"
          >
            <Text>
              <Ionicons name="settings-outline" size={24} color="#475569" />
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      {showInfoModal && unitData && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showInfoModal}
          onRequestClose={() => setShowInfoModal(false)}
        >
          <Pressable 
            className="flex-1 bg-black/50"
            onPress={() => setShowInfoModal(false)}
          >
            <Pressable 
              className="m-4 mt-20 bg-background-primary rounded-xl p-6 shadow-xl"
              onPress={e => e.stopPropagation()}
            >
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-bold">{formattedScreenName}</Text>
                <TouchableOpacity
                  onPress={() => setShowInfoModal(false)}
                  className="p-2 rounded-full active:bg-background-tertiary"
                >
                  <Ionicons name="close" size={24} color="#475569" />
                </TouchableOpacity>
              </View>

              <Text className="text-text-primary mb-4">
                {unitData.description}
              </Text>

              {unitData.categoryAlert && (
                <View className="bg-yellow-50 p-4 rounded-lg">
                  <Text className="text-yellow-800">
                    ⚠️ {unitData.categoryAlert}
                  </Text>
                </View>
              )}
            </Pressable>
          </Pressable>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Header;
