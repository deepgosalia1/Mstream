import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert, FlatList,ScrollView } from 'react-native';
import Style from './style'

var family_data = require('./family_data.json');

export default class Family extends Component {
    render() {
        return (
            <ScrollView>

                <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#fff', paddingBottom: 0 }}>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column',paddingTop:8 }}>
                        <Text style={{ paddingTop:5,paddingLeft:5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal'}}>Lorenzo J. Smith</Text>
                        <View style={{ flexDirection: 'row',alignSelf:'flex-start',marginLeft:-2 }}>
                            <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal',marginTop:-7,marginLeft:-3 }} source={require('../../../components/Assets/common/ticket.png')} />
                            <Text style={{ paddingTop :2 ,marginLeft:-5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>MRN: #5566889233</Text>
                        </View>
                    </View>
                </View>

                
                
                
                <FlatList
                    data={family_data}
                    renderItem={({ item }) =>
                        <View style={Style.flatListContainerStyle}>
                            <Image
                                source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
                                style={Style.memberImageStyle}
                            />
                            <View style={Style.memberDataStyle}>
                                <Text style={Style.memberNameStyle}> {item.name} </Text>
                                <Text style={Style.memberRel}> {item.relation} </Text>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        );
    }
}