import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';
import { margin } from '../../../bootstrap/Picker/themes/default';
import { colors } from 'react-native-elements';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex:1,
        backgroundColor:'#fff'
    },
    leftImageStyle:{
        width:30,
        height:35
    },
    textInputStyles:{
        borderBottomColor:'#a3a3a3',
        color:THEME_COLOR,
        borderBottomWidth:1,
        width:'82%',
        height:30,
        fontFamily:FONT_FAMILY,
        fontSize:20,
        marginLeft:5,
        paddingBottom:3
    }
});
module.exports = Style;
