/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import Slider from 'react-native-slider';
import { Image, Button, Input } from 'react-native-elements';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info'
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const EditDP = () => {


    return (
        <View style={styles.mainview}>
            <View style={styles.card}>
                <View style={styles.imageopt}>
                    <Image
                        source={require('../../assets/images/temp.jpeg')}
                        style={{ width: 150, height: 150, borderRadius: 150, alignSelf: 'center' }}
                        PlaceholderContent={<ActivityIndicator />}

                    >
                        <TouchableOpacity
                            style={{ transform: [{ translateY: 90 }] }}
                            onPress={() => { }}
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
