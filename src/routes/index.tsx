/* eslint-disable react/no-unstable-nested-components */
import FeatherIcons from '@expo/vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Trade from '../screens/Trade';

import Portfolio from '../screens/Portfolio';
import {RFValue} from 'react-native-responsive-fontsize';
import Fund from '../screens/Fund';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#770FDF',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {height: RFValue(70)},
        tabBarLabelStyle: {fontFamily: 'Sora-Bold', marginBottom: RFValue(10)},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="home"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="trending-up"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="briefcase"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        headerTitleStyle: {fontFamily: 'Sora-Regular'},
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Register',
        }}
      />

      <Stack.Screen
        name="Fund"
        component={Fund}
        options={{
          headerTitle: 'Generic Fund',
        }}
      />

      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
