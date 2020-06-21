import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Touchable,
  StatusBar,
  Alert,
  Button
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { getTokenSourceMapRange } from 'typescript';

export default function PlaylistSection({route,navigation}) {
  const {item} = route.params;
  const user = auth().currentUser;
  const [input, setinput] = useState('');
  const [list, displayList] = useState([]);
  // const [datainputList, setData] = useState([])

  const refreshList = () => {

    setTimeout(()=>{
      database().ref('/playlist/' + user.uid)
        .once('value', function (snapshot) {
          displayList([])
          var dataArray = []
          snapshot.forEach(element => {
            console.log(element.val("name"))
            dataArray.push(element.val())
          })
          displayList(dataArray);
        })
      }, 50
    )
  }

  const inputHandler = (enteredText) => {
    setinput(enteredText);
  }


  const inputSetter = () => {
    database()
      .ref('/playlist/' + user.uid + '/' + input)
      .update({
        name: input,
        songlist: ''
      });
      setTimeout(()=>{
        database().ref('/playlist/' + user.uid)
          .once('value', function (snapshot) {
            displayList([])
            var dataArray = []
            snapshot.forEach(element => {
              console.log(element.val("name"))
              dataArray.push(element.val())
            })
            displayList(dataArray);
          })
        }, 50
      )
    // refreshList;


  }

  const onDelete = (node) =>{
    console.log("ye delete hoga",node.name)
    Alert.alert(
      'Delete ?',
      node.name,
      [
        {
          text: 'Delete',
          onPress: () => {database()
                          .ref('/playlist/' + user.uid + '/' + node.name)
                          .remove()
                        
                        refreshList;
                        }
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
    

  }

  const goTo = () => {
    console.log("Does nothing");
  }

  return (
    <NavigationContainer independent={true}>
    <View style={{ flex: 1, backgroundColor: '#140341' }}>
      <View>

        <Text style={styles.playlistHeader} >
          Your Songs Here !</Text>

        {/* <TextInput
          placeholder="Playlist Title"
          onChangeText={inputHandler}
          value={input} /> */}
{/* 
        <Button
          title="Create"
          onPress={inputSetter} /> */}
      </View>

      <View style={{marginBottom:150}}>
        <Button title="refresh"
        onPress={inputSetter} />
        <FlatList
            data = {list}
            renderItem={({item})=>(<TouchableOpacity onLongPress={onDelete.bind(this,item)}
                                                      onPress={navigation.navigate(goTo.bind(this,item))}
                                                      >
                                      <View>
                                        <Text style={styles.listdisplay }>{item.songlist}</Text>
                                      </View>
                                  </TouchableOpacity>
                              )}
          />

      </View>

    </View>
    </NavigationContainer>
  );
}
styles = StyleSheet.create({

  playlistHeader:{
    fontSize: 30,
    color: 'white',
    width: 300,
    padding: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  listdisplay:{
    fontSize: 30,
    color: 'white',
    width: 300,
    padding:10,
  },
  textdisplay: {
    textAlign: "center",
    fontSize: 50,
  },
  playlist: {
    fontSize: 80,
    borderBottomWidth: 5,
    borderBottomColor: 'white',
    marginTop: 5,
    color: 'white',
    marginLeft: 15,
    width: 300
  }
});

