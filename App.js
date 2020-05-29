/**
 *  eslint-disable
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EditDP from './src/components/editdp';
import MyTabs from './src/navigation';
import { SafeAreaView } from 'react-navigation';
import Profile from './src/components/profile'
import { YellowBox } from 'react-native';
import MusicPlayer from './src/components/musicplayer';



export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <MyTabs color={'#3B5998'} />
    </NavigationContainer>
  );
}