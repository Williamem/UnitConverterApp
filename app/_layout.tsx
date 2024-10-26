import { Stack } from 'expo-router';
import SearchHeader from './components/SearchHeader';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ route }) => (
          <SearchHeader
            onSearch={(text) => {
              // You can add global search logic here
              console.log(`Searching for ${text} in ${route.name}`);
            }}
            placeholder={`Search in ${route.name}...`}
          />
        ),
      }}
    />
  );
}
