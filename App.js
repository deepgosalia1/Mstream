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



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

    /* <EditDP /> */

  );
}