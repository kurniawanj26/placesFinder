import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
