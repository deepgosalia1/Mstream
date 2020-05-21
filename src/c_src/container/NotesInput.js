import React, { Component } from 'react'
import {
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'

import * as colorUtils from '../components/utils/colorUtils'
import { FONT_FAMILY } from '../components/utils/fontUtils'
import Voice from 'react-native-voice'
import CustomPicker from '../components/customcomponents/custompicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextInput from '../components/customcomponents/customtextinput';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : -200

var prev = ''

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


export default class NotesInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : '',
            results: this.props.navigation.state.params ? [this.props.navigation.state.params.notesMessage] : [],
            finalResult: this.props.navigation.state.params ? [this.props.navigation.state.params.notesMessage] : [],
            recognising: false,
            title: this.props.navigation.state.params ? this.props.navigation.state.params.notesTitle : '',
        }
        props.navigation.setParams(({ title: this.state.title, noteSave: this.state.finalResult[0], keyboardShown: false, picker: false, header: 'Untitled' }))
        Voice.onSpeechResults = this.onSpeechResults.bind(this)
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: <TouchableOpacity onPress={() => {
                Keyboard.dismiss
                navigation.setParams({ picker: true })
            }}>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, marginTop: 5, fontWeight: 'bold' }}>{params.header || 'Untitled'}</Text>
                    <Image source={require('../components/Assets/Picker/down.png')} style={{ width: 20, height: 20, marginTop: 10, marginLeft: 5 }} />
                </View>
            </TouchableOpacity>,
            headerRight: !params.keyboardShown ? <TouchableOpacity onPress={() => {
                navigation.setParams({ notesMessage: params.noteSave })
                navigation.state.params.returnData && navigation.state.params.returnData(params.title, params.noteSave, params.noteIndex, params.sectionIndex)
                navigation.goBack()
            }}><Text style={{ color: '#3a3a3a', fontSize: 14, marginRight: 15 }}>Save</Text></TouchableOpacity> :
                <TouchableOpacity onPress={() => {
                    params.hideKeyboard()
                }}><Text style={{ color: '#3a3a3a', fontSize: 14, marginRight: 15 }}>Done</Text></TouchableOpacity>
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        this.props.navigation.setParams({
            hideKeyboard: this.hideKeyboard.bind(this),
            togglePicker: this.togglePicker.bind(this),
            setValue: this.setValue.bind(this)
        })
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners)
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
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
    }

    _keyboardDidShow() {
        //this.setState({ keyboardShown: true })
        this.props.navigation.setParams({ keyboardShown: true })
    }

    _keyboardDidHide() {
        //this.setState({ keyboardShown: false })
        this.props.navigation.setParams({ keyboardShown: false })
    }

    hideKeyboard() {
        Keyboard.dismiss()
    }
    onSpeechResults(e) {
        //data = this.state.results
        //console.log(e.value)
        this.setState({
            results: e.value,
            //finalResult: ret,
            recognising: false
        })

        Voice.isRecognizing().then(res => {
            console.log(res)
            setTimeout(() => {
                if (!res) {
                    var ret = this.state.finalResult
                    if (this.state.results[0]) {
                        ret[0] = ret[0] ? ret[0] + this.state.results[0] + ' ' : this.state.results[0] + ' '
                        this.setState({ finalResult: ret })
                        this.props.navigation.setParams({ noteSave: ret })
                    }
                }
            }, 1000)
        }
        ).catch(err => {
            console.log(err)
        })
        //console.log(this.state.finalResult)
    }

    startRecognizing = () => {
        this.setState({
            results: [],
            recognizing: true
        })
        Voice.start('en-US')
    }

    stopRecognizing = () => {
        Voice.stop()
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} >

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{ height: '100%' }}>

                        <View style={{ margin: 15, backgroundColor: 'white', height: '75%' }}>
                            <Image source={require('../components/Assets/common/attachment_icon.png')} style={{ width: 40, height: 40, backgroundColor: 'transparent', top: -12, right: 10, position: 'absolute' }} />
                            <TouchableOpacity
                                style={{ position: 'absolute', bottom: 15, right: 15, width: 50, height: 50 }}
                                onPressIn={() => {
                                    this.startRecognizing()
                                }}
                                onPressOut={() => {
                                    this.stopRecognizing()
                                }}>
                                <Image source={require('../components/Assets/common/notes_record_icon.png')} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                            <TextInput
                                style={style.textInput}
                                multiline={true}
                                placeholder='Take notes...'
                                underlineColorAndroid='transparent'
                                value={this.state.finalResult[0]}
                                onChangeText={(text) => {
                                    this.setState({ finalResult: [text] })
                                    this.props.navigation.setParams({ noteSave: text })
                                }}>
                            </TextInput>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: 'white', height: '100%' }}>
                            <CustomTextInput
                                placeholder='Title'
                                imageSource={require('../components/Assets/common/documents_dr_icon.png')}
                                value={this.state.title}
                                textCallback={(text) => {
                                    this.setState({
                                        title: text
                                    })
                                    this.props.navigation.setParams({
                                        title: text
                                    })
                                }}
                            />
                            {/* <Image source={require('../components/Assets/common/documents_dr_icon.png')} style={{ width: 30, height: 30, marginLeft: 20 }} />
                            <TextInput style={{ color: colorUtils.THEME_COLOR, fontFamily: FONT_FAMILY, fontSize: 18, marginLeft: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }} placeholder={'Title'} /> */}
                        </View>
                        {this.props.navigation.state.params ? this.props.navigation.state.params.picker && <CustomPicker
                            pickerData={optionTypes}
                            togglePicker={this.togglePicker}
                            setValue={this.setValue}
                            selectedValue={this.props.navigation.state.params.header}
                        /> : console.log('Waiting for params')}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const style = StyleSheet.create({
    textInput: {
        fontFamily: FONT_FAMILY,
        padding: 15,
        marginTop: 30,
        width: '100%',
        height: '60%',
        marginBottom: 70,
        fontSize: 16
    }
})
