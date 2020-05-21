import React, { Component } from 'react'
import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import { THEME_COLOR } from '../utils/colorUtils'
import { FONT_FAMILY } from '../utils/fontUtils';

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.imageSource = this.props.imageSource
        this.state = { value: this.props.value }
    }
    render() {
        return (
            <View style={styles.renderViewStyle}>
                <Image
                    style={styles.renderViewImageStyle}
                    source={this.props.imageSource}
                />
                <View style={{ borderBottomWidth: 0.7, width: '88%', flexDirection: 'row' }}>
                    <TextInput
                        style={styles.renderViewTextInputStyle}
                        underlineColorAndroid='transparent'
                        placeholder={this.props.placeholder}
                        placeholderTextColor='#a09d9d'
                        editable={this.props.editable}
                        value={this.props.value ? this.props.value : this.state.value}
                        onChangeText={(text) => {
                            this.setState({ value: text })
                            this.props.textCallback(text)
                        }}
                    />
                    {this.props.pickerIcon && <Image
                            source={require('../Assets/Picker/down.png')}
                            style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 30 }} />}
                </View>
            </View>
        )
    }
}

const styles = {
    renderViewStyle: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 20,
        alignSelf: 'flex-start'
    },
    renderViewImageStyle: {
        height: 37,
        width: 37,
        marginRight: 8,
        paddingTop: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    renderViewTextInputStyle: {
        height: 50,
        width: '80%',
        fontSize: 22,
        fontFamily: FONT_FAMILY,
        color: THEME_COLOR

    },
}