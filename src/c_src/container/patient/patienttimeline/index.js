import React, { Component } from 'react';

import {
    View,
    Switch,
    Text,
    FlatList,
    Image,
    TextInput,
    Alert
} from 'react-native';

import timelineListJson from '../../../components/Assets/json/timeline.list.json'
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';

import { List } from 'native-base';

export default class TimeLines extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <List>
                    <FlatList
                        data={timelineListJson}
                        renderItem={({ item, index }) => this.renderTimeLineListItem(item, index)}
                        ListHeaderComponent={() => this.getTimeLineListHeaderComponent()}
                    />
                </List>
            </View>
        )
    }

    renderTimeLineListItem(item, index) {

        let images = [
            require('../../../components/Assets/TimeLines/communication.png'),
            require('../../../components/Assets/TimeLines/appointments.png'),
            require('../../../components/Assets/TimeLines/calendar.png'),
            require('../../../components/Assets/TimeLines/healthdata.png'),
            require('../../../components/Assets/TimeLines/medication.png'),
            require('../../../components/Assets/TimeLines/documents.png'),
        ];
        return (
            //   flex: 1,flexDirection: 'column',justifyContent: 'space-between',
            <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center',paddingTop:5 ,borderBottomColor:'gray', borderBottomWidth : index==2 ? 1 : 0}}>

                <Image
                    style={{ width: 30, height: 30, margin: 5}}
                    source={images[index]} />
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '300', fontFamily: fontUtils.FONT_FAMILY }}>{item.name}</Text>
                <Switch style={{ position: 'absolute', end: 0, marginRight: 10 }}></Switch>
            </View>
        )
    }

    getTimeLineListHeaderComponent() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <Image
                        style={{ marginTop: 5, width: 70, height: 70, marginLeft: 5 }}
                        source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column', paddingTop: 8 }}>
                        <Text style={{ paddingTop: 5, paddingLeft: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Lorenzo J. Smith</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: -2 }}>
                            <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal', marginTop: -7, marginLeft: -3 }} source={require('../../../components/Assets/common/ticket.png')} />
                            <Text style={{ paddingTop: 2, marginLeft: -5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>MRN: #5566889233</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row',borderBottomWidth:0.8,borderTopWidth:0.8 }}>
                    <Image style={{ width: 65, height: 65, marginLeft: 35, marginTop: 35 }} source={require('../../../components/Assets/TimeLines/search_icon.png')} />

                    <View style={{ flexDirection: 'column', margin: 15 }}>
                        <View style={{ flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', top: '15%', left: '10%' }}>
                                {/* <Image style={{ width: 35, }} /> */}
                                <Text style={{ color: 'gray', fontSize: 15 }}>From Date</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 35, height: 35 }} source={require('../../../components/Assets/TimeLines/calendar.png')} />
                                <TextInput style={{ color: colorUtils.THEME_COLOR, fontSize: 15 }}>10/22/2018</TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', top: '15%', left: '10%' }}>
                                {/* <Image style={{ width: 35, }} /> */}
                                <Text style={{ color: 'gray', fontSize: 15 }}>To Date</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 35, height: 35, }} source={require('../../../components/Assets/TimeLines/calendar.png')} />
                                <TextInput style={{ color: colorUtils.THEME_COLOR, fontSize: 15 }}>10/22/2018</TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}