import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Style from './style';
import { Switch } from 'native-base';
import CustomTextInput from '../../../components/customcomponents/customtextinput'
export default class AddMedicalIllness extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFromSurgeries: this.props.navigation.state.params ? this.props.navigation.state.params.isFromSurgeries : false
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            headerTitle: <View>
                    <Text>{!params.isFromSurgeries ? 'Surgery/Procedures' : 'Add Medicalillness'}</Text>
            </View>,
            headerRight: <View>
                <TouchableOpacity
                    onPress={params.onExportClick}
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        }
    }

    render() {
        //#f5f5f5
        return (
            <View style={Style.containerStyle}>
                <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row', marginLeft:10,marginRight:15 }}>
                        {/* <Image style={Style.iconStyle} source={require('../../../components/Assets/Acknowledgement/search_icon.png')} />
                        <TextInput style={Style.textInputStyles}
                            placeholder={!this.state.isFromSurgeries?'Illness':'Search Procedure'}
                        >
                        </TextInput> */}
                        <CustomTextInput 
                        placeholder={!this.state.isFromSurgeries?'Illness':'Search Procedure'}
                        imageSource = {require('../../../components/Assets/Acknowledgement/search_icon.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={Style.textInputStyles}/>
                    </View>

                    <View style={{ flexDirection:'row', marginLeft:5, marginTop:13,marginRight:15}}>
                        {/* <Image style={Style.iconStyle} source={require('../../../components/Assets/common/calendar2.png')} />
                        <TextInput style={Style.textInputStyles}
                            placeholder={!this.state.isFromSurgeries?'Diagnosed Date':'Procedure Date'}
                        >
                        </TextInput> */}

                        <CustomTextInput 
                        placeholder={!this.state.isFromSurgeries?'Diagnosed Date':'Procedure Date'}
                        imageSource = {require('../../../components/Assets/common/calendar2.png')}
                        textCallback={(text) => { 
                            console.log(text);
                         }}
                        style={Style.textInputStyles}/>
                    </View>
                    {
                        !this.state.isFromSurgeries && <View style={{flexDirection:'row',marginLeft:18, marginTop:40, marginRight:15}}>
                            <Text style={{marginLeft:5, color:'black', fontSize:20 }}>Active</Text>
                            <Switch style={{position:'absolute', end: 0 }}>{true}</Switch>
                        </View>
                    }
                </View>
            </View>
        )
    }
}