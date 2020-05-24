import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { THEME_COLOR } from '../../constants'

var styles = StyleSheet.create({
    safe: {
        backgroundColor: THEME_COLOR,
        flex: 1,
        // paddingTop: (DeviceInfo.hasNotch) ? StatusBar.currentHeight : 0,
    },
    blur_imageview: { width: '100%', height: '40%', backgroundColor: '#333', flexDirection: 'column', marginTop: 45 },
    pro_pic: { marginTop: 15, alignSelf: 'center' },
    pro_picimage: { height: 150, width: 150, borderRadius: 150, alignSelf: 'center' },
    pro_nameview: { width: '100%', alignItems: 'center' },
    textstyle: { textAlign: 'center', color: 'white', fontSize: 22, marginTop: 15, width: '70%', fontWeight: 'bold' },
    editshare: { marginTop: 20, alignSelf: 'center', width: 100, flexDirection: 'row', height: 70, justifyContent: 'space-between' },
});
module.exports = styles;
