import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#f5f5f5'
    },
    // renderViewStyle:{
            
    //     marginTop:20,
    //     flexDirection:'row',
    //     marginLeft:-25,
    //     marginRight:20,
    //     alignSelf: 'flex-start'
    // },
    // renderViewImageStyle:{
    //     height: 30,
    //     width: 30,
    //     marginRight:8,
    //     paddingTop: 10,
    //     marginTop: 10,
    //     justifyContent:'center',
    //     alignSelf:'center'
    // },
    renderViewTextInputStyle:{
        height:50,
        width:'80%',
        fontSize:22,
        fontFamily:FONT_FAMILY
        
    },
    mainRenderView:{marginTop:5,flexDirection:'column',marginLeft:20,marginRight:15},
});
module.exports = Style;
