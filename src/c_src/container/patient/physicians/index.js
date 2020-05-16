import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking, Alert, FlatList,ScrollView } from 'react-native';
import Style from './style'
import CustomInfoSmall from '../../../components/customcomponents/cutominfosmall';

var physicians = require('./physician_data.json');

export default class Physicians extends Component {
    render() {
        return (
            <ScrollView>
                <CustomInfoSmall
                    name='Lorenzo J. smith'
                    mrn='#5566889233'
                    image={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
                />
                {/* <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#fff', paddingBottom: 0 }}>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column',paddingTop:8 }}>
                        <Text style={{ paddingTop:5,paddingLeft:5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Lorenzo J. Smith</Text>
                        <View style={{ flexDirection: 'row',alignSelf:'flex-start',marginLeft:-2 }}>
                            <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal',marginTop:-7,marginLeft:-3 }} source={require('../../../components/Assets/common/ticket.png')} />
                            <Text style={{ paddingTop :2 ,marginLeft:-5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>MRN: #5566889233</Text>
                        </View>
                    </View>
                </View> */}

                
                
                
                <FlatList
                    data={physicians}
                    renderItem={({ item }) =>
                        <View style={Style.flatListContainerStyle}>
                            <Image
                                source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
                                style={Style.memberImageStyle}
                            />
                            <View style={Style.memberDataStyle}>
                                <Text style={Style.memberNameStyle}> {item.name} </Text>
                                <Text style={Style.memberType}> {item.type} </Text>
                                <Text style={Style.memberAdd}> {item.address_lane} </Text>
                                <Text style={Style.memberAdd}> {item.address_city}, {item.address_state} </Text>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        );
    }
}