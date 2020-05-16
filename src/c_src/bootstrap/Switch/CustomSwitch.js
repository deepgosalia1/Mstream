/*import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';

import styles from '../Style';
import PropTypes from 'prop-types';
export default class Switch extends Component {
  static propTypes = {
    value: PropTypes.bool,
    onChangeValue: PropTypes.func,
    activeText: PropTypes.string,
    inactiveText: PropTypes.string,
    fontSize: PropTypes.number,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    activeBackgroundColor: PropTypes.string,
    inactiveBackgroundColor: PropTypes.string,
    activeButtonBackgroundColor: PropTypes.string,
    inactiveButtonBackgroundColor: PropTypes.string,
    switchWidth: PropTypes.number,
    switchHeight: PropTypes.number,
    switchBorderRadius: PropTypes.number,
    switchBorderColor: PropTypes.string,
    switchBorderWidth: PropTypes.number,
    buttonWidth: PropTypes.number,
    buttonHeight: PropTypes.number,
    buttonBorderRadius: PropTypes.number,
    buttonBorderColor: PropTypes.string,
    buttonBorderWidth: PropTypes.number,
    animationTime: PropTypes.number,
    padding: PropTypes.bool,
  };

  static defaultProps = {
    value: false,
    onChangeValue: () => null,
    activeText: '',
    inactiveText: '',
    fontSize: 16,
    activeTextColor: 'rgba(255, 255, 255, 1)',
    inactiveTextColor: 'rgba(255, 255, 255, 1)',
    activeBackgroundColor: 'rgba(50, 163, 50, 1)',
    inactiveBackgroundColor: 'rgba(137, 137, 137, 1)',
    activeButtonBackgroundColor: 'rgba(255, 255, 255, 1)',
    inactiveButtonBackgroundColor: 'rgba(255, 255, 255, 1)',
    switchWidth: 70,
    switchHeight: 30,
    switchBorderRadius: 15,
    switchBorderColor: 'rgba(0, 0, 0, 1)',
    switchBorderWidth: 0,
    buttonWidth: 25,
    buttonHeight: 25,
    buttonBorderRadius: 15,
    buttonBorderColor: 'rgba(0, 0, 0, 1)',
    buttonBorderWidth: 0,
    animationTime: 150,
    padding: true,
  }

  constructor(props, context) {
    super(props, context);
    this.padding = props.padding ? 5 : 0;
    this.transformValue = (props.switchWidth - props.buttonWidth - this.padding);
    this.state = {
      transformValue: new Animated.Value(props.value ? this.transformValue : this.padding),
      backgroundColor: new Animated.Value(props.value ? 90 : -90),
      buttonBackgroundColor: new Animated.Value(props.value ? 90 : -90),
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps) this.startGroupAnimations();
  }

  startGroupAnimations = () => {
    const { animationTime, onChangeValue, value } = this.props;
    Animated.parallel([
      Animated.spring(this.state.transformValue, {
        toValue: value ? this.transformValue : this.padding,
        duration: animationTime,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration: animationTime,
      }),
      Animated.timing(this.state.buttonBackgroundColor, {
        toValue: value ? 75 : -75,
        duration: animationTime,
      })
    ]).start();
  }

render() {
    const {
      transformValue,
      backgroundColor,
      buttonBackgroundColor,
    } = this.state;

    const {
      value,
      onChangeValue,
      activeText,
      inactiveText,
      fontSize,
      activeTextColor,
      inactiveTextColor,
      activeBackgroundColor,
      inactiveBackgroundColor,
      activeButtonBackgroundColor,
      inactiveButtonBackgroundColor,
      switchWidth,
      switchHeight,
      switchBorderRadius,
      switchBorderColor,
      switchBorderWidth,
      buttonWidth,
      buttonHeight,
      buttonBorderRadius,
      buttonBorderColor,
      buttonBorderWidth,
    } = this.props;

    const backgroundColorValue = backgroundColor.interpolate({
      inputRange: [-90, 90],
      outputRange: [
        inactiveBackgroundColor,
        activeBackgroundColor,
      ],
    });

    const buttonBackgroundColorValue = buttonBackgroundColor.interpolate({
      inputRange: [-90, 90],
      outputRange: [
        inactiveButtonBackgroundColor,
        activeButtonBackgroundColor,
      ],
    });

    const containerHeight = switchHeight > buttonHeight ? switchHeight : buttonHeight;
    const containerWidth = switchWidth > buttonWidth ? switchWidth : buttonWidth;

    return (
      <TouchableWithoutFeedback
        onPress={onChangeValue}
      >
        <View
          style={[
            styles.container,
            {
              height: containerHeight,
              width: containerWidth,
            }
          ]}
        >
          <Animated.View
            style={{
              backgroundColor: backgroundColorValue,
              height: switchHeight,
              width: switchWidth,
              borderRadius: switchBorderRadius,
              borderWidth: switchBorderWidth,
              borderColor: switchBorderColor,
              zIndex: 1,
              position: 'absolute',
              top: (containerHeight - switchHeight) / 2,
              left: (containerWidth - switchWidth) / 2,
            }}
          >
            <View style={styles.animatedContainer}>
              <View style={styles.textContainer}>
                <Text style={{ color: activeTextColor, fontSize }}>
                  {value ? activeText : ''}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ color: inactiveTextColor, fontSize }}>
                  {value ? '' : inactiveText}
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              backgroundColor: buttonBackgroundColorValue,
              borderRadius: buttonBorderRadius,
              borderWidth: buttonBorderWidth,
              borderColor: buttonBorderColor,
              width: buttonWidth,
              height: buttonHeight,
              zIndex: 3,
              position: 'absolute',
              top: (containerHeight - buttonHeight)/2,
              left: transformValue,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
*/
/*
import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  ViewPropTypes,
  StyleSheet,
  Animated,
  Easing,
  PanResponder,
  TouchableOpacity
} from 'react-native'

export default class extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    value: PropTypes.bool,
    defaultValue: PropTypes.bool,
    disabled: PropTypes.bool,
    circleColorActive: PropTypes.string,
    circleColorInactive: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundInactive: PropTypes.string,
    onAsyncPress: PropTypes.func,
    onSyncPress: PropTypes.func,
    style: ViewPropTypes.style
  }

  static defaultProps = {
    width: 40,
    height: 21,
    defaultValue: false,
    disabled: false,
    circleColorActive: 'white',
    circleColorInactive: 'white',
    backgroundActive: '#43d551',
    backgroundInactive: '#dddddd',
    onAsyncPress: (callback) => {callback(true)}
  }

  constructor (props, context) {
    super(props, context)
    const { width, height } = props

    this.offset = width - height + 1
    this.handlerSize = height - 2

    const value = props.value || props.defaultValue
    this.state = {
      value,
      toggleable: true,
      alignItems: value ? 'flex-end' : 'flex-start',
      handlerAnimation: new Animated.Value(this.handlerSize),
      switchAnimation: new Animated.Value(value ? -1 : 1)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { value } = this.state
    if (nextProps === this.props) {
      return
    }

    if (typeof nextProps.value !== 'undefined' && nextProps.value !== value) {
      this.toggleSwitch(true)
    }
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onPanResponderRelease
    })
  }

  _onPanResponderGrant = (evt, gestureState) => {
    const { disabled } = this.props
    if (disabled) return

    this.animateHandler(this.handlerSize * 6 / 5)
  }

  _onPanResponderMove = (evt, gestureState) => {
    const { value, toggleable } = this.state
    const { disabled } = this.props
    if (disabled) return

    this.setState({
      toggleable: value ? (gestureState.dx < 10) : (gestureState.dx > -10)
    })
  }

  _onPanResponderRelease = (evt, gestureState) => {
    const { handlerAnimation, toggleable, value } = this.state
    const { height, disabled, onAsyncPress, onSyncPress } = this.props

    if (disabled) return

    if (toggleable) {
      if (onSyncPress) {
        this.toggleSwitch(true, onSyncPress)
      } else {
        onAsyncPress(this.toggleSwitch)
      }
    } else {
      this.animateHandler(this.handlerSize)
    }
  }

  toggleSwitch = (result, callback = () => null) => { // result of async
    const { value, switchAnimation } = this.state
    const toValue = !value

    this.animateHandler(this.handlerSize)
    if (result) {
      this.animateSwitch(toValue, () => {
        callback(toValue)
        this.setState({
          value: toValue,
          alignItems: toValue ? 'flex-end' : 'flex-start'
        })
        switchAnimation.setValue(toValue ? -1 : 1)
      })
    }
  }

  animateSwitch = (value, callback = () => null) => {
    const { switchAnimation } = this.state

    Animated.timing(switchAnimation,
      {
        toValue: value ? this.offset : -this.offset,
        duration: 200,
        easing: Easing.linear
      }
    ).start(callback)
  }

  animateHandler = (value, callback = () => null) => {
    const { handlerAnimation } = this.state

    Animated.timing(handlerAnimation,
      {
        toValue: value,
        duration: 200,
        easing: Easing.linear
      }
    ).start(callback)
  }

  render() {
    const { switchAnimation, handlerAnimation, alignItems, value } = this.state
    const {
      backgroundActive, backgroundInactive,
      width, height, circleColorActive, circleColorInactive, style,
      ...rest
    } = this.props

    const interpolatedBackgroundColor = switchAnimation.interpolate({
      inputRange: value ? [-this.offset, -1]: [1, this.offset],
      outputRange: [backgroundInactive, backgroundActive]
    })

    const interpolatedCircleColor = switchAnimation.interpolate({
      inputRange: value ? [-this.offset, -1]: [1, this.offset],
      outputRange: [circleColorInactive, circleColorActive]
    })

    return (
      <Animated.View
        {...rest}
        {...this._panResponder.panHandlers}
        style={[styles.container, style, {
          width, height,
          alignItems,
          borderRadius: height / 2,
          backgroundColor: interpolatedBackgroundColor }]}>
        <Animated.View style={{
          backgroundColor: interpolatedCircleColor,
          width: handlerAnimation,
          height: this.handlerSize,
          borderRadius: height / 2,
          transform: [{ translateX: switchAnimation }]
        }} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center'
  }
})*/
import React, { Component } from 'react'
import {
   View,
   Switch,
   StyleSheet
} 
from 'react-native'

export default CustomSwitch = (props) => {
   return (
      <View style = {styles.container}>
         <Switch
            onValueChange = {props.toggleSwitch1}
            value = {props.switch1Value}/>
         <Switch
            onValueChange = {props.toggleSwitch2}
            value = {props.switch2Value}/>
      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100
   }
})