import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Record extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '',
    tabBarLabel: 'Record',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab B</Text>
      </View>
      )
  }
}

export default Record

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
