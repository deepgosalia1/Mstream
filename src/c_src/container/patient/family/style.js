import { StyleSheet, Dimensions } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';
var Style = StyleSheet.create({
    flatListContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    }, memberImageStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10
    }, memberDataStyle: {
        margin: 10,
        alignSelf: 'center',
        fontFamily: FONT_FAMILY
    },
    memberNameStyle: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: THEME_COLOR,
        paddingBottom: 2,
        fontFamily: FONT_FAMILY

    },
    memberType: {
        fontSize: 16,
        color: 'black',
        paddingBottom: 5,
        fontFamily: FONT_FAMILY

    },
    memberAdd: {
        fontSize: 14,
        color: '#555',
        //paddingBottom: 5
        fontFamily: FONT_FAMILY

    },
});
module.exports = Style;