import { Stack } from 'expo-router';
import CustomHeader from './components/CustomHeader';
import './types'; // Import the types extension

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        header: () => (
          <CustomHeader
            screenName={route.name}
            onSearch={(text: string, screenName: string) => 
              console.log(`Searching for ${text} in ${screenName}`)
            }
            placeholder={`Search in ${route.name}...`}
            showBackButton={true}
            showSettingsButton={true}
          />
        ),
      })}
    />
  );
}
