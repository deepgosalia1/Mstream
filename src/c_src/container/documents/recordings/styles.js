import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
    },
    sectionTextStyle:{
        fontFamily:FONT_FAMILY,
        width: '100%',
        textAlign:'left',
        padding: 10,
        fontSize: 20,
        fontWeight:'500',
        color:'black',
        alignSelf:'center',
        backgroundColor:'#fff'
    },
    sectionItemStyle:{
        flex:1,
        padding:5,
        backgroundColor:'#F3F2F3',
        marginLeft:8,
        marginRight:8,
        marginBottom:6
    },
    recordingTitleStyle:{
        margin:5,
        color:THEME_COLOR,
        fontSize:18,
        fontFamily:FONT_FAMILY
    },
    recordingByStyle:{
        margin:5,
        color:'#040404',
        fontSize:16,
        fontFamily:FONT_FAMILY
    },
    recordingDateStyle:{
        margin:5,
        color:'#414141',
        fontSize:14,
        fontFamily:FONT_FAMILY
    },
    recordTimeStyle:{
        color:'#040404',
        fontSize:16,
        fontFamily:FONT_FAMILY,
        alignSelf:'center',
        marginBottom:5
    }
});
module.exports = Style;
