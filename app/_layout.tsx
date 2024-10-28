import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import CustomHeader from './components/CustomHeader';
import './types'; // Import the types extension

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={({ route }) => ({
          header: ({ navigation }) => (
            <CustomHeader
              screenName={route.name}
              onSearch={(text: string) => 
                console.log(`Searching for ${text} in ${route.name}`)
              }
              placeholder={`Search in ${route.name}...`}
              showBackButton={navigation.canGoBack()}
              showSettingsButton={true}
            />
          ),
        })}
      />
    </SafeAreaProvider>
  );
}
