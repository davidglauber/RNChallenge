/* eslint-disable react/no-unstable-nested-components */
import FeatherIcons from '@expo/vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Trade from '../screens/Trade';

import Portfolio from '../screens/Portfolio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#770FDF',
        inactiveTintColor: '#000000',
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
          tabBarLabelStyle: {fontFamily: 'Sora-Bold'},
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
          tabBarLabelStyle: {fontFamily: 'Sora-Bold'},
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
          tabBarLabelStyle: {fontFamily: 'Sora-Bold'},
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  // <Stack.Screen
  //       name="Home"
  //       component={Home}
  //       options={{
  //         headerShown: false,
  //       }}
  //     />
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
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
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
