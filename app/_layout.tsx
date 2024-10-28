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
            
            // Clean up the route name by removing the directory path
            const screenName = route.name.includes('/') 
              ? route.name.split('/').pop() 
              : route.name === '(tabs)' 
                ? 'Home' 
                : route.name;
            
            return (
              <Header
                screenName={screenName || 'Home'}
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
