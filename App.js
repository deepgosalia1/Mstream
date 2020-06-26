/**
 *  eslint-disable
 *
 * @format
 * @flow strict-local
 */
import React, { } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginApp from './src/components/login';
import SignUp from './src/components/signup';
import { createStackNavigator } from '@react-navigation/stack';
import MusicPlayer from './src/components/musicplayer';
import TrackPlayer, {Capability} from 'react-native-track-player';

const Signupstack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={true}>
      <Stack.Screen name="SignInScreen" component={LoginApp} />
      <Stack.Screen name="SignupScreen" component={SignUp} />
    </Stack.Navigator>
  )
}

export default function App() {
  console.disableYellowBox = true;
  TrackPlayer.setupPlayer()
  // trackNotification();
  return (
    // <NavigationContainer independent={true}>
    //   <Signupstack />
    // </NavigationContainer>
    <MusicPlayer/>
  );
}
