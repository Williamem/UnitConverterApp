import { useNavigation } from 'expo-router';

type CustomHeaderOptions = {
  headerSearchHandler?: (text: string) => void;
  headerPlaceholder?: string;
  headerShowBackButton?: boolean;
  headerShowSettingsButton?: boolean;
};

export const useCustomHeader = () => {
  const navigation = useNavigation();

  const setHeaderOptions = (options: CustomHeaderOptions) => {
    navigation.setOptions(options as any);
  };

  return { setHeaderOptions };
};
