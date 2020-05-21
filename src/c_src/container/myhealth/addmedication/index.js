import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity,TextInput} from 'react-native'
import * as colorUtils from '../../../components/utils/colorUtils';
import * as fontUtils from '../../../components/utils/fontUtils';
import Style from './style';

export default class AddMedication extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1,flexDirection:'column'}}>
                <Text style={{marginTop:30,marginLeft:55,color:'#3f3f3f',fontFamily:fontUtils.FONT_FAMILY,fontSize:16,fontWeight:'400'}}>Medicine Name</Text>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop:5}}>
                    <Image style={Style.leftImageStyle} source={require('./search.png')} />
                    <TextInput style={Style.textInputStyles}
                        placeholder={'Enter Medication'}
                        color={colorUtils.THEME_COLOR}>Tyleon
                    </TextInput>
                    {/* <Image style={{position:'absolute',end:0,marginRight:20}} source={require('./medicineName.png')} /> */}
                </View>
            </View>
        )
    }
}