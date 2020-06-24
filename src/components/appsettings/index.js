/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    Modal,
    Alert,
    Button,
    Linking,
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { Surface, Card, Portal, Provider } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default function Appsettings() {

    return (

        <View style={{ flex: 1 }}>
            <Button title={'Welcome to appsettings'} />
        </View >
    );
}