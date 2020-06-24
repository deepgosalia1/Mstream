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
        marginLeft:8,
        marginRight:8,
        marginTop:8,
        //margin:8,
        backgroundColor:'#fff',
        height:135,
    },
    itemTitleStyle:{
        color:"#464646",
        fontFamily:FONT_FAMILY,
        fontSize:16,
        fontWeight:'400',
        marginLeft:5,
        marginTop:5,
        marginBottom:7,
    },
    gridIconStyle:{
        width:"55%",
        height:60,
    },
    itemStartTextStyle:{
       color:THEME_COLOR,
       fontSize:14,
       marginLeft:5,
       marginRight:3,
       fontFamily:FONT_FAMILY 
    },
    itemStartBelowText:{
       color:'#464646',
       fontSize:11,
       marginLeft:5,
       marginRight:3,
       fontFamily:FONT_FAMILY 
    }
});
module.exports = Style;
