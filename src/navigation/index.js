
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../components/home';
import Profile from '../components/profile';
import Library from '../components/library';
import Search from '../components/search';




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
        component={Profile}
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
