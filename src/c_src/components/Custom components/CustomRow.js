import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class CustomRow extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let text = this.props.text ? this.props.text : '';
        let value = this.props.value ? this.props.value : '';
        return (
            <View >
                <View style={styles.sectionRow}>
                    <Text style={styles.header}>{text}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
                <View style={styles.divider} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionRow: {
        padding: 8
    },
    value: {
        color: '#000',
        paddingTop: 2
    },
    header: {
        paddingBottom: 2
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    }
})