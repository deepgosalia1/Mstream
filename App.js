/**
 *  eslint-disable
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import EditDP from './src/components/editdp';
import MyTabs from './src/navigation';
import { SafeAreaView, View, Text } from 'react-navigation';
import Profile from './src/components/profile'
import { YellowBox } from 'react-native';
import MusicPlayer from './src/components/musicplayer';
import auth from "@react-native-firebase/auth";
import LoginApp from './src/components/login';




export default function App() {
  console.disableYellowBox = true;

  return (
    // <NavigationContainer>
    <LoginApp />

    // </NavigationContainer>
    // <MusicPlayer />
    // <EditDP /> 
  );
}