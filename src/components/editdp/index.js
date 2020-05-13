/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions, ImageBackground, Alert } from 'react-native';
import { Image, Button, Input } from 'react-native-elements';
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import * as Permissions from 'expo-permissions';

const EditDP = () => {
    const [image_obj, setImage] = useState({})

    function getimagepath() {
        ImagePicker.openPicker({
            width: 150,
            height: 150,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            // console.log(image)
            setImage(prevObj => image)
            // console.log(image_obj)
        });
    };

    return (
        <View style={styles.mainview}>
            <View style={styles.card}>
                <View style={styles.imageopt}>
                    {/* var source = if uripath!=='' source={{ uri: uripath }} */}
                    <Image
                        source={{ uri: `data:${image_obj.mime};base64,${image_obj.data}` }}
                        // defaultSource={require('../../assets/images/temp.jpeg')}
                        style={{ width: 150, height: 150, borderRadius: 150, alignSelf: 'center' }}
                        PlaceholderContent={<FontAwesome5 name="user-circle" size={128} color="black" />}

                    // onError = {(e) => {default}}
                    >
                        <TouchableOpacity
                            style={{ transform: [{ translateY: 90 }] }}
                            onPress={() => { getimagepath() }}
                        >
                            <Entypo name="camera" size={50} color="white" style={{ alignSelf: 'flex-end', }} />
                        </TouchableOpacity>
                    </Image>
                </View>
                <Input placeholder={'Hello there User'} leftIcon={{ type: 'font-awesome', name: 'user' }} containerStyle={{ marginTop: 280, backgroundColor: 'white', height: 50 }} />

            </View>
            <View style={styles.buttonview}>
                <Button title="     Done     " style={{ width: 100, justifyContent: 'space-between' }} />
            </View>
        </View>
    )
}
export default EditDP;
