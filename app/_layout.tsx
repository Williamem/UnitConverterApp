import { Stack } from 'expo-router';
import CustomHeader from './components/CustomHeader';
import './types'; // Import the types extension

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        header: ({ options }) => {
          // Default search function, can be overridden in individual screens
          const onSearch = (text: string) => {
            console.log(`Searching for ${text} in ${route.name}`);
          };

          return (
            <CustomHeader
              onSearch={(options as any).headerSearchHandler || onSearch}
              placeholder={(options as any).headerPlaceholder || `Search in ${route.name}...`}
              showBackButton={(options as any).headerShowBackButton !== false}
              showSettingsButton={(options as any).headerShowSettingsButton !== false}
            />
          );
        },
      })}
    />
  );
}
