/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,

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

export default function SignUp({ navigation }) {

  const [inputField, setinput] = useState({ email: '', pass: '' });
  //   // const [inputPass, setinputPass] = useState('');


  const inputEmailHandler = (enteredText) => {
    if (enteredText.length != 0) {
      setinput({
        ...inputField,
        email: enteredText,
      });
    }
  };
  const inputPassHandler = (enteredText) => {
    if (enteredText.length != 0) {
      setinput({
        ...inputField,
        pass: enteredText,
      });
    }
  };

  const createUser = (inputField) => {
    auth()
      .createUserWithEmailAndPassword(inputField.email, inputField.pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) { setInitializing(false); }
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Surface style={{ elevation: 5, backgroundColor: '#0080ff', height: 200, width: '100%', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
        <Text center h3 color="white" size={45}> Welcome </Text>
        <Text h3 center color="white"> to </Text>
        <Text h2 center bold color="white"> MStream ! </Text>
      </Surface>
      <Surface style={{ flexDirection: 'column', width: '85%', alignSelf: 'center', marginTop: 15 }}>
        <Input placeholder="Email ID" rounded
          onChangeText={(val) => inputEmailHandler(val)}
          value={inputField.email}
        />
        <Input placeholder="Password" rounded password
          secureTextEntry={true}
          onChangeText={(val) => inputPassHandler(val)}
          value={inputField.pass}
        />
        <Button radius={15} round size="small" style={{ width: 100, marginTop: 15, alignSelf: 'center' }} color="green"
          onPress={
            () => {
              createUser(inputField)
              navigation.navigate('SignInScreen')
            }}
        >
          <Text bold color="white">Sign Up </Text>
        </Button>

      </Surface>
      <Divider style={{ height: 1, marginTop: 15, width: '88%', alignSelf: 'center' }} />

    </SafeAreaView>
  )
}