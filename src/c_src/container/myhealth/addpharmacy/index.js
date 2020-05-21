import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils'
import { Switch } from 'native-base';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import CustomTextInput from '../../../components/customcomponents/customtextinput'

export default class AddPharmacy extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.mainRenderView}>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Select Pharmacy'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}
                        <CustomTextInput
                            placeholder={'Select Pharmacy'}
                            editable={false}
                            imageSource={require('../../../components/Assets/Acknowledgement/search_icon.png')}
                            textCallback={(text) => {
                                console.log(text);
                            }}
                            style={style.textInputStyles} />

                        <Image
                            source={require('../../../components/Assets/Picker/down.png')}
                            style={{ height: 16, width: 16, alignSelf: 'center', position: 'absolute', end: 0, marginTop: 20 }} />
                    </View>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./address.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Address'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput
                            placeholder={'Address'}
                            imageSource={require('./address.png')}
                            textCallback={(text) => {
                                console.log(text);
                            }}
                            style={style.textInputStyles} />
                    </View>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./contact_phone.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Phone'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput
                            placeholder={'Phone'}
                            imageSource={require('./contact_phone.png')}
                            textCallback={(text) => {
                                console.log(text);
                            }}
                            style={style.textInputStyles} />
                    </View>
                </View>
            </View>
        );
    }
}
