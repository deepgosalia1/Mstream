import { StyleSheet, Dimensions } from 'react-native';
import {FONT_FAMILY} from '../../../components/utils/fontUtils';

var style = StyleSheet.create({

    renderMainViewStyle: {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    renderMainViewImageViewStyle: {
        alignSelf: 'flex-start',
        flex: 1,
        marginTop: 20,
        marginLeft: 10
    },
    renderMainViewImageStyle: {
        height: 40,
        width: 40,
        justifyContent:'center',
        alignSelf:'center'
    },
    renderMainViewTextViewStyle: {
        flex: 8,
        marginTop: 16,
        marginLeft: 10,
        flexDirection: 'column'
    },
    renderMainViewTextStyle: {
        fontSize: 17,
        flex: 1,
        color: 'black',
        fontFamily:FONT_FAMILY
    },
    renderMainViewSwtichesViewStyle: {
        //flex: 1,
        justifyContent: 'center',
        marginRight: 10,
    },
    renderMainViewDatePickerStyle: {
        marginLeft: -7,
        flex: 1,
        flexDirection: 'row',
    },
    renderMainViewTouchableStyle: {
        marginTop: 5,
        width: 123,
        height: 50,
        flexDirection: 'row'
    },
    renderMainViewTouchableImageStyle: {
        width: 30,
        height: 30
    },
    renderMainViewTouchableTextStyle: {
        height: 30,
        width: null,
        flex: 1,
        //marginRight: 25,
        marginTop: 5,
        fontSize: 14,
        fontFamily:FONT_FAMILY
    },
    renderView: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor:'#fff'
    },
    renderViewHeader: {
        alignSelf: 'flex-start',
        flex: 1,
        width:'100%',
        backgroundColor:'#fff',
        paddingTop: 20,
        paddingBottom: 10
    },
    renderHeaderText: {
        marginLeft: 20,
        alignItems: 'flex-start',
        fontSize: 22,
        fontFamily:FONT_FAMILY,
        color: 'black'
    },
    card2style: {
        flexDirection: 'row',
        marginTop:-5
    },
    card2calender: {
        flex: 1,
        marginTop: 10,
        marginBottom: 20,
        width: 120,
        borderRadius: 5,
    },
    card2calendertext: {
        borderRadius: 5,
        borderColor: '#FF5722',
        color: '#fff',
        backgroundColor: '#42c8f4',
        fontSize: 14,
        textAlign: 'center',
    },
    card3View: {
        marginTop: 15,
        marginLeft: 5,
        flexDirection: 'row'
    },
    card4View: {
        height: 60,
        marginTop: 5,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#aaa',
        justifyContent:'center',
        alignSelf:'center'
    },
    renderMainViewImageViewStyle4: {
        alignSelf: 'flex-start',
        flex: 1,
        alignSelf: 'center',
        marginLeft: 10
    },
});
module.exports = style;