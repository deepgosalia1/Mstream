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
        flexDirection:'row',
        margin:5,
        padding:5
    },
    docIconStyle:{
        width:45,
        height:45,
        margin:3
    },
    docTitileStyle:{
        color:THEME_COLOR,
        fontSize:17,
        fontFamily:FONT_FAMILY,
        margin:4
    },
    docDateTimeStyle:{
        color:'#727272',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        margin:3
    },
    docByStyle:{
        color:'#727272',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        alignSelf:'center',
        marginLeft:30
    }
});
module.exports = Style;
