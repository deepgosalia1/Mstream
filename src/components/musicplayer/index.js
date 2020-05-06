/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons';
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
            <SafeAreaView style={styles.maincontainer}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Text style={styles.playlist_textcontainer}>PLAYLIST</Text>
                        <Text style={[styles.innertext, { fontSize: 15, fontWeight: '500', marginTop: 8 }]}>
                            Now Playing
                        </Text>
                    </View>

                    <View style={styles.coverContainer}>
                        <Image source={require('../../assets/images/temp.jpeg')} style={styles.cover} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 32 }}>
                        <Text style={[styles.innertext, { fontSize: 20, fontWeight: '500' }]}>Song Name</Text>
                        <Text style={[styles.playlist_textcontainer, { fontSize: 16, marginTop: 8 }]}>Jeremy Blake</Text>
                    </View>
                </View>

                <View style={{ margin: 32 }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#93A8B3"
                        onValueChange={seconds => this.changeTime(seconds)}
                    />
                    <View style={{ marginTop: -12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.innertext, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.innertext, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={32} color="#93A8B3" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={32}
                            color="#3D425C"
                            style={[styles.playButton, { marginLeft: 8 }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="forward" size={32} color="#93A8B3" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
