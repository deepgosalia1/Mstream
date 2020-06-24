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
        backgroundColor:'white',
        marginTop:6,
        marginLeft:6,
        width:117,
        height:115
    },
    summaryImageStyle:{
        width:117,
        height:80
    },
    summaryTextStyle:{
        color:THEME_COLOR,
        fontFamily:FONT_FAMILY,
        fontSize:13,
        margin:2,
        alignSelf:'center'
    }
});
module.exports = Style;
