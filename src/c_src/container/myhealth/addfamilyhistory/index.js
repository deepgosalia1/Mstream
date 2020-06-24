import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils'
import { Switch } from 'native-base';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import CustomTextInput from '../../../components/customcomponents/customtextinput'

export default class AddFamilyHistory extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.mainRenderView}>
                    
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./relationshipdropdown.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%', flexDirection: 'row' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Select Relationship'}
                                placeholderTextColor='#a09d9d'
                            />
                            <Image
                                source={require('../../../components/Assets/Picker/down.png')}
                                style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 50 }} />
                        </View> */}

                         <CustomTextInput 
                        placeholder={'Select Relationship'}
                        imageSource = {require('./relationshipdropdown.png')}
                        multiline = {true}
                        editable  = {false}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>

                        <Image
                                source={require('../../../components/Assets/Picker/down.png')}
                                style={{ height: 16, width: 16, alignSelf: 'center',position:'absolute',end:0,marginTop:20}} />
                    </View>
                    <View style={style.renderViewStyle}>
                        {/* <Image
                            style={style.renderViewImageStyle}
                            source={require('./illnesshistory.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'illness History'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View> */}

                        <CustomTextInput 
                        placeholder={'illness History'}
                        imageSource = {require('./illnesshistory.png')}
                        multiline = {true}
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
