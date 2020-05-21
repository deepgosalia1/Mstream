import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils'
class AddMem extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={{ marginTop: 30,alignSelf:'center'}}>
                    <Image source={require('../../../components/Assets/common/profile.png')} style={{ height: 120, width: 120 }} />
                    <TouchableOpacity style={{ position: 'absolute', top: 75, left: 85, backgroundColor: THEME_COLOR, borderRadius: 60 }}>
                        <Image source={require('../../../components/Assets/common/mini_cam.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <View style={style.mainRenderView}>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/user.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'First Name'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View>
                    </View>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/user.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Last Name'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View>
                    </View>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/relationship.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%', flexDirection: 'row' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Relationship'}
                                placeholderTextColor='#a09d9d'
                            />
                            <Image
                                source={require('../../../components/Assets/Picker/down.png')}
                                style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 50 }} />
                        </View>
                    </View>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/phone.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Phone Number'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View>
                    </View>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/email.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Email ID'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default AddMem;