import React, { Component } from "react";
import {
  PickerIOS,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Button,
  TouchableComponent,
  Animated,
  TouchableHighlight,
  Image,
  Vibration,
  Picker
} from "react-native";

import PropTypes from 'prop-types';
//import PickerAndroid, { PickerItemAndroid } from './PickerAndroid';
import langs from './lang';
import Style from '../Style';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];


let _Picker = Platform.OS === 'ios' ? PickerIOS : Picker;
let _PickerItem = Platform.OS === 'ios' ? _Picker.Item : Picker.Item;

export default class SelectionView extends Component {
  constructor(props) {
    super(props);
    this.lang = langs[this.props.lang];
    this.state = {
      options: this.props.options,
      animatedHeight: new Animated.Value(0),
      allowPointerEvents: true,
      modalVisible: false,
      event:{},
      selectedOption: this.props.options.filter((op) => op.value === this.props.defaultSelectedValue)[0] || {}
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    console.log('SelectionView', 'In selection view')
  }

  static propTypes = {
    options: PropTypes.array.isRequired,
    defaultSelectedValue: PropTypes.any,
    onConfirm: PropTypes.func,
    onSelect: PropTypes.func,
    onCancel: PropTypes.func,
    lang: PropTypes.string,
    style: PropTypes.object,
    buttonCancelStyle: PropTypes.any,
    buttonAcceptStyle: PropTypes.any,
    headerStyle: PropTypes.any,
  }

  static defaultProps = {
    lang: "zh-CN",
    style: { backgroundColor: "white" },
    onConfirm: () => {
    },
    onSelect: () => {
    },
    onCancel: () => {
    },
    onClear: () => {
    },
    scrollPickerEvent: () => {
    }
    
  }

  

    show(evt){
  
      //TODO : Test
    
      if (this.props.scrollPickerEvent) {
        this.props.scrollPickerEvent(evt,this.props.height,'up')
      }

      this.setState({ event: evt });
      this.setModalVisible(true);
    }
   
  setModalVisible(visible) {
    const { height, duration } = this.props;

    // slide animation
    if (visible) {
      this.setState({ modalVisible: visible });
      return Animated.timing(
        this.state.animatedHeight,
        {
          toValue: height,
          duration: duration
        }
      ).start();
    } else {
      return Animated.timing(
        this.state.animatedHeight,
        {
          toValue: 0,
          duration: duration
        }
      ).start(() => {
        //Reset Keyboard
        if (this.props.scrollPickerEvent) {
          this.props.scrollPickerEvent(this.state.event,this.props.height,'down');
        }
        this.setState({ modalVisible: visible });
      });
    }
  }


  componentWillReceiveProps(nextProps) {
    let selectedOption = nextProps.options.filter((op) => op.value === nextProps.defaultSelectedValue)[0] || {}
    this.setState({
      selectedOption,
      defaultSelectedValue: nextProps.defaultSelectedValue,
    })
  }

  hide(){
    this.setModalVisible(false);
  }

  clearFromExternalSource() {
    this.setState({ selectedOption: {} });
  }


  setOption(options, defaultSelectedValue) {
    this.setState(Object.assign({}, this.state, {
      options: options,
      selectedOption: options.filter((op) => op.value === defaultSelectedValue)[0] || {}
    }))
  }

  getTitleElement() {
    const { placeholder, customStyles } = this.props;
    if (!this.state.selectedOption.value && placeholder) {
      return (
        <Text style={[Style.placeholderText, customStyles.placeholderText]}>{placeholder}</Text>

      );
    }
    return (
      <Text style={[Style.dateText, customStyles.dateText]}>{this.state.selectedOption.value}</Text>

    );
  }

  _renderIcon() {
    const {
      showIcon,
      iconSource,
      iconComponent,
      customStyles
    } = this.props;

    if (showIcon) {
      if (iconComponent) {
        return iconComponent;
      }
      return (
        <Image
          style={[Style.dateIcon, customStyles.dateIcon]}
          source={iconSource}
        />
      );
    }

    return null;
  }
  _renderInputFieldIcon() {
    const {
      showInputIcon,
      iconSourceInputField,
      iconComponent,
      customStyles
    } = this.props;

    if (showInputIcon) {
      if (iconComponent) {
        return iconComponent;
      }
      return (
        <Image
          style={[Style.dateFieldIcon, customStyles.dateFieldIcon]}
          source={iconSourceInputField}
        />
      );
    }

    return null;
  }

  render() {
    const {
      mode,
      style,
      customStyles,
      disabled,
      minDate,
      maxDate,
      minuteInterval,
      timeZoneOffsetInMinutes,
      cancelBtnText,
      confirmBtnText,
      clearBtnText,
      TouchableComponent,
      testID,
      cancelBtnTestID,
      confirmBtnTestID,
      clearBtnTestID,
      showUnderLine
    } = this.props;

    const dateInputStyle = [
      Style.dateInput, customStyles.dateInput,
      disabled && Style.disabled,
      disabled && customStyles.disabled
    ];

    return (
      <View style={{ flex: 0.5 }}>
        {
          Platform.OS == 'ios' &&
          <TouchableComponent
            style={[Style.dateTouch]}
            underlayColor={'transparent'}
            onPress={(evt) => this.show(evt)}
            testID={testID}>
            <View>
              <View style={[Style.dateTouchBody, customStyles.dateTouchBody]}>
                <View style={Style.lineStyle} />

                {
                  !this.props.hideText ?
                    <View style={dateInputStyle}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' , backgroundColor : 'transparent'}}>
                        {this._renderInputFieldIcon()}
                        {this.getTitleElement()}
                        {this._renderIcon()}
                      </View>
                      { showUnderLine ? <View style={Style.lineStyle} /> : null}
                    </View>
                    :
                    <View />
                }

                {
                  <Modal
                    transparent={true}
                    animationType="none"
                    visible={this.state.modalVisible}
                    supportedOrientations={SUPPORTED_ORIENTATIONS}
                    onRequestClose={() => { this.setModalVisible(false); }}>
                    <View
                      style={{ flex: 1 }}
                    >
                      <TouchableComponent
                        style={Style.datePickerMask}
                        activeOpacity={1}
                        underlayColor={'#00000077'}
                        onPress={this.hide}
                      >
                        <TouchableComponent
                          underlayColor={'#fff'}
                          style={{ flex: 1 }}
                        >
                          <Animated.View
                            style={[Style.datePickerCon, { height: this.state.animatedHeight }, customStyles.datePickerCon]}
                          >

                            <View style={{ flexDirection: 'row', flex: 1 }}>
                              <TouchableComponent
                                underlayColor={'transparent'}
                                onPress={() => {
                                  // this.setState({ selectedOption: this.props.options.filter((op) => op.value === this.props.defaultSelectedValue)[0] || {} });
                                  this.setState({ selectedOption: {} });
                                  if (this.props.onClear) {
                                    this.props.onClear()
                                  }

                                }}
                                style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}
                                testID={clearBtnTestID}
                              >
                                <Text style={[Style.btnClearText]}>{clearBtnText}</Text>
                              </TouchableComponent>

                              <TouchableComponent
                                underlayColor={'transparent'}
                                onPress={() => {
                                  if (this.props.onConfirm) {
                                    if (!this.state.selectedOption.value && this.state.selectedOption.value !== 0) {
                                      let submitData = this.state.options[0] || {};
                                      if (!submitData && this.state.defaultSelectedValue) {
                                        submitData = this.state.options.filter((op) => op.value === this.state.defaultSelectedValue)[0];
                                      }
                                      this.props.onConfirm(submitData);
                                    } else {
                                      this.props.onConfirm(this.state.selectedOption);
                                    }
                                  }
                                  this.setModalVisible(false);
                                }}
                                style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}
                                testID={confirmBtnTestID}
                              >
                                <Text style={[Style.btnTextText, customStyles.btnTextConfirm]}>{confirmBtnText}</Text>
                              </TouchableComponent>

                            </View>
                            <_Picker
                    
                              style={[Style.datePicker, customStyles.datePicker]}
                              selectedValue={(this.state.selectedOption.value || this.state.selectedOption === 0) ? this.state.selectedOption.value : this.state.defaultSelectedValue}
                              onValueChange={val => {
                                let curOption = this.state.options.filter((op) => op.value === val)[0];
                                this.props.onSelect(curOption);
                                this.setState(
                                  Object.assign({}, this.state, { selectedOption: curOption }));
                              }}>
                              {this.state.options.map((option, i) => {
                                return (
                                  <_PickerItem
                                    key={i}
                                    value={option.value}
                                    label={option.text}
                                  />
                                )
                              })}
                            </_Picker>
                            <TouchableComponent
                              underlayColor={'transparent'}
                              onPress={() => {
                                if (this.props.onCancel) {
                                  this.props.onCancel();
                                }
                                this.setModalVisible(false);
                              }}
                              style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}
                              testID={cancelBtnTestID}
                            >
                              <Text
                                style={[Style.btnTextText, Style.btnTextCancel, customStyles.btnTextCancel]}
                              >
                                {cancelBtnText}
                              </Text>
                            </TouchableComponent>
                          </Animated.View>
                        </TouchableComponent>
                      </TouchableComponent>
                    </View>
                  </Modal>
                }

              </View>
            </View>
          </TouchableComponent>
        }

        {
          Platform.OS == 'android' &&
          <Picker
          
            selectedValue={(this.state.selectedOption.value || this.state.selectedOption === 0) ? this.state.selectedOption.value : this.state.defaultSelectedValue}
            onValueChange={val => {
              let curOption = this.state.options.filter((op) => op.value === val)[0];
              this.props.onSelect(curOption);
              this.setState(
                Object.assign({}, this.state, { selectedOption: curOption }));
            }}>
            {this.state.options.map((option, i) => {
              return (
                <Picker.Item
                  key={i}
                  value={option.value}
                  label={option.text}
                />
              )
            })}
          </Picker>
        }
      </View>

    );
  }
}

SelectionView.defaultProps = {
  // component height: 216(DatePickerIOS) + 1(borderTop) + 42(marginTop), IOS only
  height: 259,

  // slide animation duration time, default to 300ms, IOS only
  duration: 300,
  confirmBtnText: 'Confirm',
  cancelBtnText: 'Cancel',
  clearBtnText: 'Clear',
  customStyles: {},

  iconSource: require('../../components/Assets/images/meme-1.png'),
  iconSourceInputField: require('../../components/Assets/images/meme-1.png'),

  // whether or not show the icon
  showIcon: true,
  showInputIcon: true,

  showUnderLine : true,

  disabled: false,
  hideText: false,
  placeholder: '',
  TouchableComponent: TouchableHighlight,
  modalOnResponderTerminationRequest: e => true
};

SelectionView.propTypes = {
  height: PropTypes.number,
  duration: PropTypes.number,
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  clearBtnText: PropTypes.string,
  iconSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  iconSourceInputField: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  iconComponent: PropTypes.element,
  customStyles: PropTypes.object,
  showIcon: PropTypes.bool,
  showInputIcon: PropTypes.bool,
  showUnderLine : PropTypes.bool,
  disabled: PropTypes.bool,
  onDateChange: PropTypes.func,
  onOpenModal: PropTypes.func,
  onCloseModal: PropTypes.func,
  onPressMask: PropTypes.func,
  placeholder: PropTypes.string,
  modalOnResponderTerminationRequest: PropTypes.func,
  is24Hour: PropTypes.bool
};

