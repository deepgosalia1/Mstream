import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'

export default class CustomInfoLarge extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', padding: 10, flexDirection: 'row' }}>
                <Image
                    style={{ marginTop: 0, width: 80, height: 80, alignSelf: 'center' }}
                    source={this.props.image} />
                <View style={{ paddingLeft: 15, flexDirection: 'column' }}>
                    <Text style={{ padding: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: "bold" }}>{this.props.name}</Text>

                    {this.props.desgnation && <View style={{ flexDirection: 'row' }}>
                        <Image style={{ padding: 2, width: 15, height: 15, alignSelf: 'center', fontFamily: 'Montserrat', fontStyle: 'normal' }} source={require('../Assets/profile/stethas_icon.png')} />
                        <Text style={{ padding: 5, color: "black", fontSize: 18 }}>{this.props.designation}</Text>
                    </View>}

                    {this.props.address && <View style={{ flexDirection: 'row' }}>
                        <Image style={{ padding: 1, width: 15, height: 15, alignSelf: 'center', fontFamily: 'Montserrat', fontStyle: 'normal' }} source={require('../Assets/profile/location.png')} />
                        <Text style={{ padding: 3, color: "#5B5B5B", fontSize: 18 }}>{this.props.address}</Text>
                    </View>}
                    {this.props.email && <View style={{ flexDirection: 'row' }}>
                        <Image style={{ padding: 2, width: 15, height: 15, alignSelf: 'center' }} source={require('../Assets/profile/message-icon.png')} />
                        <Text style={{ padding: 5, color: "#5B5B5B", fontFamily: 'Montserrat', fontStyle: 'normal', fontSize: 18 }}>{this.props.email}</Text>
                    </View>}
                </View>
                {this.props.laneicon && <Image
                    style={{ marginRight: 25, width: 42, height: 42, alignSelf: 'center', position: 'absolute', end: 0 }}
                    source={require('../Assets/General/lane_icon.png')} />}
            </View>

        )
    }
}
