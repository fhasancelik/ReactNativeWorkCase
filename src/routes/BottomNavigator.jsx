import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket, Home} from '../assets/icons';
import MainStack from './MainStack';
import {colors} from '../constants/colors';
import CartScreen from '../screens/CartScreen';
import { useSelector } from 'react-redux';

const BottomNavigator = () => {
  const TabNavigator = createBottomTabNavigator();
  const {items}=useSelector((state)=>state.cart)
  console.log(items.length)
  return (
    <TabNavigator.Navigator

    screenOptions={{
      headerShown:false
    }}
    >
      <TabNavigator.Screen
        options={{
          tabBarIcon: () => <Home />,
          headerStyle: {
            backgroundColor: colors.primary,
          },
      
        }}
        name="HomeScreen"
        component={MainStack}
      />
      <TabNavigator.Screen
        options={{
          tabBarIcon: () => <Basket />,
          tabBarBadge:items.length
        }}
        name="CartScreen"
        component={CartScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomNavigator;
