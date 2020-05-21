import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Playlist from './Playlist';
import Songs from './Songs';
import Download from './Download';


  const Tab = createMaterialTopTabNavigator();

  export default function MyTabs() {
    return (
      <Tab.Navigator style={{ paddingTop:35 }}>
        <Tab.Screen name="Playlists" component={Playlist} />
        <Tab.Screen name="Songs" component={Songs} />
        <Tab.Screen name="Downloaded" component={Download} />
      </Tab.Navigator>
    );
  }
    // return (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
    //     <Text>Notifications!</Text>

    //   </View>
    // );
  


const styles = StyleSheet.create({

    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    textdisplay:{
      textAlign: "center",
      fontSize: 50,
      
    }, 
  }
  );
  