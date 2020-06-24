import React from 'react';
//import SearchBar from '../container/myfamily/searchfamilymembers/SearchBar';
import { Text, View, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import channel from '../container/channeldata/channel.json';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../components/utils/fontUtils';
import { THEME_COLOR } from '../components/utils/colorUtils';

// var familymembers = require('../container/myfamily/searchfamilymembers/familymembers.json');


export default class SearchMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.data = props.data;
    }

    render() {
        return (

            <View style={[Style.smallContainerStyle]}>
                <Image
                    source={require('../components/Assets/common/search.png')}
                    style={Style.searchIconStyle}
                />


                {/* <View style={Style.searchContainerStyle}> */}

                <TextInput
                    style={Style.searchInputStyle}
                    underlineColorAndroid='transparent'
                    placeholder=' Search'
                    onChangeText={(text) => {
                        this.setState({ text });
                        this.props.search({ text });
                    }
                    }
                    value={this.state.text}
                />



                {/* </View> */}




                {/* <TouchableOpacity style={Style.plusIconContainerStyle}>
                    <Image
                        source={require('../components/Assets/common/add_icon.png')}
                        style={Style.plusIconStyle}
                    />
                </TouchableOpacity> */}

            </View>


        );
    }
}

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        marginLeft: 0,
        marginTop: 0
    },
    plusIconStyle: {
        height: 56,
        width: 56
    },
    plusIconContainerStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    flatListContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    memberImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 10
    },
    memberDataStyle: {
        margin: 10,
        alignSelf: 'center',
        fontFamily: FONT_FAMILY
    },
    memberNameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME_COLOR,
        paddingBottom: 5
    },
    smallContainerStyle: {
        flexDirection: 'row',
        padding: 5,
        flex: 1,
        width: '100%'
    },
    searchIconStyle: {
        height: 35,
        width: 35,
        marginTop: 0,
        marginLeft: 0,
        marginLeft: 10,
        marginBottom: 0,
        color: 'white',
        backgroundColor: 'white',
        alignSelf: 'flex-start'
    },
    searchContainerStyle: {
        flexDirection: 'row',
        paddingBottom: 5,
        // paddingTop:5,
        marginRight: 5,

        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flex: 7
    },
    searchInputStyle: {
        height: 35,
        fontSize: 20,
        color: THEME_COLOR,
        marginBottom: 5,
        padding: 5,
        width: '80%',
        fontFamily: FONT_FAMILY,
        backgroundColor: 'white',
    },
    searchButtonStyle: {
        height: 24,
        width: 24,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 4,
        flex: 1
    },
});