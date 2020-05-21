import { StyleSheet, Dimensions }  from 'react-native';
import {FONT_FAMILY} from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var style= StyleSheet.create({
        renderViewStyle:{
            
            marginTop:20,
            flexDirection:'row',
            marginLeft:-25,
            marginRight:20,

        } ,
        renderViewImageStyle:{
            height: 45,
            width: 45,
            marginRight:8,
            paddingTop: 10,
            marginTop: 10,
            justifyContent:'center',
            alignSelf:'center',
            marginLeft:30
        },
        renderViewTextInputStyle:{
            height:45,
            alignItems: 'flex-start',
            width:300,
            fontSize:22,
            fontFamily:FONT_FAMILY,
            flex:6,
            color:THEME_COLOR,
            marginLeft:-2,
            marginRight: 20

            
        },
        renderDropDownViewStyle:{
            padding:2,
            marginTop:5,
            flexDirection:'row'
        }
});
module.exports=style;