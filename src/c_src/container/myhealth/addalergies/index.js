import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Switch,
    TextInput
} from 'react-native';
import style from './style';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import CustomTextInput from '../../../components/customcomponents/customtextinput'

export default class AddAlergies extends Component {

    constructor(props) {
        super(props)    
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.mainRenderView}>
                    {/* <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        />
                        <View style={{ borderBottomWidth: 0.7, width: '88%' }}>
                            <TextInput
                                style={style.renderViewTextInputStyle}
                                underlineColorAndroid='transparent'
                                placeholder={'Search for alergies'}
                                placeholderTextColor='#a09d9d'
                            />
                        </View>
                    </View> */}

                    <CustomTextInput 
                        placeholder={'Search for alergies'}
                        imageSource = {require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={style.textInputStyles}/>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',top:40}}>
                        <Text style={{color:'black',fontSize:20,fontFamily:FONT_FAMILY,marginLeft:40}}>Active</Text>
                        <Switch style={{marginRight:10}}></Switch>
                    </View>
                </View>
            </View>
        )
    }
}