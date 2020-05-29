/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
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
  );

}

export default function MyTabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      inactiveColor='grey'
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'white' }}
    // 3b3c36
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'My Music',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="library-music" color={color} size={26} />
          ),

        }}
      />


      <Tab.Screen
        name="Profile"
        component={profileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}
