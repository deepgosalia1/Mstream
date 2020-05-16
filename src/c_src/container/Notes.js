import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Notes extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '',
    tabBarLabel: 'Notes',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab C</Text>
      </View>
      )
  }
}

export default Notes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
