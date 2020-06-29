/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import {Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Profile from '../components/profile';
import DPS from '../components/dpscreen';
import Search from '../components/search';
import Appsettings from '../components/appsettings'
import EditDP from '../components/editdp'
import Playlist from '../components/library/Playlist';
import PlaylistSection from '../components/playlist_section';
import Songs from '../components/library/Songs';
import MusicPlayer from '../components/musicplayer';
import { Text } from 'galio-framework';

// function youStack() {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator screenOptions={{ headerStyle: { height: 45, backgroundColor: 'lightblue', elevation: 0 }, headerTitleAlign: 'center', headerTransparent: true }} >
//       <Stack.Screen options={{headerShown: false}} name="You" component={YourScreen} />
//       <Stack.Screen name="UploadsList" component={UploadsList} />
//       <Stack.Screen name="MeFollow" component={MeFollow} />
//     </ Stack.Navigator>
//   );
// }

function libraryTabs() {
  const Tab = createMaterialTopTabNavigator();

  return (

    <Tab.Navigator style={{ flex: 1, backgroundColor: '#140341' }}
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        style: { backgroundColor: '#140341' },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
    >
      <Tab.Screen name="Playlist" component={Playlist} />
      <Tab.Screen name="Songs" component={Songs} />

    </Tab.Navigator>
  );
}

function libraryStack() {

  
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name = "LibraryTabs" component={libraryTabs}/>
      <Stack.Screen name = "PlaylistSection" component={PlaylistSection}
      options={{
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff" />)
      }} />
      <Stack.Screen name='Music' component={MusicPlayer} />
    </Stack.Navigator>
  )
}



function profileStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerStyle:{height:40}, headerTitleAlign: 'center', headerTransparent: true }} >
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
          tabBarIcon: ({ color }) => (<Entypo name="home" color={color} size={26} />),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={26} />),
        }}
      />

      <Tab.Screen
        name="Library"
        component={libraryStack}
        options={{
          tabBarLabel: 'My Music',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="library-music" color={color} size={26} />),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={profileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />),
        }}
      />
    </Tab.Navigator>
  );
}
