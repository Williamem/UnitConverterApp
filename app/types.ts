import '@react-navigation/native';

declare module '@react-navigation/native' {
  export interface NativeStackNavigationOptions {
    headerSearchHandler?: (text: string) => void;
    headerPlaceholder?: string;
    headerShowBackButton?: boolean;
    headerShowSettingsButton?: boolean;
  }
}
