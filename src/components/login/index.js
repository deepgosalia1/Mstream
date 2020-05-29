import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginApp() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
      <View>
        <Text>Login</Text>
      </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
    </SafeAreaView>
  );

  //   return (

    
  //     <View>
  //       <SafeAreaView>
  //         <View>

  //           <Text style={{fontFamily: 'Arial', textAlign:"center", fontSize: 30, }} >
  //             Search
  //           </Text>

  //           <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:"center"}}>  
  //             <TextInput style={{ width:'80%' }}/>
  //             <Button title="Search" />
  //           </View>
    
  //         </View>
  //       </SafeAreaView>
  //     </View>
  // );
}
  