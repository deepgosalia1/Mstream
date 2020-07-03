/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Image } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native-paper';
import DUI from '../../assets/images/user.png';

const DPS = ({ route, navigation }) => {
  const [imagepath, setImagepath] = useState('');
  const [currimage, setCurr] = useState('');
  const [imgloading, setLoad] = useState(true);
  const [bs64, setBS64] = useState([]);
  const user = auth().currentUser;
  var temp = [];

  async function prefetch() {
    console.log(user.uid, 'uddddd')
    database()
      .ref('/users/' + user.uid)
      .once('value', snapshot => {
        snapshot.forEach(element => {
          temp.push(element.val('bs64', 'bs64_hash'))
        });
        setBS64(temp);
      })
      .then(() => setLoad(false));
  }

  useEffect(() => {
    prefetch();
  }, []);

  const updater = value => {
    setImagepath(() => value);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.blur_imageview}>
        <ImageBackground
          style={{ flex: 1, height: '100%' }}
          blurRadius={12}
          source={
            imagepath
              ? { uri: imagepath }
              : bs64[0]
                ? { uri: bs64[0] }
                : require('../../assets/images/user.png')
          }>
          <View style={styles.pro_pic}>
            <Image
              source={
                imagepath
                  ? { uri: imagepath }
                  : bs64[0]
                    ? { uri: bs64[0] }
                    : require('../../assets/images/user.png')
              }
              style={styles.pro_picimage}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.pro_nameview}>
            <Text style={styles.textstyle}>{user.displayName}</Text>
          </View>
          <View style={styles.editshare}>
            <TouchableOpacity
              disabled={imgloading}
              onPress={() => {
                console.log(bs64);
                navigation.navigate('EditDP', {
                  updater: updater,
                  currbs64: bs64[0],
                  currbs64_hash: bs64[1],
                });
              }}>
              <FontAwesome5 name="edit" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 5, marginTop: 15 }} /> */}
      {/* <View style={{ borderBottomColor: 'grey', borderBottomWidth: 2, marginTop: 50 }} /> */}
    </SafeAreaView>
  );
};

export default DPS;
