import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import Styles from '../bootstrap/Style';

export default class CustomTouchableButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let text = this.props.text;
        let onPress = this.props.onPress;
        return (
            <TouchableOpacity
                style={Styles.ctbTouchableStyle}
                onPress={onPress}>
                <Text
                    style={{ color: '#fff' }}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}