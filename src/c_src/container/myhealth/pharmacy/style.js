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
        flex: 1,
        backgroundColor: '#fff',
        padding:5
    },
    pharmacyNameStyle:{
        color:THEME_COLOR,
        fontSize:18,
        fontWeight:'500',
        fontFamily:FONT_FAMILY,
        marginLeft:4
    },
    childItemStyle:{
        color:'#474747',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        fontWeight:'400',
        alignItems:'center',
        marginLeft:5,
        marginTop:2,
        marginBottom:2
    }
});
module.exports = Style;
