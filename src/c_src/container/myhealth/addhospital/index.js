import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils'
import { Switch } from 'native-base';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import CustomTextInput from '../../../components/customcomponents/customtextinput'

export default class AddHospital extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.mainRenderView}>
                    
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        /> */}

                        <CustomTextInput 
                        placeholder={'Select Hospital'}
                        imageSource = {require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        editable    = {false}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>

                        <Image
                                source={require('../../../components/Assets/Picker/down.png')}
                                style={{ height: 16, width: 16, alignSelf: 'center',position:'absolute',end:0}}/>
                        {/* <View style={{ borderBottomWidth: 0.7, width: '88%', flexDirection:'row'}}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Select Hospital'}
                                placeholderTextColor='#a09d9d'
                            />
                            <Image
                                source={require('../../../components/Assets/Picker/down.png')}
                                style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 50 }} />
                        </View> */}
                    </View>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./calender_icon.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Diagnosis Date'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput 
                        placeholder={'Diagnosis Date'}
                        imageSource = {require('./calender_icon.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    </View>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./calender_icon.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Admission Date'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput 
                        placeholder={'Admission Date'}
                        imageSource = {require('./calender_icon.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    </View>

                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./calender_icon.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Discharge Date'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput 
                        placeholder={'Discharge Date'}
                        imageSource = {require('./calender_icon.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    </View>
                </View>
            </View>
        );
    }
}
