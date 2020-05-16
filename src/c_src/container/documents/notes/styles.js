import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
    },
    sectionItemStyle:{
        flex:1,
        padding:5,
        backgroundColor:'#fff',
        marginLeft:8,
        marginRight:8,
        marginBottom:10,
        borderWidth :1,
        borderColor:'lightgray',
    },
    
    sectionTextStyle:{
        fontFamily:FONT_FAMILY,
        width: '100%',
        textAlign:'left',
        padding: 10,
        fontSize: 20,
        fontWeight:'500',
        color:'black',
        alignSelf:'center',
        backgroundColor:'#fff'
    },
    notesTitleStyle:{
        margin:5,
        color:THEME_COLOR,
        fontSize:18,
        fontFamily:FONT_FAMILY,
        fontWeight:'500'
    },
    notesInfoStyle:{
        margin:5,
        color:'#000000',//'#040404',
        fontSize:16,
        fontFamily:FONT_FAMILY
    },
    noteDateStyle:{
        margin:5,
        color:'#414141',
        fontSize:14,
        fontFamily:FONT_FAMILY
    },
    notedByStyle:{
        color:'#040404',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        alignSelf:'center',
        marginBottom:5,
        marginRight:5
    },
    tilesItemStyle:{
        flex:1,
        padding:5,
        backgroundColor:'#fff',
        width:160,
        height:230,
        //marginLeft:8,
        //marginRight:8,
        margin:10,
        borderWidth :1,
        borderColor:'lightgray',
        flexDirection:'column'
    },
    tilesNotedByStyle:{
        color:'#040404',
        fontSize:14,
        fontFamily:FONT_FAMILY,
        marginLeft:5,
        marginRight:5,
        marginTop:2,
    },
    tilesNoteDateStyle:{
        margin:5,
        color:'#414141',
        fontSize:13,
        fontFamily:FONT_FAMILY
    }
});
module.exports = Style;
