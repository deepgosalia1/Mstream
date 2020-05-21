import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Camera extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '',
    tabBarLabel: 'Camera',
  })

  onPressOpenDrawer = () => {
    this.props.navigation.navigate('DrawerOpen',{listingAttributes: 'listing'})
   // this.props.navigation.state.params.uploadCancelled(`this.state.image`);
}

  render () {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.onPressOpenDrawer}>
      <Text style={styles.text}>I'm Tab A</Text>
                      </TouchableOpacity>
         
      </View>
      )
  }
}

export default Camera

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
