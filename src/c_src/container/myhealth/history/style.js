import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#EEEEEE'
    },
    itemStyle:{
        flexDirection:'column',
        padding:6,
        backgroundColor:'#fff',
        marginLeft:6,
        marginRight:6,
        marginBottom:4,
        marginTop:4,    
    },
    titleStyle:{
        fontSize:18,fontFamily:FONT_FAMILY,color:'#272727',fontWeight:'500',margin:5
    },
    leftSideTitleStyle:{
        fontSize:15,fontFamily:FONT_FAMILY,color:'#464646',marginLeft:5
    },
    rightSideValueStyle:{
        fontSize:15,fontFamily:FONT_FAMILY,color:'#272727',marginLeft:40,flex:1,fontWeight:'400'
    },
    memberIDValueStyle:{
        fontSize:15,fontFamily:FONT_FAMILY,color:'#272727',marginLeft:24,flex:1,fontWeight:'400'
    },
    validityValueStyle:{
        fontSize:15,fontFamily:FONT_FAMILY,color:'#272727',marginLeft:54,fontWeight:'400'
    }    
});
module.exports = Style;
