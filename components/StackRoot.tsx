/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import UserListScreen from './UserListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWapper from './ProductListScreen';
import CardItemScreen from './CardItemScreen';
import AddToCardScreen from './CardItemScreen';

export type stackScreens = {
  ProductWapper: undefined;
  UserListScreen: undefined;
  CardItemScreen: undefined;
  AddToCardScreen: undefined;
};
const Stack = createNativeStackNavigator<stackScreens>();
const StackRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="ProductWapper"
          component={ProductWapper}
          options={{headerShown: false}}
        />
        <Stack.Screen name="CardItemScreen" component={CardItemScreen} />
        <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{
            title: 'User List',
          }}
        />
        <Stack.Screen
          name="AddToCardScreen"
          component={AddToCardScreen}
          options={{title: 'Card Item'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoot;
