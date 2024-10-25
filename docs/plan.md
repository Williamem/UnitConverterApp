# Unit Converter App Design Plan

## App Description

The Unit Converter App is a comprehensive, user-friendly mobile application developed using React Native and Expo. It offers a seamless experience for converting between various units of measurement across multiple categories, catering to both casual users and professionals who need quick and accurate conversions.

## Visual Design and User Interface

### Home Screen
- The home screen features a grid layout with large, visually appealing icons representing different conversion categories (e.g., Length, Volume, Temperature).
- Each category icon is designed with a distinct color and recognizable symbol, making it easy for users to quickly identify their desired conversion type.
- The layout is responsive, adjusting to different screen sizes while maintaining an aesthetically pleasing arrangement.
- At the top of the home screen, users can choose from display options:
  1. Show All Categories
  2. Show Common Categories
  3. Show Favorites
  4. My Custom Set (editable in settings)
- These options are presented as toggleable buttons or checkboxes, allowing users to quickly filter the displayed categories.

### Top Navigation Bar
- A persistent top navigation bar is present across all screens, providing consistent navigation and functionality.
- From left to right, the navigation bar includes:
  1. A home/back button (context-dependent)
  2. A prominent search bar for quick unit lookups
  3. A settings icon for accessing app preferences

### Category Screens
- Upon selecting a category, users are presented with a conversion interface specific to that category.
- The conversion screen includes:
  - A list of all input/output fields for entering values, with user's favorite units displayed at the top
  - A visually clear display of the conversion result, when writing in an input field all other inputs immediately display the result 
  - A dropdown or expandable section allowing users to customize which units are displayed:
    * Show All Units
    * Show Common Units
    * Show Favorites
    * Custom Set (editable in settings)
  - By default, if no choice is made, favorite units are shown at the top followed by common units

### Search Functionality
- The search bar in the top navigation allows users to search for specific units across all categories.
- Search results are displayed in a clean, scrollable list, grouped by category for easy navigation.
- When within a specific category, the search is contextual, showing only relevant units for that category.

### Settings Screen
- In the settings, users can:
  - Customize their "My Custom Set" of categories for the home screen
  - Define which units to include in their custom set for each category
  - Manage their favorite units across all categories
  - Set default display preferences for both the home screen and category screens

## Key Features

### Offline Functionality
- All basic conversions are available offline, ensuring the app's utility without an internet connection.
- The app stores conversion formulas locally, allowing for quick and efficient calculations.

### User Preferences and Favorites
- Users can mark frequently used units as favorites, which then appear at the top of unit selection lists.
- The app remembers recent conversions and user preferences, stored locally on the device.
- No user registration or login required, maintaining simplicity and privacy.

### Ad Integration and Premium Version
- The free version includes strategically placed ads as a bottom banner that don't interfere with the core functionality.
- A one-time purchase option is available to unlock an ad-free experience.
- The premium version is identical in functionality but provides an uninterrupted, ad-free interface.

### Extensibility
- While initially focusing on standard units (length, volume, temperature, etc.), the app's architecture is designed to easily incorporate future categories.
- Placeholder for potential future additions like currency conversion and precious metal prices, requiring external API integration.

## User Experience

- The app prioritizes speed and ease of use, with most conversions achievable in just a few taps.
- Intuitive gestures are incorporated for actions like switching between input fields or changing units.
- Smooth animations are used to enhance the feel of interactivity and provide visual feedback.
- The interface is designed to be accessible, with considerations for color contrast and text readability.

## Technical Considerations

- Local storage (e.g., AsyncStorage) is utilized for saving user preferences and favorites.
- The app is optimized for performance, ensuring quick load times and responsive interactions.
- Future updates are considered in the design, allowing for easy addition of new features or unit categories.

## Design and Development Plan

### 1. Project Setup and Configuration

1. Initialize the Expo project
2. Set up the development environment
3. Configure necessary dependencies

### 2. App Structure and Navigation

1. Implement React Navigation for routing
2. Create the main screen layout with top navigation bar
3. Design and implement the home screen with category icons
4. Create individual category screens

### 3. Data Management

1. Define the data structure for units and conversions
2. Implement a local database or storage solution (e.g., AsyncStorage)
3. Create utility functions for unit conversions

### 4. User Interface Components

1. Design and implement the top navigation bar
   - Settings icon
   - Search bar
   - Home/Back button
2. Create reusable components for:
   - Category icons
   - Unit selection fields
   - Input fields for conversion
   - Results display

### 5. Search Functionality

1. Implement search logic for units across all categories
2. Create a search results display component
3. Optimize search for performance

### 6. User Preferences and Favorites

1. Implement settings screen
2. Create functionality to save and retrieve user preferences
3. Add ability to favorite units and display them at the top of category lists

### 7. Ads Integration

1. Research and choose an ad provider (e.g., Google AdMob)
2. Implement ad components for the free version
3. Create a mechanism to disable ads for the paid version

### 8. In-App Purchase

1. Implement in-app purchase functionality for the ad-free version
2. Create a purchase flow and confirmation process
3. Implement logic to unlock the ad-free version after purchase

### 9. Styling and Theming

1. Design a cohesive color scheme and typography
2. Implement responsive layouts for various screen sizes
3. Consider implementing a dark mode option

### 10. Testing and Quality Assurance

1. Implement unit tests for conversion logic
2. Perform thorough UI testing on various devices
3. Conduct user testing and gather feedback

### 11. Performance Optimization

1. Optimize app loading times
2. Implement efficient rendering techniques for large lists
3. Minimize unnecessary re-renders

### 12. Documentation and Preparation for Launch

1. Create user documentation and help screens
2. Prepare app store listings and screenshots
3. Plan for future updates and feature additions

## Likely Needed Dependencies
Thank you for the updates. I've noted the changes you've made to the Category Screens section and the clarification about the keypad and ad placement. Let's address your questions about dependencies and routing.

For the dependencies, based on the requirements of your app, here's a list of likely dependencies you'll need:

1. `react-native`: The core framework for building the app
2. `expo`: For using Expo's development tools and services
3. `@react-navigation/native` and `@react-navigation/stack`: For implementing navigation in your app
4. `@react-native-async-storage/async-storage`: For local storage of user preferences and favorites
5. `react-native-vector-icons`: For using icons in your app
6. `react-native-admob` or `react-native-google-mobile-ads`: For implementing AdMob ads
7. `react-native-iap`: For implementing in-app purchases

### Information About the Dependencies and Examples
Certainly! I'll provide more details about each of these dependencies, their specific uses, and how to implement them in your project.

1. `react-native`:
React Native is the core framework for building cross-platform mobile applications using JavaScript and React. It allows you to create native mobile apps using a single codebase.

Usage: You'll use React Native components and APIs throughout your app.

Example:
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={styles.container}>
    <Text>Hello, React Native!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
```

2. `expo`:
Expo is a set of tools and services built around React Native, making it easier to develop, build, and deploy React Native apps.

Usage: You'll use Expo CLI for project management and access various Expo SDK features.

Example:
```javascript
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  // Camera usage code here
};
```

3. `@react-navigation/native` and `@react-navigation/stack`:
React Navigation is a popular navigation library for React Native apps. It provides a way to transition between screens and manage navigation history.

Usage: You'll use these to set up the navigation structure of your app.

Example:
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

4. `@react-native-async-storage/async-storage`:
AsyncStorage is a simple, asynchronous, persistent, key-value storage system that is global to the app.

Usage: You'll use this to store and retrieve user preferences and favorites.

Example:
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Retrieving data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error reading data', e);
  }
};
```

5. `react-native-vector-icons`:
This library provides customizable icons for React Native with support for NavBar/TabBar, image source, and full styling.

Usage: You'll use this to add icons to your app's UI.

Example:
```javascript
import Icon from 'react-native-vector-icons/FontAwesome';

const MyIcon = () => (
  <Icon name="rocket" size={30} color="#900" />
);
```

6. `react-native-admob` or `react-native-google-mobile-ads`:
These libraries allow you to integrate Google AdMob ads into your React Native app.

Usage: You'll use this to display banner ads at the bottom of your app screens.

Example (using react-native-google-mobile-ads):
```javascript
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'YOUR_BANNER_AD_UNIT_ID';

const BannerAdComponent = () => (
  <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
);
```

7. `react-native-iap`:
This library provides in-app purchase functionality for React Native apps on both iOS and Android platforms.

Usage: You'll use this to implement the one-time purchase for the ad-free version of your app.

Example:
```javascript
import * as RNIap from 'react-native-iap';

const purchaseAdFree = async () => {
  try {
    const products = await RNIap.getProducts(['ad_free_version']);
    if (products.length > 0) {
      const purchase = await RNIap.requestPurchase(products[0].productId);
      // Handle successful purchase
    }
  } catch (err) {
    console.warn(err.code, err.message);
  }
};
```

To implement routing in a React Native project, you'll typically use React Navigation. Here's a basic setup:

1. First, install the necessary packages:

```bash
npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
```

2. In your `App.js` file, set up the navigation container:

```javascript:App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

3. In your screen components, you can use navigation like this:

```javascript:screens/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Length Category"
        onPress={() => navigation.navigate('Category', { category: 'Length' })}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default HomeScreen;
```

This setup provides a basic structure for navigation in your app. You can customize it further by adding more screens, implementing tab navigation for categories, or using drawer navigation for settings.

For the ad banner at the bottom of the screen, you can create a component that wraps the AdMob banner and include it in your layout. Here's a basic example:

```javascript:components/AdBanner.js
import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

function AdBanner() {
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <AdMobBanner
        adSize="smartBannerPortrait"
        adUnitID="your-ad-unit-id"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
}

export default AdBanner;
```

You can then include this `AdBanner` component in your main layout or individual screens as needed.

Remember to handle the case where a user has purchased the ad-free version, in which case you would not render the AdBanner component.
