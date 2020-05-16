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
import { YellowBox } from 'react-native';



export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <MyTabs color={'#3B5998'} />
    </NavigationContainer>
  );
}