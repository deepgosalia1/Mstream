import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

var Style = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height:'100%',
        marginLeft: 0,
        backgroundColor:'#fff'
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
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 350,
        marginBottom:0
    },
    mapStyle: {
        height: 350,
        width: '100%'
    },
    markerTextStyle: {
        color: THEME_COLOR,
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10
    },
    draggerStyle: {
        width: '100%',
        backgroundColor: '#ccc',
        alignItems: 'center',
    },
    draggerImageStyle: {
        height: 15,
        width: 30
    },
    flatListContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    memberImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 10
    },
    memberDataStyle: {
        margin: 10,
        alignSelf: 'center',
        fontFamily: FONT_FAMILY
    },
    memberNameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME_COLOR,
        paddingBottom: 5
    },
    smallContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff'
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
        padding: 0,
        marginRight: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        flex: 7
    },
    searchInputStyle: {
        height: 50,
        fontSize: 20,
        flex: 5,
        color: THEME_COLOR,
        paddingBottom: 0,
        fontFamily: FONT_FAMILY
    },
    searchButtonStyle: {
        height: 38,
        width: 38,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 4,
        marginRight: 4,
        flex: 1
    },
    physicianNameStyle: {
        marginTop: 2,
        color: "#127265",
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal'
    },
    specializationStyle: { color: "#0d2220", fontSize: 18, fontFamily: 'Montserrat', fontStyle: 'normal',flex:4 },
    addressStyle: { color: "#757575", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal',marginBottom:15 },
    pincodeStyle: { color: "#757575", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal',marginBottom:15 },
    laneView: {
        left:7,
        right:17,
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 0,
        padding: 5,
        paddingBottom:2,
        borderBottomWidth:0.7,
        width:'97%',
        alignItems:'center',
        justifyContent:'center'
    },
    sideImage: {
        width: 70,
        height: 70,
        margin: 10,
        marginLeft:1,
        //alignSelf: 'center'
    },
  
});
module.exports = Style;
