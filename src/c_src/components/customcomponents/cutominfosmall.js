import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'

export default class CustomInfoSmall extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#fff', paddingBottom: 0 }}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={this.props.image} />
                <View style={{ paddingLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ paddingTop: 5, paddingLeft: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{this.props.name}h</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: -2 }}>
                        <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal', marginTop: -7, marginLeft: -3 }} source={require('../Assets/common/ticket.png')} />
                    <Text style={{ paddingTop: 2, marginLeft: -5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>{'MRN: '+this.props.mrn}</Text>
                    </View>
                </View>
            </View>

        )
    }
}
