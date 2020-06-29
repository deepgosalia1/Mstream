// React Imports
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function Songs() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
         <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
                    location={[0.2,0.8,1]}
                    style={styles.linearGradient}>

                    </LinearGradient>
      </View>
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
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 0,
    },
  }
  );
  