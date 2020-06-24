import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './style';
export default class AddDevice extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={Style.containerStyle}>

                <View style={Style.deviceItemStyle}>
                    <Image style={Style.leftIconStyle} source={require('./01.png')} />
                    <Text style={Style.textStyle}>Apple HealthKit</Text>
                </View>

                <View style={Style.deviceItemStyle}>
                    <Image style={Style.leftIconStyle} source={require('./02.png')} />
                    <Text style={Style.textStyle}>In Body</Text>
                </View>

                <View style={Style.deviceItemStyle}>
                    <Image style={Style.leftIconStyle} source={require('./03.png')} />
                    <Text style={Style.textStyle}>Fitbit</Text>
                </View>
            </View>
        )
    }
}