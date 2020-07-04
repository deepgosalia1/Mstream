// React Imports
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


// Firebase Imports
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


  
export default function Songs({route,navigation}) {
  const [list, displayList] = useState([]);
  const user = auth().currentUser;

  const refreshList= ()=>{
    console.log('referesh check')
  displayList([])
    var dataArray = []
    setTimeout(() => {
      database().ref('/songs/')
        .once('value', function (snapshot) {
          snapshot.forEach(element => {
            console.log(element.val("songname"))
            dataArray.push(element.val("songname"))
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
      locations={[0.2, 0.8, 1]}
      style={styles.linearGradient}>
        <Button title="test" onPress={refreshList} />
          <View>
          <FlatList style={styles.listDisplay}
            data={list}
            renderItem={({ item }) => (
             <TouchableOpacity 
              onPress={() => navigation.navigate('PlaylistSection', { item })}>
              <View style={styles.listItems}>
               <Image source={ require('../../../assets/images/playlist.png')} style={styles.imageDisplay} />
                <Text style={styles.textdisplay}>{item.songname}</Text>
                </View>
               </TouchableOpacity>
            )} />
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

    listdisplay: {
      textAlign:'center', 
      fontSize: 25,
      color:'white', 
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
    height:'100%'
  },
}
);
