import React, {useState} from 'react';
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
      <View style={{ flex: 1, backgroundColor: '#140341' }}>
        <View>
        <TouchableOpacity>
        <Text style={{ fontSize: 30, color: 'white', width: 300, padding:10}} >
         Your PLaylists Here !
        </Text>
      </TouchableOpacity>
        <TextInput placeholder="Playlist Title"
                  onChangeText={inputPlaylistHandler}
                  value={inputPlaylist}  />

        <Button title="Create" onPress ={setPlaylistHandler}    />
        </View>
        
        <View>
        {listPlaylist.map((goal)=> <TouchableOpacity><Text style={{ fontSize: 30,borderBottomWidth: 5, borderBottomColor: 'white', marginTop: 5, color: 'white', marginLeft: 15, width: 300 }} h5 bold >
         {goal}
        </Text>
      </TouchableOpacity>)}
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
  