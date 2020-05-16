import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    Platform,
    PermissionsAndroid,
    SectionList
} from 'react-native'
import Style from './styles'
import * as colorUtils from '../../../components/utils/colorUtils'
import * as fontUtils from '../../../components/utils/fontUtils'
import Slider from 'react-native-slider'
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';
import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

var documentRecordings = require('./recordings.list.json');



export default class Recordings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recordingsJSON: documentRecordings,
            //value: 10.10,
            currentTime: 0.0,
            isPlaying: false,
            //disabled: false,
            progress: 0,
            //isAny: false
            paused: true,
            finished: false,
            playing: false,
            audioPath: '',
            duration: 0
        }
        this.sound = null

    }
    prepareRecordingPath(audioPath) {
        AudioRecorder.prepareRecordingAtPath(audioPath, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low",
            AudioEncoding: "aac",
            AudioEncodingBitRate: 32000
        });
    }
    componentDidMount() {
        // this._checkPermission().then((hasPermission) => {
        //     this.setState({ hasPermission });

        //     if (!hasPermission) return;

        //     this.prepareRecordingPath(this.state.audioPath);
        AudioRecorder.onProgress = (data) => {
            this.setState({ currentTime: Math.floor(data.currentTime) });
        };


        //     AudioRecorder.onFinished = (data) => {
        //         // Android callback comes in the form of a promise instead.
        //         if (Platform.OS === 'ios') {
        //             this._finishRecording(data.status === "OK", data.audioFileURL);
        //         }
        //     };

        // });
        this.props.navigation.setParams({
            addNewFile: this.addNewFile.bind(this)
        })
    }

    _finishRecording(didSucceed, filePath) {
        var duration = this.state.currentTime
        this.setState({ finished: didSucceed, duration: duration });
        console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
        console.log(this.state.currentTime)
        //this.setState({ duration: this.state.currentTime })
        console.log(this.state.duration)

    }
    _checkPermission() {
        if (Platform.OS !== 'android') {
            return Promise.resolve(true);
        }

        const rationale = {
            'title': 'Microphone Permission',
            'message': 'AudioExample needs access to your microphone so you can record audio.'
        };

        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
            .then((result) => {
                console.log('Permission result:', result);
                return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
            });
    }

    componentWillMount() {
        // this.player = null
        // //this.recorder = null
        // this.lastSeek = 0
        // //this._reloadPlayer();
        // //this._reloadRecorder();
        // this._progressInterval = setInterval(() => {
        //     if (this.player) console.log(this.player.currentTime)

        // }, 1000);
        // this._progressInterval = setInterval(() => {
        //     if (this.player && this.state.isPlaying && this._shouldUpdateProgressBar()) {// && !this._dragging) {
        //         console.log('hii')
        //         this.setState({ progress: Math.max(0, this.player.currentTime) / this.player.duration });
        //     }
        // }, 100);
    }

    componentWillUnmount() {
        var docData = this.state.recordingsJSON
        docData.map((each) => {
            each.data.map((eachinner) => {
                eachinner.isActiveAudio = false
            })
        })
        this.setState({ recordingsJSON: docData })
        clearInterval(this._progressInterval)
    }
    _seek(percentage) {
        if (!this.state.stoppedRecording) {
            return;
        }

        this.lastSeek = Date.now();
        let position = percentage * this.state.final;
    }

    // _seek(percentage) {
    //     if (!this.player) {
    //         return;
    //     }

    //     this.lastSeek = Date.now();

    //     let position = percentage * this.player.duration;

    //     this.player.seek(position);
    // }
    _shouldUpdateProgressBar() {
        // Debounce progress bar update by 200 ms
        return Date.now() - this.lastSeek > 200;
    }
    async _play() {
        if (this.state.recording) {
            await this._stop();
        }
        this.setState({ playing: true, paused: false })
        setInterval(() => {
            this.sound.getCurrentTime((seconds) =>
                this.setState({ progress: seconds }))
        }, 100)
        //setTimeout(() => {
        this.sound.play((success) => {
            if (success) {
                this.onPause()
                this.sound.setCurrentTime(0)
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
        //}, 100);
    }
    onPause = () => {

        this.setState({ paused: true, playing: false })
        this.sound.pause()
    }
    _renderSeparator = () => {
        return (
            <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }} />
        )
    }

    // onPress = () => {

    //     this.sound.play()
    //     {
    //         this.state.finished ? this.setState({ playing: false }) &&
    //             this.sound.setCurrentTime(0) : console.log("not finished")
    //     }
    //     //     this.setState({ disabled: false });
    //     // });
    // }


    // _reloadPlayer() {
    //     if (this.player) {
    //         this.player.destroy();
    //     }

    //     this.player = new Player('myfile.aac', {
    //         autoDestroy: false
    //     }).prepare((err) => {
    //         if (err) {
    //             console.log('error at _reloadPlayer():');
    //             console.log(err);
    //         } else {
    //             this.player.looping = this.state.loopButtonStatus;
    //         }

    //         //this._updateState();
    //     });
    // }

    addNewFile(filename, recordingtitle) {
        var newData = this.state.recordingsJSON
        newData[1].data.push({
            "recordingTitle": recordingtitle,
            "recordingFile": filename,
            "recordingBy": "By Ellen C. Henry",
            "time": "10/02/2018 10:10 AM",
            "recordingTime": "10:11 min",
            "isActiveAudio": false
        })
        this.setState({ recordingsJSON: newData })
    }

    renderSectionItem = (item) => {

        let recordingData = item;
        return (
            <TouchableOpacity disabled={item.isActiveAudio} style={Style.sectionItemStyle} onPress={() => {
                var docData = this.state.recordingsJSON
                docData.map((each) => {
                    each.data.map((eachinner) => {
                        eachinner.isActiveAudio = false
                    })
                })

                this.sound = new Sound(recordingData.recordingFile, recordingData.recordingFile=='sample.aac' ? Sound.MAIN_BUNDLE : '', (error) => {
                    if (error) {
                        console.log('failed to load the sound', error);
                    }
                    else {
                        this.setState({ duration: this.sound.getDuration() })
                    }
                });
                console.log(this.state.duration)
                console.log(recordingData.recordingFile)
                item.isActiveAudio = true
                this.setState({ recordingsJSON: docData, isPlaying: false })

            }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Style.recordingTitleStyle}>{recordingData.recordingTitle}</Text>
                    <Text style={Style.recordingByStyle}>{recordingData.recordingBy}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={Style.recordingDateStyle}>{recordingData.time}</Text>
                        <Text style={Style.recordTimeStyle}>10.10 min</Text>
                    </View>

                    {recordingData.isActiveAudio && <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.state.paused ? this._play() : this.onPause() }}>
                                <Image style={{ height: 40, width: 40, margin: 5, marginLeft: 0, alignSelf: 'center' }} source={this.state.playing ? require('./Pause_icon.png') : require('./stop_icon.png')} />
                            </TouchableOpacity>
                            <Slider
                                style={{ flex: 1, alignSelf: 'center', marginRight: 10, flexDirection: 'column' }}
                                value={this.state.progress}
                                minimumTrackTintColor={colorUtils.THEME_COLOR}
                                maximumTrackTintColor={'#62E1D4'}
                                minimumValue={0}
                                maximumValue={this.state.duration}
                                thumbTintColor={colorUtils.THEME_COLOR}
                                //disabled={true}
                                onValueChange={(percentage) => {
                                    // this.state.playing ? this.onPause()
                                    // && this.sound.setCurrentTime(percentage) && this._play() :
                                    this.sound.setCurrentTime(percentage)
                                    // this._seek(percentage)
                                    console.log(percentage)}}
                            //onValueChange={value => this.setState({ position })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ marginLeft: 5 }}>0:00</Text>
                            <Text>
                                {recordingData.recordingTime}
                            </Text>
                        </View>
                    </View>
                        // recordingData.isActiveAudio && <View style={{flex:1}}>
                        // <View style={{flexDirection:'row', flex : 1}}>  
                        //  <Image style={{marginLeft:5,marginRight:5,marginTop:5,width:25,height:25}} source={require('./playrecording.png')}/>
                        // <Slider
                        //         value={this.state.value}
                        //         minimumTrackTintColor={THEME_COLOR}
                        //         maximumTrackTintColor={'#62E1D4'}
                        //         minimumValue={0}
                        //         maximumValue={10}
                        //         thumbTintColor={THEME_COLOR}	
                        //         onValueChange={value => this.setState({ value })}
                        //     />
                        //   </View>  
                        //   <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
                        //         <Text style={{marginLeft:5}}>
                        //         0:00
                        //     </Text>
                        //     <Text>
                        //         {this.state.value}
                        //     </Text>
                        // </View> 
                        // </View>
                    }

                </View>
            </TouchableOpacity>
        )

    }
    render() {
        return (
            <View style={Style.containerStyle}>
                {/* <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'red' }}
                    onPress={() => {
                        this._toggleRecord()
                        //Alert.alert('hii')
                    }} 
                // onPressIn={() => {
                //     this.recorder=new Recorder("data",{
                //         bitrate: 256000,
                //         channels: 2,
                //         sampleRate: 44100,
                //         quality: 'max'
                //         //format: 'ac3', // autodetected
                //         //encoder: 'aac', // autodetected
                //       }).record()
                //     //this.recorder.isRecording(Alert.alert('recc'))
                // }}
                // onPressOut={() => {
                //     this.recorder.stop()
                // }}
                // />
                <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'blue' }} onPress={() => {
                    this.player = new Player("myfile.aac").play()
                }} />*/}
                <SectionList
                    renderItem={({ item }) => {
                        return this.renderSectionItem(item)
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={Style.sectionTextStyle}>
                            {title}
                        </Text>
                    )}
                    backgroundColor={'white'}
                    sections={this.state.recordingsJSON}
                    keyExtractor={(item, index) => item + index}
                />

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => { this.props.navigation.navigate('newRecording', { addNewFile: this.props.navigation.state.params.addNewFile }) }}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
