import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListProductScreen from '../screens/ListProductScreen';
import DetailProductScreen from '../screens/DetailProductScreen';
const MainStack = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name="ListProductScreen"
        component={ListProductScreen}
      />
      <MainStack.Screen
        name="DetailProductScreen"
        component={DetailProductScreen}
      />
    </MainStack.Navigator>
  );
};
export default MainStack;

