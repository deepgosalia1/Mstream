import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#fff'
    },
    textInputStyles:{
        borderBottomColor:'#a3a3a3',
        color:THEME_COLOR,
        borderBottomWidth:1,
        width:'90%',
        height:30,
        fontFamily:FONT_FAMILY,
        fontSize:20,
        marginLeft:5,
        paddingBottom:3
    },
    iconStyle:{
        width:30,
        height:30
    }
});
module.exports = Style;
