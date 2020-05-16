import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#f5f5f5'
    },
    itemStyle:{
        marginLeft:6,
        marginRight:6,
        marginTop:4,
        backgroundColor:'#fff'
    },
    docTitileStyle:{
        color:THEME_COLOR,
        fontSize:18,
        fontFamily:FONT_FAMILY,
        fontWeight:'400',
        margin:4
    },
    dateStyle:{
        color:'black',
        fontSize:13,
        fontFamily:FONT_FAMILY,
    },
    textStyle:{
        fontFamily:FONT_FAMILY,
        fontSize:13,
        color:'#474747',
        //marginTop:2,
        marginLeft:3,
        marginBottom:4
    }
});
module.exports = Style;
