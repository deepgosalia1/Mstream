import React, { Component } from 'react';

import {
    View,
    Switch,
    Text,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import timelineListJson from '../../components/Assets/json/timeline.list.json'
import * as fontUtils from '../../components/utils/fontUtils';
import * as colorUtils from '../../components/utils/colorUtils';
import DatePickerComponent from '../../bootstrap/datepicker'
import Style from '../../container/myfamily/searchmembers/style';
import { List } from 'native-base';
import SearchBars from '../myfamily/searchmembers/SearchBars';

export default class TimeLines extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '', location: 'Current Location' }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <List>
                    <FlatList
                        data={timelineListJson}
                        renderItem={({ item }) => this.renderTimeLineListItem(item)}
                        ListHeaderComponent={() => this.getTimeLineListHeaderComponent()}
                    />
                </List>
            </View>
        )
    }

    renderTimeLineListItem(item) {
        console.log('item', item)
        let images = [
            require('../../components/Assets/TimeLines/communication.png'),
            require('../../components/Assets/TimeLines/appointments.png'),
            require('../../components/Assets/TimeLines/calendar.png'),
            require('../../components/Assets/TimeLines/healthdata.png'),
            require('../../components/Assets/TimeLines/medication.png'),
            require('../../components/Assets/TimeLines/documents.png'),
        ];
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgrey' }}>
                <Image
                    style={{ width: 30, height: 30, margin: 15 }}
                    source={images[item.id]} />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '300', fontFamily: fontUtils.FONT_FAMILY }}>{item.name}</Text>
                <Switch style={{ position: 'absolute', end: 0, marginRight: 10 }}></Switch>
            </View>
        )
    }

    getTimeLineListHeaderComponent() {
        return (
            <View style={{ backgroundColor: '#F9FAF9' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 65, height: 65, marginLeft: 35, marginTop: 35, alignSelf: 'center' }} source={require('../../components/Assets/TimeLines/search_icon.png')} />

                    <View style={{ flexDirection: 'column', margin: 15 }}>
                        <View style={{ flexDirection: 'column', }}>

                            {/* <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 35, }} />
                                <Text style={{ color: 'gray', fontSize: 15,fontFamily:fontUtils.FONT_FAMILY}}>Search Keywords</Text>
                            </View> */}
                            {/* <SearchBars
                                name={this.state.name}
                                location={this.state.location}
                            /> */}
                            <View style={{flex:1,flexDirection:'row',width:200}}>
                                <Image
                                    source={require('../../components/Assets/common/search_icon.png')}
                                    style={{height: 30,
                                        width: 30,
                                        marginTop:15,
                                        marginRight: 10}}
                                />
                                <View style={Style.searchContainerStyle}>
                                    <TextInput
                                        style={Style.searchInputStyle}
                                        underlineColorAndroid='transparent'
                                        placeholder='Search'
                                        placeholderTextColor={colorUtils.THEME_COLOR}
                                        // onChangeText={(name) => {
                                        //     this.setState({ name });
                                        // }
                                        // }
                                        value={this.name}
                                    />
                                   
                                </View>
                            </View>
                            {/* <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Image style={{ width: 35, height: 35 }} source={require('../../components/Assets/Acknowledgement/search_icon.png')} />
                                <TextInput editable={true} maxLength={30} style={{ color: colorUtils.THEME_COLOR, fontSize: 15, fontFamily: fontUtils.FONT_FAMILY }}>Appointments</TextInput>
                            </View> */}
                               <View style={{flex:1,flexDirection:'row',width:200}}>
                                <Image
                                    source={require('../../components/Assets/common/search_icon.png')}
                                    style={{height: 30,
                                        width: 30,
                                        marginTop:15,
                                        marginRight: 10}}
                                />
                                <View style={Style.searchContainerStyle}>
                                    <TextInput
                                        style={Style.searchInputStyle}
                                        //underlineColorAndroid='transparent'
                                        placeholder='Appointments'
                                        placeholderTextColor={colorUtils.THEME_COLOR}
                                        // onChangeText={(name) => {
                                        //     this.setState({ name });
                                        // }
                                        // }
                                        value={this.name}
                                    />
                                   
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row',marginTop:10 }}>
                                <Image style={{ width: 35, }} />
                                <Text style={{ color: 'gray', fontSize: 15, fontFamily: fontUtils.FONT_FAMILY }}>From Date</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Image style={{ width: 35, height: 35 }} source={require('../../components/Assets/TimeLines/calendar.png')} />
                                <TextInput editable={false} style={{ color: colorUtils.THEME_COLOR, fontSize: 15, fontFamily: fontUtils.FONT_FAMILY }}>10/22/2018</TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 35, }} />
                                <Text style={{ color: 'gray', fontSize: 15, fontFamily: fontUtils.FONT_FAMILY }}>To Date</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Image style={{ width: 35, height: 35 }} source={require('../../components/Assets/TimeLines/calendar.png')} />
                                <TextInput editable={false} style={{ color: colorUtils.THEME_COLOR, fontSize: 15, fontFamily: fontUtils.FONT_FAMILY }}>10/22/2018</TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}