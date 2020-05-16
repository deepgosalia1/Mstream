import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'

export default class GreyButtonSmall extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 3, paddingBottom: 3, backgroundColor: '#ECECEC' }}>
                <Image
                    style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                    source={this.props.image} />
                <Text style={{ color: "black", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal', alignSelf: 'center', marginLeft: 2 }}>{this.props.text}</Text>
            </View>
        )
    }
}
