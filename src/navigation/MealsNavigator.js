import React from 'react';
import {Platform, Text} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import Colors from '../utils/color';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen',
};

const FavNavigator = createStackNavigator({
  defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: FavNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
    },
  },
});

export default createAppContainer(MainNavigator);
