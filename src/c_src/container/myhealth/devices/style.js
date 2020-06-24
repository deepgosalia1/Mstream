import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#fff',
        flexDirection:'column'
    },
    deviceItemStyle:{
        borderColor:'lightgray',
        borderWidth:1,
        backgroundColor:'#f4f4f4',
        width:'90%',
        height:70,
        flexDirection:'row',
        // alignSelf:'center',
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        marginBottom:10
    },
    leftIconStyle:{
        width:40,
        height:40,
        margin:10,
        alignSelf:'center'
    },
    textStyle:{
        
        color:'black',
        fontSize:16,
        fontFamily:FONT_FAMILY,
        margin:10,
        alignSelf:'center'
    }
});
module.exports = Style;
