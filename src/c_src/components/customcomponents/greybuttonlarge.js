import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'

export default class GreyButtonLarge extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                <Image
                  style={{ width: 36, height: 36, margin: 5, alignSelf: 'center' }}
                  source={this.props.image} />
                <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                  <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{this.props.text1}</Text>
                  <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{this.props.text2}</Text>
                </View>
              </View>
        )
    }
}
