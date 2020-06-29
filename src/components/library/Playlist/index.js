// React Native Imports
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Button
} from 'react-native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
// Firebase Imports
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default function Playlist({ navigation }) {
  const [input, setinput] = useState('');
  const [list, displayList] = useState([]);
  const user = auth().currentUser;

  const inputHandler = (enteredText) => { setinput(enteredText); }

  const inputSetter = () => {
    database()
      .ref('/playlist/' + user.uid + '/' + input)
      .update({
        name: input,
        songlist: ''
      });
    displayList([])
    var dataArray = []
    setTimeout(() => {
      database().ref('/playlist/' + user.uid)
        .once('value', function (snapshot) {
          snapshot.forEach(element => {
            console.log(element.val("name"))
            dataArray.push(element.val())
          })
          displayList(dataArray);
        })
    }, 50)
  }

  const onDelete = (node) => {
    console.log("ye delete hoga", node.name)
    Alert.alert(
      'Delete ?',
      node.name,
      [{
        text: 'Delete',
        onPress: () => {
          database()
            .ref('/playlist/' + user.uid + '/' + node.name)
            .remove()

          setTimeout(() => {
            database().ref('/playlist/' + user.uid)
              .once('value', function (snapshot) {
                var dataArray = []
                displayList([])
                snapshot.forEach(element => {
                  console.log(element.val("name"))
                  dataArray.push(element.val())
                })
                displayList(dataArray);
              })
          }, 50)
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

  return (
    <View  style={styles.viewContainer}>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
                    location={[0.2,0.8,1]}
                    style={styles.linearGradient}>
      <View>
        {/* <Text style={{ fontSize: 30, color: 'white', width: 300, padding: 10 }} >
          Your PLaylists Here !</Text> */}

        <TextInput
          placeholder="Playlist Title"
          onChangeText={inputHandler}
          value={input} />

        <Button
          title="Create"
          onPress={inputSetter} />

      </View>

      <View>
        <FlatList style={styles.listdisplay}
          data={list}
          renderItem={({ item }) => (<TouchableOpacity onLongPress={onDelete.bind(this, item)}
            onPress={() => navigation.navigate('PlaylistSection', { item })}>
            <View>
              <Text style={styles.listdisplay}>{item.name}</Text>
            </View>
          </TouchableOpacity>
          )} />
      </View>
      </LinearGradient>
    </View>

  );
}

styles = StyleSheet.create({

  viewContainer: {
    flex: 1,
    backgroundColor: '#140341',
  },
  listdisplay: {

    textAlign:'center',
    fontSize: 25,
    color: 'white',
  },
  textdisplay: {
    textAlign: "center",
  },
  playlist: {
    fontSize: 80,
    borderBottomWidth: 5,
    borderBottomColor: 'white',
    marginTop: 5,
    color: 'white',
    marginLeft: 15,
    width: 300
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
});

