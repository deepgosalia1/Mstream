/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
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
import { Divider } from 'react-native-elements';
import database from '@react-native-firebase/database';

export default function LoginApp({ navigation }) {

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



  const loginUser = () => {
    auth()
      .signInWithEmailAndPassword(inputField.email, inputField.pass)
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
    return auth().signInWithCredential(googleCredential).then(()=>{

      const user = auth().currentUser;
      console.log('Welcome, '+user.displayName)
        // if (user.phoneNumber<=0){
        database()
        .ref('/users/'+user.uid)
        .set({
          name: user.displayName,
          dob: '',
          phone: 0,
          email: user.email,
          bs64:'',
          bs64_hash:'',
        })
      // }
    });


  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing && !user) { return <ActivityIndicator size={'large'} />; }

  if (!user) {
    return (
      <NavigationContainer independent={true}>
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
              onPress={() => loginUser(inputField)}
            >
              <Text bold color="white">Login </Text>
            </Button>

          </Surface>
          <Divider style={{ height: 1, marginTop: 15, width: '88%', alignSelf: 'center' }} />
          <Button radius={15} round size="small" style={{ width: 100, marginTop: 15, alignSelf: 'center' }} color="green"
            onPress={() => { navigation.navigate('SignupScreen') }}><Text> Sign Up </Text></Button>
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
      </NavigationContainer>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <MyTabs color={'#3B5998'} />
    </SafeAreaView>
  );
}