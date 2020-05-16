import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#fff'
    },
    itemStyle:{
        flexDirection:'row',
        padding:4,
        backgroundColor:'#fff',
        height:60,
        alignSelf:'center'
    }
});
module.exports = Style;
