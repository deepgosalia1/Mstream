import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SectionList
} from 'react-native'
import * as colorUtils from '../components/utils/colorUtils'
export default class Health extends Component {


    render() {
        return (

            <View style={{ marginTop: 0, backgroundColor: 'white',borderTopWidth:0.4}}>
                <View style={{ padding: 0, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Image
                        style={{ marginTop: 10, marginBottom: 10, width: 70, height: 70, marginLeft: 10 }}
                        source={require('../components/Assets/CriticialAlerts/critical_profile.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column', paddingTop: 8 }}>
                        <Text style={{ paddingTop: 5, paddingLeft: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Lorenzo J. Smith</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: -2 }}>
                            <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal', marginTop: -7, marginLeft: -3 }} source={require('../components/Assets/common/ticket.png')} />
                            <Text style={{ paddingTop: 2, marginLeft: -5, color: "#000", fontSize: 18, fontFamily: 'Montserrat' }}>MRN: #5566889233</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}