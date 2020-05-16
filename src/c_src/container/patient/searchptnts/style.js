import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flex: 1,
        marginLeft: 0,
        backgroundColor: '#fff'
    },
    plusIconStyle: {
        height: 56,
        width: 56
    },
    plusIconContainerStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    smallContainerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        padding: 5,
    },
    searchIconStyle: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginRight: 10,
        flex: 1
    },
    searchContainerStyle: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        flex: 8
    },
    searchInputStyle: {
        height: 50,
        fontSize: 20,
        flex: 5,
        color: THEME_COLOR,
        fontFamily: FONT_FAMILY
    },
    searchButtonStyle: {
        height: 44,
        width: 44,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 4,
        flex: 1
    },
});
module.exports = Style;
