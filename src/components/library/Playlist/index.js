// React Native Imports
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem } from 'react-native-elements';
import SmartImage from '../../../customRootComponents/smartImage';
import FastImage from 'react-native-fast-image';
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

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
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a'].reverse()}
      location={[0.2, 0.8, 1]}
      style={styles.linearGradient}>
      <View>
        <Text style={styles.playlistHeader} > Playlists </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center" }}>
          <TextInput
            style={styles.inputBar}
            placeholder="Add New Playlist"
            onChangeText={inputHandler}
            value={input} />
        </View>
        <View style={styles.addButton}>
          <Button
            title="Create"
            onPress={inputSetter} />
        </View>

        <View>
          <FlatList style={styles.listDisplay}
            data={list}
            renderItem={({ item }) => (
             <TouchableOpacity onLongPress={onDelete.bind(this, item)}
              onPress={() => navigation.navigate('PlaylistSection', { item })}>
              <View style={styles.listItems}>
               <Image source={ require('../../../assets/images/playlist.png')} style={styles.imageDisplay} />
                <Text style={styles.textdisplay}>{item.name}</Text>
                </View>
               </TouchableOpacity>
            )} />
        </View>
      </View>
    </LinearGradient>


  );
}

styles = StyleSheet.create({
  playlistHeader: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'justify',
    color: 'white',
    fontFamily: 'arial',
    fontWeight: "500",
    fontSize: 40
  },
  inputBar: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '94%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  addButton: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,

  },
  listDisplay: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  listItems: {
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingTop: 2.5,
    paddingBottom: 2.5,
    
  },
  imageDisplay: {
    height: 75,
    width: 75,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom:10
  },
  textdisplay: {
    paddingLeft: 20,
    fontSize: 25,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
  },
});

