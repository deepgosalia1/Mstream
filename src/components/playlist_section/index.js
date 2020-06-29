// React Imports
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Button
} from 'react-native';
import {ListItem} from 'react-native-elements';
import { Surface } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

// Firebase Imports
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { element } from 'prop-types';

//url: (await storage().ref('Songs/01 - Luck Aazma - www.downloadming.com.mp3').getDownloadURL()).toString(),

export default function PlaylistSection({ route, navigation }) {
  const { item } = route.params;
  const user = auth().currentUser;
  const [input, setinput] = useState('');
  const [list, displayList] = useState([]);
  // const [datainputList, setData] = useState([])
  var arr = Object.keys(item.songs)
  console.log("arr is ", arr)
  const inputHandler = (enteredText) => { setinput(enteredText); }

  const inputSetter = () => {
    database()
      .ref('/playlist/' + user.uid + '/' + input)
      .update({
        name: input,
        songlist: ''
      });
    setTimeout(() => {
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

  const onDelete = (node) => {
    console.log("ye delete hoga", node.name)
    Alert.alert(
      'Delete ?',
      node.name,
      [
        {
          text: 'Delete',
          onPress: () => {
            database()
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

  const goTo = () => { console.log("Does nothing"); }

  return (
    <View style={{ flex: 1, backgroundColor: '#140341' }}>
      <LinearGradient colors={['#666666','#4d4d4d','#333333','#1a1a1a','#000000']}
        location={[0.2, 0.8, 1]}
        style={styles.linearGradient}>
      <Surface raised style={{ marginTop: 30, height: 180, width: 200, alignSelf: 'center', elevation: 50, borderRadius: 30 }}>
        <Image source={{ uri: 'https://a10.gaanacdn.com/images/albums/61/161/crop_480x480_161.jpg' } || require('../../assets/images/temp.jpeg')} style={{ height: 200, width: 200, borderRadius: 30, alignSelf: 'center' }} />
      </Surface>

      <View style={{ marginTop: 25, flexDirection: 'column', alignItems: 'center' }}>
        <Text style={styles.playlistHeader}>{item.name}</Text>
        <Text style={styles.playlistSubHeader}>By {item.name}</Text>
      </View>
      <View style={{}}>
        <Button title="Play" />
        <FlatList
          style={styles.listdisplay}
          data={arr}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={onDelete.bind(this, item)}
              onPress={() => { navigation.navigate('Music', { url: url }) }}
            >
              <Text style={styles.textdisplay}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </LinearGradient>
    </View>
  );
}

styles = StyleSheet.create({

  listdisplay: {
    textAlign:'center', 
    fontSize: 25,
    color:'white',   
  },
  playlistHeader: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  playlistSubHeader: {
    fontWeight: '500', 
    marginTop: 3,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textdisplay: {
    color:'white',
    textAlign: "center",
    fontSize: 25,
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

