/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions, ImageBackground, Alert } from 'react-native';
import Slider from 'react-native-slider';
import { Image, Button, Input } from 'react-native-elements';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info'
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';
import { useState } from 'react';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';

const _pickImage = async () => {
    console.log("Reached here")
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
        return result;
    }
};

const EditDP = () => {


    const [uripath, setUri] = useState("")
    // useEffect(() => {
    //     async function getLocationAsync() {
    //         // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    //         const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (status === 'granted') {
    //             Alert('Great Job, permission granted');
    //         } else {
    //             throw new Error('Gallery permission not granted');
    //         }
    //     }
    // }, [])

    return (
        <View style={styles.mainview}>
            <View style={styles.card}>
                <View style={styles.imageopt}>
                    {/* var source = if uripath!=='' source={{ uri: uripath }} */}
                    <Image
                        source={{ uri: uripath }}
                        defaultSource={require('../../assets/images/temp.jpeg')}
                        style={{ width: 150, height: 150, borderRadius: 150, alignSelf: 'center' }}
                        PlaceholderContent={<ActivityIndicator />}

                    // onError = {(e) => {default}}
                    >
                        <TouchableOpacity
                            style={{ transform: [{ translateY: 90 }] }}
                            onPress={() => { setUri(_pickImage()) }}
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
