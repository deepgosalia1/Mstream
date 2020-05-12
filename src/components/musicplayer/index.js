/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info'
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import styles from './style';

export default class MusicPlayer extends React.Component {
    state = {
        trackLength: 300,
        timeElapsed: '0:00',
        timeRemaining: '5:00',
    };

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format('m:ss') });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format('m:ss') });
    };

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#2d545e', flex: 1, paddingTop: (DeviceInfo.hasNotch && Platform.OS === 'android') ? StatusBar.currentHeight : 0 }}>
                <View style={{ margin: 3, flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10 }}>PLAYLIST</Text>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: '500' }}>Album_name_here</Text>
                    </View>


                    <View style={{ marginTop: 60, height: 200, width: 200, alignSelf: 'center' }}>
                        <Image source={require('../../assets/images/temp.jpeg')} style={{ height: 200, width: 200, borderRadius: 150, alignSelf: 'center' }} />
                    </View>
                    <View style={{ marginTop: 50, flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: '500' }}>Song_Name_here</Text>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: '500', marginTop: 3 }}>artist_name_here</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={this.state.trackLength}
                            trackStyle={{ width: Dimensions.get('screen').width - 15, height: 8 }}
                            thumbStyle={{ height: 20, width: 20, backgroundColor: '#fff' }}
                            thumbTouchSize={{ width: 100, height: 40 }}
                            minimumTrackTintColor="#000000"
                            onValueChange={seconds => this.changeTime(seconds)}
                        />
                        <View style={{ width: Dimensions.get('screen').width - 35, backgroundColor: '#', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ flex: 1 }}>{this.state.timeElapsed}</Text>
                            <Text style={{ alignSelf: 'flex-end' }}>{this.state.timeRemaining}</Text>
                        </View>
                    </View>
                    <View style={{ width: 330, height: 100, backgroundColor: '#', alignSelf: 'center', margin: 15, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#', height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between' }}>
                            <FontAwesome5 name="backward" size={32} color="#242320" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#', height: 100, width: 40, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FontAwesome5
                                name="play"
                                size={50}
                                color="#000000"
                                style={{ alignItems: 'center', marginTop: 25 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#', height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between' }}>
                            <FontAwesome5 name="forward" size={32} color="#242320" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ backgroundColor: '#', height: 35, width: 150, alignSelf: 'center', flexDirection: 'row', margin: 5, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ marginLeft: 20, backgroundColor: '#', width: 30 }}>
                            <Feather
                                name="repeat"
                                size={30}
                                color="#000000"
                                style={{ alignItems: 'center' }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 20, backgroundColor: '#', width: 30 }}>
                            <Entypo
                                name="shuffle"
                                size={30}
                                color="#000000"
                                style={{ alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>


            // <SafeAreaView style={{ backgroundColor: '#DDDDDD' }}>

            //     <View style={{}}>
            //     <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
            //     <TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginLeft: 50, backgroundColor: '#555' }}>
            //         <FontAwesome5 name="backward" size={32} color="#93A8B3" />
            //     </TouchableOpacity>
            //     <TouchableOpacity style={[styles.pbcont, { backgroundColor: '#666', flex: 1 }]}>

            //     </TouchableOpacity>
            //     <TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginLeft: 50, backgroundColor: '#555', wid }}>
            //         <FontAwesome5 name="forward" size={32} color="#93A8B3" />
            //     </TouchableOpacity>
            // </View>
            //     </View>
            // </SafeAreaView>

        );
    }
}
