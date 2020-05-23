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

      <Tab.Navigator style={{ paddingTop:35,flex: 1, backgroundColor: '#140341' }}
                      tabBarOptions={{
                        labelStyle: {fontSize:18},
                        style: { backgroundColor: '#140341' },
                        activeTintColor: 'white',
                        inactiveTintColor: 'white',
                      }}
      >
        <Tab.Screen name="Playlists" component={Playlist} />
        <Tab.Screen name="Songs" component={Songs} />
        <Tab.Screen name="Download" component={Download} />

      </Tab.Navigator>
    );
  }
   

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
  