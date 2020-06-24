import React, { Component } from 'react'
import {
   View,
   Switch,
   StyleSheet
} 
from 'react-native'

export default Switches = (props) => {
   return (
      <View>
         <Switch
            onValueChange = {props.toggleSwitch}
            value = {props.switchValue}/>
         {/* <Switch
            onValueChange = {props.toggleSwitch2}
            value = {props.switch2Value}/>
         <Switch
            onValueChange = {props.toggleSwitch3}
            value = {props.switch3Value}/>    */}
      </View>
   )
}
