import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  HeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2

  },
  HeaderText: {
    fontSize: 20,
    color: '#FFFFFF'
  },

  container: {
    flex: 1,
    backgroundColor: '#148f77',

    // justifyContent: 'center',
    // alignItems: 'center'

  },
  container2: {
    flex: 1,
    backgroundColor: '#148f77',
  },
  mainhead: {
    flex: 12,
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    paddingTop: 30,
    color: '#fdfefe'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  ImageStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    width: 25,
    height: 25,
    marginRight: 10,
    paddingBottom: 5,

  },
  circleStyle: {

    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100

  },
})
module.export = styles;