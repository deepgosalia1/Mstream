import React from 'react';
import { View, Image, Text, FlatList,StyleSheet } from 'react-native';
import {THEME_COLOR} from '../../components/utils/colorUtils'
import {FONT_FAMILY} from '../../components/utils/fontUtils'



const ChannelData = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) =>
                <View style={Style.flatListContainerStyle}>
                    <View style={Style.memberDataStyle}>
                        <Text style={Style.memberNameStyle}> {item.name} </Text>
                                          </View>
                </View>
            }
        />

    );
}
var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        marginLeft: 0,
    },
     flatListContainerStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginRight:10,
        
       
        
    },
    
    memberDataStyle: {
        margin: 10,
        alignSelf: 'center',
        fontFamily: FONT_FAMILY
    },
    memberNameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding:5
    },
     
});

export default ChannelData;