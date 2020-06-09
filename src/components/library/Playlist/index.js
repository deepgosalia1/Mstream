import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  Button
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default function Playlist() {
  // var dd = []
  const user = auth().currentUser;
  const [input, setinput] = useState('');
  const [list, displayList] = useState([]);
  // const [datainputList, setData] = useState([])

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
    displayList([])
    var dataArray = []
    setTimeout(()=>{
      database().ref('/playlist/' + user.uid)
        .on('value', function (snapshot) {
          snapshot.forEach(element => {
            console.log(element.val("name"))
            dataArray.push(element.val())
          })
          displayList(dataArray);
        })
      }, 50
    )


  }
  // useEffect(() => {
  //   database()
  //   .ref()

  //   setData(prev=>dd)
  //   dd=[]
  // }, [])


  // const setPlaylistHandler = (new_input) => {

  //   database()
  //   .ref('/playlist/'+user.uid)
  //   .once('value')
  //   .then( function(snapshot){
  //     snapshot.forEach(element => {
  //      dd.push(element.val())  
  //     })      
  //   });
  //   setData(prev=>dd)
  // };


  // database()
  //   .ref('/playlist/'+user.uid)
  //   .on('value', function(snapshot){
  //     snapshot.forEach(element => {
  //      dd.push(element.val())  
  //     })
  //     setData(prev=>dd)
  //     dd=[]     
  // });

  return (
    <View style={{ flex: 1, backgroundColor: '#140341' }}>
      <View>

        <Text style={{ fontSize: 30, color: 'white', width: 300, padding: 10 }} >
          Your PLaylists Here !</Text>

        <TextInput
          placeholder="Playlist Title"
          onChangeText={inputHandler}
          value={input} />

        <Button
          title="Create"
          onPress={inputSetter} />

      </View>

      <View style={{marginBottom:150}}>
        {/* {list.map((item) => <Text>{item.name}</Text>)} */}
        {/* {listPlaylist.map((goal)=> <Text style={styles.playlist} h5 bold > {goal} </Text>)} */}
        <FlatList
            data = {list}
            renderItem={({item})=>(<Text  style={{ fontSize: 30, color: 'white', width: 300, padding:10}}>{item.name}</Text>)}
          />

      </View>

    </View>
  );
}
styles = StyleSheet.create({

  container: {
    justifyContent: "center",
    alignItems: "center",
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

