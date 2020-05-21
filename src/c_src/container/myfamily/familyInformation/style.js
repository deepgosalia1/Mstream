import {StyleSheet,Platform} from 'react-native';

var styles = StyleSheet.create({

    MainContainer: {
      // Setting up View inside content in Vertically center.
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      justifyContent: 'center',
      
  
    },
    bottomTextStye: {
      fontSize: Platform.OS == 'ios' ? 12 : 16,
      color: 'black',
      padding: 5,
      fontStyle: 'normal'
    },
    bottomView: {
      flex: 1,
      alignItems: 'center'
    },
    bottomContainer: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      flex: 1,
      padding: 5
    },
    laneView: {
      margin: 10,
      flexDirection: 'row',
    },
    imageStye: {
      width: 36,
      height: 36,
      padding: 5,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    container: {
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor: 'transparent'
    },
    header: {
      borderBottomWidth: 0.5,
      borderBottomColor: 'lightgrey',
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
    },
    buttonWrap: {
      flexDirection: 'row',
      flex: 1,
      position: "relative",
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop: 10 // Use for physician dashboard
    },
    buttonCentre: {
      height: 70,
      width: 80,
      backgroundColor: 'transparent',
      marginLeft: 10,
    },
    button: {
      height: 15,
      width: 15
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    outerCircle: {
      backgroundColor: 'blue',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      justifyContent: 'center',
      alignItems: 'center'
    }
  
  });

  module.exports =styles;