/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image, Button, Input } from 'react-native-elements';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import shorthash from 'shorthash';

const EditDP = ({ route, navigation }) => {
  const [image_obj, setImage] = useState({});
  const [hashequality, setHash] = useState(true);
  const [newhash, setNewHash] = useState('');
  const user = auth().currentUser;
  const { currbs64, currbs64_hash } = route.params;


  function getimagepath() {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      var newbs64 = `data:${image.mime};base64,${image.data}`;
      var newbs64_hash = shorthash.unique(newbs64);
      console.log('this is new walaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ', newbs64, newbs64_hash);
      if (newbs64_hash !== currbs64_hash) {
        setImage(prev => image);
        setNewHash(prev => newbs64_hash)
        setHash(false);
      }

    });
  }

  return (
    <View style={styles.mainview}>
      <View style={styles.card}>
        <View style={styles.imageopt}>
          <Image
            source={{ uri: hashequality ? currbs64 : `data:${image_obj.mime};base64,${image_obj.data}` }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150,
              alignSelf: 'center',
              borderWidth: 0.5,
            }}
            PlaceholderContent={
              <FontAwesome5 name="user-circle" size={128} color="black" />
            }>
            <TouchableOpacity
              style={{ transform: [{ translateY: 90 }] }}
              onPress={() => {
                getimagepath();
              }}>
              <Entypo
                name="camera"
                size={50}
                color="white"
                style={{ alignSelf: 'flex-end' }}
              />
            </TouchableOpacity>
          </Image>
        </View>
        <Input
          disabled={true}
          underlineColorAndroid={'white'}
          defaultValue={user.displayName}
          placeholder={'Your name'}
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          containerStyle={{
            alignItems: 'center',
            marginTop: 280,
            backgroundColor: 'white',
            height: 50,
            textAlign: 'center',
          }}
        />
      </View>
      <View style={styles.buttonview}>
        <Button
          title="     Done     "
          style={{ width: 100, justifyContent: 'space-between' }}
          onPress={() => {
            if (!hashequality) {
              console.log('if me aaya naya image', `data:${image_obj.mime};base64,${image_obj.data}`);
              database()
                .ref('/users/' + user.uid)
                .update({
                  bs64: `data:${image_obj.mime};base64,${image_obj.data}`,
                  bs64_hash: newhash,
                });
            }
            route.params.updater(`data:${image_obj.mime};base64,${image_obj.data}`);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};
export default EditDP;
