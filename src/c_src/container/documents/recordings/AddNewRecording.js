import React, { Component } from 'react'
import {
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
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
    Keyboard
} from 'react-native'
import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils'
import * as fontUtils from '../../../components/utils/fontUtils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Slider from 'react-native-slider'
import CustomPicker from '../../../components/customcomponents/custompicker';
// import WaveForm from 'react-native-audiowaveform';


//const handleTimerComplete = () => alert("custom completion function");
const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : -200
var width = Dimensions.get('window').width
const count = 0

var optionTypes =
    [
        {
            "value": "Untitled",
            "text": "Untitled"
        },
        {
            "value": "All",
            "text": "All"
        }, {
            "value": "Physician",
            "text": "Physician"
        }, {
            "value": "Patient",
            "text": "Patient"
        }
    ]

export default class AddNewRecording extends Component {
    constructor(props) {
        super(props);
        date = new Date(),
            this.filename = '' + date.getFullYear() + date.getMonth() + date.getDate() + "-" + date.getHours() + date.getMinutes() + date.getSeconds() + ".aac",

            this.state = {
                stopwatchStart: false,
                stopwatchReset: false,
                currentTime: 0.0,
                recording: false,
                paused: true,
                stoppedRecording: false,
                finished: false,
                audioPath: AudioUtils.DocumentDirectoryPath + '/' + this.filename,
                hasPermission: undefined,
                playing: false,
                progress: 0,
                duration: 0,
                titlePresent:true,
                recordingtitle: 'Untitled_' + this.filename.split('.')[0],
                shouldSave: false,
                // totalDuration: 90000,
                timerStart: false,
                timerReset: false

            };
        this.sound = null
        this.props.navigation.setParams({ filename: this.state.audioPath, picker: false, header: 'Untitled' })

        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: 
            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center',alignItems:'center' }}>
            <TouchableOpacity onPress={() => {
                Keyboard.dismiss
                navigation.setParams({ picker: true })
            }}>
                 <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, marginTop: 5, fontWeight: 'bold' }}>{params.header || 'Untitled'}</Text>
                    <Image source={require('../../../components/Assets/Picker/down.png')} style={{ width: 20, height: 20, marginTop: 10, marginLeft: 5 }} />
                </View>
            </TouchableOpacity>
            </View>,
            headerRight: <TouchableOpacity onPress={() => {
                params.saveClicked()
            }}><Text style={{ color: '#3a3a3a', fontSize: 14, marginRight: 15 }}>Save</Text></TouchableOpacity>
        }
    }


    componentDidMount() {
        this._checkPermission().then((hasPermission) => {
            this.setState({ hasPermission });
            if (!hasPermission) return;
            this.prepareRecordingPath(this.state.audioPath);
            AudioRecorder.onProgress = (data) => {
                this.setState({ currentTime: Math.floor(data.currentTime) });
            };
            AudioRecorder.onFinished = (data) => {
                if (Platform.OS === 'ios') {
                    this._finishRecording(data.status === "OK", data.audioFileURL);
                }
            };
        });

        this.props.navigation.setParams({
            togglePicker: this.togglePicker.bind(this),
            setValue: this.setValue.bind(this),
            saveClicked: this.saveClicked.bind(this)
        })
        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        // this.props.navigation.setParams({
        //     hideKeyboard: this.hideKeyboard.bind(this),
        //     togglePicker: this.togglePicker.bind(this),
        //     setValue: this.setValue.bind(this)
        // })
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

    _seek(percentage) {
        if (!this.state.stoppedRecording) {
            return;
        }

        this.lastSeek = Date.now();
        let position = percentage * this.state.final;
    }
    _shouldUpdateProgressBar() {
        // Debounce progress bar update by 200 ms
        return Date.now() - this.lastSeek > 200;
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

    async _pause() {
        if (!this.state.recording) {
            console.warn('Can\'t pause, not recording!');
            return;
        }
        console.log('Recording Paused')
        try {
            const filePath = await AudioRecorder.pauseRecording();
            this.setState({ paused: true });
        } catch (error) {
            console.error(error);
        }
    }

    async _resume() {
        if (!this.state.paused) {
            console.warn('Can\'t resume, not paused!');
            return;
        }
        console.log('Resume recording')
        try {
            await AudioRecorder.resumeRecording();
            this.setState({ paused: false });
        } catch (error) {
            console.error(error);
        }
    }

    async _stop() {
        if (!this.state.recording) {
            console.warn('Can\'t stop, not recording!');
            return;
        }
        this.setState({ stoppedRecording: true, recording: false, paused: true });
        try {
            const filePath = await AudioRecorder.stopRecording();

            if (Platform.OS === 'android') {
                this._finishRecording(true, filePath);
                console.log('Stopped')
            }
            return filePath;
        } catch (error) {
            console.error(error);
        }
    }

    async _play() {
        if (this.state.recording) {
            await this._stop();
        }
        this.setState({ playing: true, paused: false })
        setInterval(() => {
            this.sound.getCurrentTime((seconds) =>
                this.setState({ progress: seconds }
                ))
        }, 100)
        this.sound.play((success) => {
            if (success) {
                this.onPause()
                this.sound.setCurrentTime(0)
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    }

    async _record() {
        if (this.state.recording) {
            console.warn('Already recording!');
            return;
        }
        if (!this.state.hasPermission) {
            console.warn('Can\'t record, no permission granted!');
            return;
        }
        if (this.state.stoppedRecording) {
            this.prepareRecordingPath(this.state.audioPath);
        }
        this.setState({ recording: true, paused: false });
        try {
            const filePath = await AudioRecorder.startRecording();
            console.log('Started recording')
        } catch (error) {
            console.error(error);
        }
    }

    _finishRecording(didSucceed, filePath) {
        //var duration = this.state.currentTime
        //this.setState({ finished: didSucceed, duration: duration });
        console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
        this.sound = new Sound(this.state.audioPath, '', (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            }
            else {
                this.setState({ duration: this.sound.getDuration(), finished: true })
                this.state.titlePresent && this.state.finished && this.setState({ shouldSave: true })
                console.log(this.state.audioPath)
                console.log(this.state.duration)
            }
        });
    }
    onPause = () => {
        this.setState({ paused: true, playing: false })
        this.sound.pause()
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
        count = count + 1
    }


    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true, pause: false });
        this._stop()
    }
  
    getFormattedTime(time) {
        this.currentTime = time;
    }
    toggleTimer() {
        this.setState({ timerStart: !this.state.timerStart, timerReset: false });
    }

    resetTimer() {
        this.setState({ timerStart: false, timerReset: true });
    }

    togglePicker = () => {
        this.props.navigation.setParams({
            picker: false
        })
    }

    setValue = (text) => {
        this.props.navigation.setParams({
            header: text
        })
        this.setState({
            recordingtitle:text+'_'+this.filename.split('.')[0],
        })
    }

    saveClicked() {
        const { params } = this.props.navigation.state
        this.state.shouldSave ?
            this.props.navigation.goBack() &&
            (params.addFile ? params.addNewFile(params.filename, this.state.recordingtitle) : console.log()) &&
            this.resetStopwatch && this._stop()
            : Alert.alert('Please record a file and enter a title for it!')
    }
    getdurationRecording(){
        // mins=0,seconds=0,hours=0
        //     if(this.state.progress>=60){
        //     seconds=this.state.progress
        //     mins=mins+1
        //     seconds=seconds-60
            
        //     return (parseInt(this.state.progress))
        //     if(mins>60)
        //     hours=hours+1
        //     mins=mins-60
        //     seconds=seconds-10
        //     }
        //     else{
        //         seconds=this.state.progress
        //         mins=0
        //         return(this.state.progress<10?'00:00:0'+parseInt(this.state.progress):'00:00:'+parseInt(this.state.progress))
        //     }
        d = parseInt(this.state.progress)
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
       
        var hDisplay = h > 0 ? (h<10?'0'+h:h) : "00:";
        var mDisplay = m > 0 ? (m<10?'0'+m:m) : "00:";
        var sDisplay = s > 0 ? (s<10?'0'+s:s) : "00";
        return hDisplay+mDisplay+sDisplay
            console.log(this.state.progress)
      
            
    }
    getdurationRecordingTimer(){
        d = parseInt(this.state.duration)
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? (h<10?'0'+h:h) : "00:";
        var mDisplay = m > 0 ? (m<10?'0'+m:m) : "00:";
        var sDisplay = s > 0 ? (s<10?'0'+s:s) : "00";
        return hDisplay+mDisplay+sDisplay
            console.log(this.state.progress)
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={keyboardVerticalOffset} >

            <KeyboardAvoidingView behavior='padding' style={{ flex: 1, height: '100%', backgroundColor: 'white' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardVerticalOffset={keyboardVerticalOffset}  >
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '75%', marginTop: 50 }}>
                        {this.state.stoppedRecording ?
                            <View>

                                {/* <Text style={{ marginTop: 10, color: '#514F50', fontFamily: fontUtils.FONT_FAMILY, alignSelf: 'center' }}>RECORDING STOPPED</Text> */}
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <TouchableOpacity onPress={() => { this.state.paused ? this._play() && this.toggleTimer() : this.onPause() && this.toggleTimer() }}>
                                        <Image style={{ height: 40, width: 40, margin: 10, alignSelf: 'center' }} source={this.state.playing ? require('./Pause_icon.png') : require('./stop_icon.png')} />
                                    </TouchableOpacity>
                                    <Slider
                                        style={{ flex: 1, alignSelf: 'center', marginRight: 10, flexDirection: 'column' }}
                                        value={this.state.progress}
                                        minimumTrackTintColor={colorUtils.THEME_COLOR}
                                        maximumTrackTintColor={'#62E1D4'}
                                        minimumValue={0}
                                        maximumValue={this.state.duration}
                                        thumbTintColor={colorUtils.THEME_COLOR}
                                        onValueChange={(percentage) => this._seek(percentage)}
                                    />

                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width:width ,backgroundColor:'white',marginTop:-10}}>
                                    <Text style={{ marginLeft: 50 }}>{this.getdurationRecording()}</Text>
                                  
                                   <Text style={{position: 'absolute', right: 20 }}>{this.getdurationRecordingTimer()}</Text>
                                   
                                </View>
                                {!this.state.paused ? <Image source={require('./wave.gif')} style={{ height: 150, width: 400, marginTop: 20 }} /> : <Image source={require('./wave.png')} style={{ marginTop: 20, height: 150, width: 400 }} />}
                            </View>
                            : <View style={{ alignItems: 'center' }}>

                                <Stopwatch secs start={this.state.stopwatchStart}
                                    reset={this.state.stopwatchReset}
                                    options={options} />

                                <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: fontUtils.FONT_FAMILY, color: '#514F50' }}>Standard Quality</Text>
                                {this.state.stopwatchStart && this.state.recording ? <Text style={{ color: '#514F50', fontFamily: fontUtils.FONT_FAMILY, marginTop: 15 }}>Recording</Text> : <Text></Text>}
                                {count > 1 && this.state.paused && <Text style={{ color: '#514F50', fontFamily: fontUtils.FONT_FAMILY }}>Paused</Text>}
                                {!this.state.paused ?
                                    <Image source={require('./wave.gif')} style={{ height: 150, marginTop: 50, width: 400 }} /> : <Image source={require('./wave.png')} style={{ height: 150, marginTop: 50, width: 400 }} />}
                            </View>}
                            {!this.state.stoppedRecording && <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => {
                                    !this.state.recording ? this._record() : (this.state.paused && !this.state.finished ? this._resume() : this._pause())
                                    this.toggleStopwatch()
                                }}>
                                    {console.log(this.state.stopwatchStart ? "Start" : "Stop")}
                                    <Image source={!this.state.paused ? require('../../../components/Assets/common/Pause_icon2.png') : require('../../../components/Assets/common/record_icon.png')} style={{ marginTop: 50, padding: 20, width: 70, height: 70 }} />
                                </TouchableOpacity>
                            </View>}

                                    <View style={{flexDirection:'row',backgroundColor:'white',marginLeft:240,marginTop:-30}}>
                            {!this.state.stoppedRecording && this.state.recording&& <TouchableOpacity onPress={this.resetStopwatch}> 
                                {/* <Image source={require('./stop_icon.png')} style={{ marginTop: 55, padding: 20,marginLeft:20, width: 60, height: 60 }} /> */}
                                <Text style={{ fontSize:14 }}>DONE</Text>
                            </TouchableOpacity>}
                            </View>
                      
                    </View>
                </ScrollView>
                <View style={{ height: '25%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: 'white', borderTopColor: '#514F50' }}>
                    <Image source={require('../../../components/Assets/common/documents_dr_icon.png')} style={{ width: 30, height: 30, marginLeft: 20, marginBottom: 15 }} />
                    <TextInput
                        style={{
                            color: colorUtils.THEME_COLOR,
                            fontFamily: FONT_FAMILY, fontSize: 20,
                            marginLeft: 20,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 15
                        }}
                        placeholder={'Title'}
                        value={this.state.recordingtitle}
                        onChangeText={(text) => {
                            this.state.recordingtitle ? this.setState({ recordingtitle: text }) : this.setState({ recordingtitle: text, titlePresent: true })
                            this.state.titlePresent && this.state.finished && this.setState({ shouldSave: true })
                        }} />
                </View>
                {this.props.navigation.state.params ? this.props.navigation.state.params.picker && <CustomPicker
                    pickerData={optionTypes}
                    togglePicker={this.togglePicker}
                    setValue={this.setValue}
                    selectedValue={this.props.navigation.state.params.header}

                /> : console.log('Waiting for params')}

            </KeyboardAvoidingView>

        )
    }
}

const options = {
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,

    },
    text: {
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 44,
        color: '#514F50',

    }
};
const options2 = {
    container: {
        marginTop: -25,
        //   marginLeft:60,
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
    },
    text: {
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14,
        color: '#514F50'
    }
};
const options3 = {
    container: {
        // marginLeft:width-200,
        marginTop: -25,
        right: 0,
        marginLeft: 180,
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
    },
    text: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14,
        color: '#514F50'
    }
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b608a",
    },
    controls: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    button: {
        padding: 20
    },
    disabledButtonText: {
        color: '#eee'
    },
    buttonText: {
        fontSize: 20,
        color: "red"
    },
    activeButtonText: {
        fontSize: 20,
        color: "green"
    }

});
