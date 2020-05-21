import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, Platform } from 'react-native'
import Health from '../Health';
import jsondata from './data'
import { EventRegister } from 'react-native-event-listeners'
import { Icon } from 'react-native-elements';

import * as colorUtils from '../../components/utils/colorUtils';
import * as fontUtils from '../../components/utils/fontUtils';

export default class Medication extends Component {

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
    //     EventRegister.emit('sideMenuClickedEvent', customEventText);
    //     this.props.navigation.navigate('DrawerOpen')
    // }


    // static navigationOptions = ({ navigation }) => {
    //     const { params = {} } = navigation.state;
    //     return {
    //         header: <View style={{ backgroundColor: '#fff' }}><View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}><Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ marginLeft: 10, fontSize: 20, color: '#3a3a3a' }}
    //             onPress={() => { params.BackButtonClicked() }
    //             }
    //         />
    //             <Text style={{ marginLeft: 130, color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Health</Text></View>
    //             <View style={{ backgroundColor: 'white' }}><Health /></View></View>,
    //     }
    // }
    render() {
        return (
            <View style={{ backgroundColor: '#d9d9d9', marginBottom: 5 }}>
                <FlatList
                    data={jsondata}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10, paddingTop: 10 }}>
                                <View style={{ flex: 0.5, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingBottom: 10, paddingTop: 5 }}>
                                    <Image source={require('../../components/Assets/common/add_memeber.png')} style={{ width: 40, height: 40, marginLeft: 10, marginRight: 10, alignSelf: 'center' }} />
                                    <Text style={{ color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 20 }}>{item.name}</Text>
                                    <Text style={{ color: 'grey', fontFamily: fontUtils.FONT_FAMILY, fontSize: 14 }}>{'\n'}{item.type}

                                    </Text>
                                    <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 15, alignContent: 'flex-end', marginRight: 15 }}>
                                        <Text style={{ flex: 1, alignSelf: 'flex-end', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#eee', color: '#000' }}>{item.amount}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 20, }}>
                                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, marginRight: 10, fontSize: 16 }}>{item.time}</Text>
                                    <Text style={{ flex: 1, alignContent: 'flex-end', fontFamily: fontUtils.FONT_FAMILY, paddingTop: 4, fontSize: 12 }}>{item.duration}</Text>
                                </View>
                                <View style={{ backgroundColor: '#edf1f0', flex: 1, flexDirection: 'row' }}>
                                    <Image source={require('../../components/Assets/common/add_memeber.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 10 }} />
                                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, paddingRight: 10, fontSize: 15 }}>Alice W. Lough, MBBS, MD</Text>
                                </View>
                            </View>


                        );
                    }
                    }
                    keyExtractor={this._keyExtractor}
                />
            </View >
        )
    }
}