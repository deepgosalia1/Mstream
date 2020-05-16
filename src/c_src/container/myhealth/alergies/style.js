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
        margin:6,
       // padding:5
    },
    docTitileStyle:{
        color:'black',
        fontSize:18,
        fontFamily:FONT_FAMILY,
        margin:4
    },
    docDateTimeStyle:{
        color:'#464646',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        alignSelf:'center',
        position:'absolute',
        end:0
    }
});
module.exports = Style;
