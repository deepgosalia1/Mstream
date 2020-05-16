import { StyleSheet, Dimensions }  from 'react-native';
import {FONT_FAMILY} from '../../../components/utils/fontUtils';
var style= StyleSheet.create({
        renderViewStyle:{
            
            marginTop:18,
            flexDirection:'row',
            marginLeft:-25,
            marginRight:20,
            alignSelf: 'flex-start'
        } ,
        // renderViewImageStyle:{
        //     height: 37,
        //     width: 37,
        //     marginRight:8,
        //     paddingTop: 10,
        //     marginTop: 10,
        //     justifyContent:'center',
        //     alignSelf:'center'
        // },
        // renderViewTextInputStyle:{
        //     height:50,
        //     width:'80%',
        //     fontSize:22,
        //     fontFamily:FONT_FAMILY
            
        // },
        // renderDropDownViewStyle:{
        //     padding:2,
        //     marginTop:5,
        //     flexDirection:'row'
        // },
        renderDropDownImageStyle:{height:35,width:35,padding:2,marginRight:8,marginTop:20},
        renderDropDownddStyle:{width:300,marginTop:-7},
        mainRenderView:{marginTop:5,flexDirection:'column',marginLeft:30},
        ImageButtonStyle:{width:40,height:40,padding:2},
        ImageButtonViewStyle:{bottom:0,marginRight:0},
        TouchableOpaViewStyle:{marginTop:220,alignSelf:'flex-end',marginRight:25},
        TouchableOpaStyle:{marginBottom:0,alignSelf:'flex-end'},
        touchableImage:{width:20,height:20}
});
module.exports=style;