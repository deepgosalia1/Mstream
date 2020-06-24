import React, { Component } from 'react'
import { Text, Image, View, ScrollView, Platform } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import { Icon } from 'react-native-elements';
import Health from '../../container/Health'

import * as colorUtils from '../../components/utils/fontUtils'
import * as fontUtils from '../../components/utils/fontUtils'

export default class HealthData extends Component {

    // constructor(props) {
    //     super(props);
    //     //const { navigation } = this.props.navigation;
    //     this.state = {
    //         loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
    //     }
    // }

    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         BackButtonClicked: this.BackButtonClicked.bind(this)
    //     })
    // }
    // BackButtonClicked() {
    //     //Alert.alert('center clicked')
    //     this.props.navigation.goBack()
    //     let customEventText = this.state.loggedInUser == 'patient' ? 'myHealth' : 'paitent';
    //     //while (customEventText != '') {
    //         EventRegister.emit('sideMenuClickedEvent', customEventText);
    //         this.props.navigation.navigate('DrawerOpen')
    //     }
    

    // static navigationOptions = ({ navigation }) => {
    //     const { params = {} } = navigation.state;
    //     return {
    //         header: <View style={{ backgroundColor: '#fff' }}><View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}><Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ marginLeft: 10, fontSize: 20, color: '#3a3a3a' }}
    //             onPress={() => {params.BackButtonClicked()}
    //             }
    //         />
    //             <Text style={{ marginLeft: 130, color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Health</Text></View>
    //             <View style={{ backgroundColor: 'white' }}><Health /></View></View>,
    //     }
    // }

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row', padding: 5, backgroundColor: '#d9d9d9' }}>

                <View style={{ flex: 0.5, flexDirection: 'column', marginRight: 5, backgroundColor: 'white', height: '52%' }}>
                    <Image style={{ width: '100%', height: '35%' }} source={require('../../components/Assets/ProfileNew/ppassword.png')} />
                    <Text style={{ paddingLeft: 10, marginTop: 10, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20, fontWeight: '600' }}>{'My Activity'}</Text>
                    <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20 }}>{'8,200'}</Text>
                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{'Steps'}</Text>
                    <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20 }}>{'10.3KM'}</Text>
                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{'Distance'}</Text>
                </View>
                <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'white', height: '52%' }}>
                    <Image style={{ width: '100%', height: '35%' }} source={require('../../components/Assets/ProfileNew/ppassword.png')} />
                    <Text style={{ paddingLeft: 10, marginTop: 10, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20, fontWeight: '600' }}>{'Blood Pressure'}</Text>
                    <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20 }}>{'130/80'}
                        <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 15 }}> {'mm/Hg'}</Text>
                    </Text>
                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{'Systolic'}</Text>
                    <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20 }}>{'100'}
                        <Text style={{ paddingLeft: 10, marginTop: 15, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 15 }}>{'Beats/min'}
                        </Text>
                    </Text>
                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{'Pulse'}</Text>
                </View>
            </View>




        )
    }
}