/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../components/home';
import Profile from '../components/profile';
import Library from '../components/library';
import DPS from '../components/dpscreen';
import Search from '../components/search';
import Appsettings from '../components/appsettings'
import EditDP from '../components/editdp'



function profileStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { height: 45, backgroundColor: 'lightblue', elevation: 0 }, headerTitleAlign: 'center', headerTransparent: true }} >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyAccount" component={DPS} />
      <Stack.Screen name="Appsettings" component={Appsettings} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditDP" component={EditDP} />
    </ Stack.Navigator>
  )

}

export default function MyTabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      inactiveColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'black' }}
    // 3b3c36
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'My Music',


        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search', */}
      {/* // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ), */}
      {/* }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={profileStack}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
      />


    </Tab.Navigator>
  );
}
