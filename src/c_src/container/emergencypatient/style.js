import { StyleSheet, Dimensions }  from 'react-native';
import {FONT_FAMILY} from '../../components/utils/fontUtils';
import { THEME_COLOR } from '../../components/utils/colorUtils'

var styles= StyleSheet.create({
    cardContainerStyle: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 10
    },
    cardStyle: {
        width:'44%',
        //height: '44%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        margin: '3%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { x: 0, y: 10}
    },
    callButtonStyle: {
        position: 'absolute',
        top: 60,
        right: 10
    },
    callImageStyle: {
        width: 40,
        height: 40
    },
    cardImageStyle: {
        width: '100%',
        height: 80,
        marginBottom: 15
    },
    cardNameStyle: {
        fontWeight: 'bold',
        color: THEME_COLOR,
        fontSize: 18,
        fontFamily: FONT_FAMILY,
        marginLeft: 10,
        marginBottom: 5
    },
    cardRelationStyle: {
        color: '#3a3a3a',
        fontSize: 18,
        fontFamily: FONT_FAMILY,
        marginLeft: 10,
        marginBottom: 5
    },
    cardContactStyle: {
        color: '#000',
        fontFamily: FONT_FAMILY,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10
    },
    redButtonStyle: {
        alignSelf: 'center',
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#d51e18',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    redButtonTextStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: -5,
        fontFamily: FONT_FAMILY
    },
    addIconStyle: {
        height: 56,
        width: 56,
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    editViewStyle: {
        position: 'absolute',
        width: '100%',
        //height: '100%',
        backgroundColor: '#000',
        opacity: 0.8
    },
    editButtonStyle: {
        backgroundColor: THEME_COLOR,
        position: 'absolute',
        width: 50,
        height: 50,
        opacity: 1
    }
})

module.exports = styles