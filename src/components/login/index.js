/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import MyTabs from '../../navigation';
import { GoogleSignin } from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId: '1054951972389-p8633ghgm1jjjpri29f0m9vpfcdh0a5j.apps.googleusercontent.com',
});
import auth from '@react-native-firebase/auth';
import { Text, Input, Button } from 'galio-framework';
import { Surface } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Divider, Card } from 'react-native-elements';

export default function LoginApp() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) { setInitializing(false); }
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) { return <ActivityIndicator size={'large'} />; }

  if (!user) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Surface style={{ elevation: 5, backgroundColor: '#0080ff', height: 200, width: '100%', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
          <Text center h3 color="white" size={45}> Welcome </Text>
          <Text h3 center color="white"> to </Text>
          <Text h2 center bold color="white"> MStream ! </Text>
        </Surface>
        <Surface style={{ flexDirection: 'column', width: '85%', alignSelf: 'center', marginTop: 15 }}>
          <Input placeholder="Email ID" rounded />
          <Input placeholder="Password" rounded password />
          <Button radius={15} round size="small" style={{ width: 100, marginTop: 15, alignSelf: 'center' }} color="green"><Text bold color="white">Login </Text></Button>
        </Surface>
        <Divider style={{ height: 1, marginTop: 15, width: '88%', alignSelf: 'center' }} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ borderRadius: 3, marginTop: 15, alignSelf: 'center', height: 50, backgroundColor: 'black' }}
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        >
          <Surface style={{ flex: 1, borderRadius: 3, backgroundColor: 'blue', elevation: 8, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/images/google2.png')} style={{ width: 30, height: 30, margin: 25 }} />
            <Text bold color="white" h6 style={{ width: 200 }}> Login using Google </Text>
          </Surface>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  return (
    // <View>
    //   <Text>Welcome {user.email}</Text>
    // </View>
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} >
        <MyTabs color={'#3B5998'} />
      </SafeAreaView>
    </NavigationContainer>
  );
}