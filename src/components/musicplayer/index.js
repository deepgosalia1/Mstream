/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, Platform, StatusBar, Dimensions, Modal, Button } from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info'
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import { Surface, Card, Badge } from 'react-native-paper';
import TrackPlayer, { } from 'react-native-track-player';

export default class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackLength: 300,
            timeElapsed: '0:00',
            timeRemaining: '5:00',
            optionsVisible: false,
            isPlaying: false,
        };
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add({
                url: 'https://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3',
                // url: 'gs://mstream-9122e.appspot.com/Songs/01 - Dulha Mil Gaya.mp3',
            });
            // console.log(await TrackPlayer.getState());
        }
        );

    }

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format('m:ss') });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format('m:ss') });
    };

    toggleOverlay = () => {
        this.setState({ optionsVisible: !this.state.optionsVisible })
    }

    render() {

        return (
            <SafeAreaView style={{ backgroundColor: '#2d545e', flex: 1, paddingTop: (DeviceInfo.hasNotch && Platform.OS === 'android') ? StatusBar.currentHeight : 0 }}>
                <View style={{ margin: 3, flex: 1 }}>
                    <Modal
                        visible={this.state.optionsVisible}
                        transparent={true}
                        animated={true}
                    >
                        <View style={{ backgroundColor: '#000000bc', flex: 1, alignItems: 'center', alignContent: 'center' }}>
                            <View
                                style={{ height: 250, width: 350, margin: 50, padding: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 150, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'column' }}
                            >
                                <Text style={{ fontSize: 22, textAlign: 'center' }} >In-order to receive support, please contact us at </Text>
                                <Button
                                    onPress={this.toggleOverlay}
                                    title={'Close'}
                                    color={'purple'}
                                />
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end', marginRight: 10 }}
                        onPress={this.toggleOverlay} >
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    {/* playlist name and album name */}
                    <View style={{ alignItems: 'center', marginTop: -25 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10 }}>PLAYLIST</Text>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: '500' }}>Album_name_here</Text>
                    </View>

                    {/* song image/ thumbnail zone */}
                    <Surface raised style={{ marginTop: 30, height: 200, width: 200, alignSelf: 'center', elevation: 50, borderRadius: 30 }}>
                        <Image source={require('../../assets/images/temp.jpeg')} style={{ height: 200, width: 200, borderRadius: 30, alignSelf: 'center' }} />
                    </Surface>

                    {/* song name and artist name */}
                    <View style={{ marginTop: 25, flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 20 }}>Song_Name_here</Text>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontWeight: '500', marginTop: 3 }}>artist_name_here</Text>
                    </View>

                    {/* slider component only */}
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={this.state.trackLength}
                            trackStyle={{ width: Dimensions.get('screen').width - 50, height: 4 }}
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

                    {/* repeat, back, play, forward and shuffle button */}
                    <View style={{ width: '95%', height: 70, backgroundColor: '#', alignSelf: 'center', margin: 15, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Feather
                                name="repeat"
                                size={30}
                                color="#000000"
                                style={{ alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between' }} onPress={() => TrackPlayer.skipToPrevious()}>
                            <FontAwesome5 name="backward" size={32} color="#242320" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>

                        {!this.state.isPlaying && <TouchableOpacity style={{ flex: 1, height: 50, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => TrackPlayer.play().then(this.setState({ isPlaying: true }))}>
                            <FontAwesome5
                                name="play"
                                size={38}
                                color="#000000"
                                style={{ marginTop: 5 }}
                            />
                        </TouchableOpacity>}
                        {this.state.isPlaying && <TouchableOpacity style={{ flex: 1, height: 50, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => TrackPlayer.pause().then(this.setState({ isPlaying: false }))}>
                            <FontAwesome5
                                name="pause"
                                size={38}
                                color="#000000"
                                style={{ marginTop: 5 }}
                            />
                        </TouchableOpacity>}

                        <TouchableOpacity style={{ flex: 1, height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between' }} onPress={() => TrackPlayer.skipToNext()}>
                            <FontAwesome5 name="forward" size={32} color="#242320" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, height: 30, width: 10, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Entypo
                                name="shuffle"
                                size={30}
                                color="#000000"
                                style={{ alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* up next section */}
                    <Surface raised style={{ width: '95%', backgroundColor: 'black', alignSelf: 'center', height: 70, borderRadius: 10, marginTop: 5 }}>
                        <Card.Title
                            style={{ backgroundColor: 'white', flex: 1, borderRadius: 10 }}
                            title={'Song Name here'}
                            titleStyle={{ margin: 25, padding: 0 }}
                            left={() =>
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 10, alignSelf: 'flex-start', alignItems: 'flex-start' }}
                                    source={require('../../assets/images/temp.jpeg')}
                                />
                            }
                            leftStyle={{ alignItems: 'flex-start', margin: -10, padding: 0 }}
                            right={() => <Badge children={'Next'} size={30} style={{ width: 70, backgroundColor: 'black', borderRadius: 5, marginRight: 10 }} />}
                        />
                    </Surface>
                </View>
            </SafeAreaView>

        );
    }
}
