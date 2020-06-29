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
  // return(<View style={{backgroundColor:'red', flex:1}}/>)
// }
  const { item } = route.params;
  const user = auth().currentUser;
  const [input, setinput] = useState('');
  const [list, displayList] = useState([]);
  // const [datainputList, setData] = useState([])
  var arr = Object.values(item.songs)
  var tempe = Object.keys(item.songs)

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

  const onDelete = (item) => {
    console.log("ye delete hoga", item.name)
    var popup = "Remove from "+item.name+" ?"
    Alert.alert(
      popup,
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
      { cancelable: true }
    );
  }

  const getSong = (sitem,sindex) => { 
    console.log("gets song link"); 
    console.log(tempe[sindex])
    database().ref('/songs/' +tempe[sindex] )
        .once('value', function (snapshot) {
          console.log(snapshot)
          var data1 = snapshot
        });
    navigation.navigate('Music', {snapshot}); 
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#140341' }}>
      <LinearGradient colors={['#666666','#4d4d4d','#333333','#1a1a1a','#000000']}
        location={[0.2, 0.8, 1]}
        style={styles.linearGradient}>
      <Surface raised style={{ marginTop: 30, height: 180, width: 200, alignSelf: 'center', elevation: 50, borderRadius: 30 }}>
        <Image source={{ uri: 'https://a10.gaanacdn.com/images/albums/61/161/crop_480x480_161.jpg' } || require('../../assets/images/playlist.png')} style={{ height: 200, width: 200, borderRadius: 30, alignSelf: 'center' }} />
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
          renderItem={({ item,index }) => (
            <TouchableOpacity
              onLongPress={onDelete.bind(this, item)}
              onPress={getSong.bind(this,item,index)}
            >
              <View style={styles.listItems}>
               <Image source={ require('../../assets/images/playlist.png')} style={styles.imageDisplay} />
               <Text style={styles.textdisplay}>{item}</Text>
                </View>
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
});

