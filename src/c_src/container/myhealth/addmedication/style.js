import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';
import { margin } from '../../../bootstrap/Picker/themes/default';
import { colors } from 'react-native-elements';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        backgroundColor:'#fff'
    },
    leftImageStyle:{
        width:25,
        height:25
    },
    textInputStyles:{
        borderBottomColor:'#a3a3a3',
        borderBottomWidth:1,
        width:'82%',
        height:30,
        fontFamily:FONT_FAMILY,
        fontSize:20,
        marginLeft:10,
        paddingBottom:3,
        color:'#a3a3a3'
    }
});
module.exports = Style;
