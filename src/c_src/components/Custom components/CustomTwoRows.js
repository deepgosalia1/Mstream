import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import CustomRow from './CustomRow'

export default class CustomTwoRows extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let text1 = this.props.text1 ? this.props.text1 : '';
        let value1 = this.props.value1 ? this.props.value1 : '';
        let text2 = this.props.text2 ? this.props.text2 : '';
        let value2 = this.props.value2 ? this.props.value2 : '';
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <CustomRow text={text1} value={value1} />
                </View>
                <View style={{ flex: 1 }}>
                    <CustomRow text={text2} value={value2} />
                </View>
            </View>
        )
    }
}