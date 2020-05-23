import React from 'react';
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
import {Icon} from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';


export default function Search() {
    return (
      <View>
        <SafeAreaView>
          <View>

            <Text style={{fontFamily: 'Arial', textAlign:"center", fontSize: 30, }} >
              Search
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:"center"}}>  
              <TextInput style={{ width:'80%' }}/>
              <Button title="Search" />
            </View>
    
          </View>
        </SafeAreaView>

        <ScrollView>
          
        <FlatList>
          
        </FlatList>
        </ScrollView>
      </View>
  );
}
  