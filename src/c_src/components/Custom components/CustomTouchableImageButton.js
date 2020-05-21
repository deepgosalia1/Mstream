import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import Styles from '../bootstrap/Style';

export default class CustomTouchableImageButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let text = this.props.text;
        let onPress = this.props.onPress;
        let imageUri = this.props.imageUri;
        return (
            <TouchableOpacity
                style={Styles.ctibTouchableStyle}
                onPress={onPress}>
                <Image
                    style={{
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: 'center',
                        height: 100,
                        backgroundColor: '#4CAF50'
                    }}
                    source={{ uri: imageUri }}
                />
                <Text
                    style={{ color: '#fff' }} numberOfLines={1}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}