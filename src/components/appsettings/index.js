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
import { ListItem } from 'react-native-elements';

export default function Appsettings() {
    const [isOnlyWifi, setOnlyWifi] = useState(false);
    function toggleSwitch() {
        setOnlyWifi(prev => !prev)
    }
    return (
        <View style={{ flex: 1 }}>
            <ListItem
                switch={{
                    value: isOnlyWifi,
                    trackColor: { false: '#767577', true: '#81b0ff' },
                    thumbColor: isOnlyWifi ? '#f5dd4b' : '#f4f3f4',
                }}
            />
        </View>
    );
}
