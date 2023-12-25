import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/routes/BottomNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <BottomNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
