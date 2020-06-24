import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity} from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils'
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import CustomTextInput from '../../../components/customcomponents/customtextinput'

export default class AddMedicalPortal extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.mainRenderView}>
                    
                    <View style={style.renderViewStyle}>

                        <CustomTextInput 
                        placeholder={'Hospital Name'}
                        imageSource = {require('./hospitalName.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    </View>
                    <View style={style.renderViewStyle}>
                        <CustomTextInput 
                        placeholder={'Hospital Location'}
                        imageSource = {require('./hospitallocation.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    </View>

                    <View style={style.renderViewStyle}>
                        <CustomTextInput 
                        placeholder={'Portal Link'}
                        imageSource = {require('./portallink.png')}
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
