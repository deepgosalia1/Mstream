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
        color:THEME_COLOR,
        fontSize:18,
        fontFamily:FONT_FAMILY,
        margin:4,
        fontWeight:'500'
    },
    docDateTimeStyle:{
        color:'#707070',
        fontSize:13,
        fontFamily:FONT_FAMILY,
        margin:5
    }
});
module.exports = Style;
