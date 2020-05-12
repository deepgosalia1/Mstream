import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { THEME_COLOR } from '../../constants'

var styles = StyleSheet.create({
    mainview: { height: '100%', backgroundColor: '#2d545e' },
    card: { marginTop: 30, height: 400, width: '75%', alignSelf: 'center' },
    imageopt: { marginTop: 50, flex: 1, alignItems: 'center', flexDirection: 'row', alignSelf: 'center', position: 'absolute' },
    buttonview: { marginTop: -20, width: 200, alignSelf: 'center', alignItems: 'center' },

});
module.exports = styles;