import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff'
    },
    topUploadButtonStyle: {
        width: 177,
        height: 100,
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        marginTop:8
    },
    headerTextStyle: {
        color:'#272727',
        fontSize:19,
        fontWeight:'500',
        fontFamily:FONT_FAMILY
    },
    textInputStyles: {
        textAlign:'left',
        width:'100%',
        fontSize:19,
        marginRight:10,
        marginTop:3,
        color:THEME_COLOR,
        fontFamily:FONT_FAMILY
    }
});
module.exports = Style;
