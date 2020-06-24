import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Style from './style';

const MemberData = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={Style.laneView}
                    onPress={() => {
                        props.changeName(item.name, item.address)
                    }}>
                    <View style={{marginTop:5}}>
                        <View style={Style.flatListContainerStyle}>
                            <Image
                                source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
                                style={Style.memberImageStyle}
                            />
                            <View style={Style.memberDataStyle}>
                                <Text style={Style.memberNameStyle}> {item.name} </Text>
                                <Text> {item.relation} </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            }
        />

    );
}

export default MemberData;
