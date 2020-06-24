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
        marginTop:5,
        backgroundColor:'#fff',
         padding:5
    },
    docTitileStyle:{
        color:THEME_COLOR,
        fontSize:18,
        fontWeight:'500',
        fontFamily:FONT_FAMILY,
        margin:4
    },
    diseaseStyle:{
        color:'black',
        fontSize:12,
        fontFamily:FONT_FAMILY,
        marginLeft:4,
        marginBottom:2
    }
});
module.exports = Style;
