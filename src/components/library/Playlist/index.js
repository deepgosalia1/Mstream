import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button
} from 'react-native';
import {Icon} from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

export default function Playlist() {

    const [inputPlaylist, setinputPlaylist] = useState('');
    const[listPlaylist, setPlaylist] = useState([]); 


    const inputPlaylistHandler = (enteredText) => {
      setinputPlaylist(enteredText);
    };

    const setPlaylistHandler = () => {
      setPlaylist(currentList => [...listPlaylist, inputPlaylist]);
  };
    return (
      <View >
        <View>
        <Text>Your PLaylists Here!</Text>
        <TextInput placeholder="Playlist Title"
                  onChangeText={inputPlaylistHandler}
                  value={inputPlaylist}  />

        <Button title="Create" onPress ={setPlaylistHandler}    />
        </View>
        <View>
        {listPlaylist.map((goal)=> <Text>{goal}</Text>)}
        </View>

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
  }
  );
  