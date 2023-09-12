import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {theme} from './src/utils/theme';
import {hideVirtualizedListWarning} from './src/utils/HideVirtualizedListWarning';

function App(): JSX.Element {
  hideVirtualizedListWarning();

  const [fontsLoaded] = useFonts({
    'Sora-Bold': require('./assets/fonts/Sora-Bold.ttf'),
    'Sora-ExtraBold': require('./assets/fonts/Sora-ExtraBold.ttf'),
    'Sora-ExtraLight': require('./assets/fonts/Sora-ExtraLight.ttf'),
    'Sora-Light': require('./assets/fonts/Sora-Light.ttf'),
    'Sora-Medium': require('./assets/fonts/Sora-Medium.ttf'),
    'Sora-Regular': require('./assets/fonts/Sora-Regular.ttf'),
    'Sora-SemiBold': require('./assets/fonts/Sora-SemiBold.ttf'),
    'Sora-Thin': require('./assets/fonts/Sora-Thin.ttf'),
    'Sitara-Bold': require('./assets/fonts/Sitara-Bold.ttf'),
    'Sitara-BoldItalic': require('./assets/fonts/Sitara-BoldItalic.ttf'),
    'Sitara-Italic': require('./assets/fonts/Sitara-Italic.ttf'),
    'Sitara-Regular': require('./assets/fonts/Sitara-Regular.ttf'),
    'Sintony-Regular': require('./assets/fonts/Sintony-Regular.ttf'),
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : theme.colors.white,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>{fontsLoaded && <Routes />}</PaperProvider>
      </NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </Provider>
  );
}

export default App;
