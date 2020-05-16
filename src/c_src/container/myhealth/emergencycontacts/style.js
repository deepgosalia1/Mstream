import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#EBEAEB'
    },
    itemStyle:{
        margin:5,
        backgroundColor:'#fff',
        width:'97%',
    },
    leftIconStyle:{
        width:50,
        height:50,
        margin:10
    },
    titleStyle:{
       margin:5,
       color:THEME_COLOR,
       fontSize:20,
       fontWeight:'500',
       fontFamily:FONT_FAMILY
    },
    relationStyle:{
       marginLeft:5,
       color:'gray',
       fontSize:15,
       fontFamily:FONT_FAMILY
    },
    phoneNumberStyle:{
       fontFamily:FONT_FAMILY,
       fontSize:15,
       color:'gray',
       alignSelf:'center',
       marginLeft:5,
       marginRight:10
    },
    phoneNumber2Style:{
        fontFamily:FONT_FAMILY,
        fontSize:15,
        color:'#464646',
        alignSelf:'center',
        marginRight:20
     },
    phoneIconStyle:{
       width:25,
       height:25,
       marginTop:5,
       marginBottom:5, 
       marginLeft:10
    }
});
module.exports = Style;
