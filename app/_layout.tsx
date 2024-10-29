import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import './types'; // Import the types extension
import Header from './components/Header';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={({ route }) => ({
          header: ({ navigation }) => {
            const isHomeScreen = route.name === '(tabs)' || route.name === 'index';
            
            // Get the screen name and handle the converter route specially
            let screenName = route.name;
            if (route.name === 'converter') {
              // Add type safety for params
              const params = route.params as { category: string } | undefined;
              if (params?.category) {
                // Convert first letter to uppercase for display
                screenName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
              }
            } else {
              // Clean up other route names
              screenName = route.name.includes('/') 
                ? route.name.split('/').pop() || route.name // Provide fallback if pop returns undefined
                : route.name === '(tabs)' 
                  ? 'Home' 
                  : route.name;
            }
            
            return (
              <Header
                screenName={screenName}
                onSearch={isHomeScreen ? (text: string) => 
                  console.log(`Searching for ${text} in ${route.name}`)
                  : undefined}
                placeholder={isHomeScreen ? 'Search...' : undefined}
                showBackButton={navigation.canGoBack()}
                showSearch={isHomeScreen}
              />
            );
          },
        })}
      />
    </SafeAreaProvider>
  );
}
