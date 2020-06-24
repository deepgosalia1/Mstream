import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info'
import { FontAwesome5, Feather, Entypo, AntDesign } from '@expo/vector-icons';
import styles from './style';

const DPS = ({ navigation }) => {
    const [imagepath, setImagepath] = useState('')
    const updater = (value) => {
        setImagepath(prev => value)
    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.blur_imageview}>
                <ImageBackground style={{}} blurRadius={12} source={imagepath ? { uri: imagepath } : require('../../assets/images/temp.jpeg')}>
                    <View style={styles.pro_pic}>
                        <Image
                            source={imagepath ? { uri: imagepath } : require('../../assets/images/temp.jpeg')}
                            style={styles.pro_picimage}
                        />
                    </View>
                    <View style={styles.pro_nameview}>
                        <Text style={styles.textstyle}>Profile Name Here</Text>
                    </View>
                    <View style={styles.editshare}>
                        <TouchableOpacity onPress={() => navigation.navigate('EditDP', { updater: updater })}><FontAwesome5 name="edit" size={30} color="white" /></TouchableOpacity>
                        <TouchableOpacity><AntDesign name="sharealt" size={30} color="white" /></TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
            {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 5, marginTop: 15 }} /> */}
            {/* <View style={{ borderBottomColor: 'grey', borderBottomWidth: 2, marginTop: 50 }} /> */}

        </SafeAreaView>
    )
}

export default DPS;
