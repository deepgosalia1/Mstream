
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform, Image, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInput from '../bootstrap/TextInput/Input'
import Container from '../components/Custom components/Container';
import Button from '../components/Custom components/Button';
import * as GeneralPref from '../components/utils/GeneralPref';
import * as Pref from '../components/utils/Preferences';
import * as api from '../components/clients/api';
import * as colorUtils from '../components/utils/colorUtils'
import Moment from 'moment';
import { RadioButton } from '../bootstrap/RadioButton'
import CustomScrollView from '../components/Custom components/CustomSrollview'
import CustomPicker from '../components/customcomponents/custompicker'
import SelectionView from '../bootstrap/Picker/SelectionView';
import * as fontUtils from '../components/utils/fontUtils'

global.x = false
// var y;
var deviceToken;
var lastSyncedTime;
_scroll = null
var optionTypes =
  [
    {
      "value": "English",
      "text": "English"
    },
    {
      "value": "Spanish",
      "text": "Spanish"
    }, {
      "value": "French",
      "text": "French"
    }

  ]
class LoginScreen extends Component {

  constructor(props) {
    
    super(props)
    this.state = {
      username: "",
      password: "",
      languageSelection: "",
      isPatientSelected: false,
      isPhysicianSelected: false,
      picker: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount() {
    GeneralPref.getDeviceToken().then((result) => {
      deviceToken = result;
    })
    GeneralPref.getLastSyncedTime(Pref.LAST_SYNC_TIME).then((syncTime) => {
      if (syncTime != null) {
        lastSyncedTime = syncTime;
        console.log('lastSyncedTime:', lastSyncedTime)
      }
      else {
        lastSyncedTime = Moment(new Date().setTime(0)).format(Pref.SYSTEM_PARAMETERS_DATE_FORMAT); /* Pass 0 to load complete list */
        console.log('error fallback lastSyncedTime:', lastSyncedTime)
      }
    })
  }


  loginPress() {
 loggedInUser = this.state.isPatientSelected ? 'patient' : 'physician';
    this.props.navigation.navigate('Emergency', { loggedInUser })
//this.props.navigation.navigate('newRecording')
  }

  componentWillUnmount() {

  }

  togglePicker = () => {
    this.setState({ picker: !this.state.picker })
  }

  setValue = (data) => {
    this.setState({ languageSelection: data })
  }

  // render() {
  //   return (
  //     <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: colorUtils.SCREEN_BG_COLOR }}>
  //       <View style={styles.mainContainer}>
  //         <Image
  //           style={{ width: '100%', height: 250 }}
  //           source={require('../components/Assets/Login/login_bg.png')}
  //         />
  //         <Image
  //           style={{ width: '70%', height: 40 }}
  //           source={require('../components/Assets/Login/logo.png')}
  //         />
  //       </View>
  //       <Container>
  //         <View style={styles.textContainer}>

  //           <TextInput
  //             label='Username'
  //             style={{ width: '50%',fontFamily:'Montserrat',fontStyle:'normal',color:'#adadad'}}
  //             placeholder='Username'
  //             fontSize={20}
  //             fontFamily='Montserrat'
  //             value={this.state.username}
  //             onChangeText={text => {
  //               this.setState({
  //                 username: text
  //               })
  //             }}
  //           />

  //           <TextInput
  //             secureTextEntry={true}
  //             style={{ width: '50%',fontFamily:'Montserrat',fontStyle:'normal',color:'#adadad'}}
  //             label='Password'
  //             placeholder='Password'
  //             fontSize={20}
  //             fontFamily='Montserrat'
  //             value={this.state.password}
  //             onChangeText={text => {
  //               this.setState({
  //                 password: text
  //               })
  //             }}
  //           />

  //           <TextInput
  //             secureTextEntry={true}
  //             style={{ width: '50%',fontFamily:'Montserrat',fontStyle:'normal',color:'#adadad'}}
  //             label='English'
  //             placeholder='English'
  //             fontSize={20}
  //             color={'#adadad'}
  //             fontFamily='Montserrat'
  //             value={this.state.languageSelection}
  //             onChangeText={text => {
  //               this.setState({
  //                 languageSelection: text
  //               })
  //             }}
  //           />

  //         </View>
  //       </Container>
  //       <Container>
  //         <Button
  //           label="LOG IN"
  //           styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
  //           onPress={this.loginPress.bind(this)} />
  //       </Container>


  // <Container >

  //   <View style={{ marginRight: 15, flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
  //     <RadioButton
  //       isSelected={this.state.isPhysicianSelected ? this.state.isPhysicianSelected : false}
  //       obj={{ label: 'Physician', value: 'Physician' }}
  //       index={0}
  //       fontFamily='Montserrat'
  //       fontStyle={'normal'}
  //       labelHorizontal={true}
  //       buttonColor={colorUtils.BUTTON_COLOR}
  //       labelColor={'#6b6b6b'}
  //       style={{ paddingRight: 20 }}
  //       //style={[i !== radiobuttonObject.length - 1 && styles.radioStyle]}
  //       onPress={(value, index) => {
  //         this.setState({
  //           isPhysicianSelected: true,
  //           isPatientSelected: false
  //         })
  //       }}
  //     />
  //     <RadioButton
  //       isSelected={this.state.isPatientSelected ? this.state.isPatientSelected : false}
  //       obj={{ label: 'Patient', value: 'Patient' }}
  //       index={1}
  //       fontFamily='Montserrat'
  //       fontStyle={'normal'}
  //       labelHorizontal={true}
  //       buttonColor={colorUtils.buttonColor}
  //       labelColor={'#6b6b6b'}
  //       //style={[i !== radiobuttonObject.length - 1 && styles.radioStyle]}
  //       onPress={(value, index) => {
  //         this.setState({
  //           isPhysicianSelected: false,
  //           isPatientSelected: true
  //         })
  //       }}
  //     />
  //   </View>
  // </Container>


  //       {/* <Container>
  //         <View style={{
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           flex: 1
  //         }}>
  //           <TouchableOpacity onPress={this.onForgotPasswordPress.bind(this)}>
  //             <Text style={styles.headline} >Forgot Password</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </Container>
  //       <Container>
  //         <View style={{
  //           flex: 1,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //           <Text>Don't have an account? </Text>
  //           <TouchableOpacity onPress={this.onForgotPasswordPress.bind(this)}>
  //             <Text style={styles.headline} >Sign Up</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </Container> */}
  //     </KeyboardAwareScrollView >

  //   )
  // }
  _onRef = (property, view) => {
    this[property] = view
  }
  // 
  _scrollIntoView = (ref, height, action) => {
    if (this._scroll) this._scroll.scrollIntoView(ref, height, action)
  }
  render() {
    const win = Dimensions.get('window');
    let imageHeight = ((40 / 100) * win.height)
    global.x = this.state.isPatientSelected
   // y = this.state.isPhysicianSelected
    console.log(x)
    return (
      <CustomScrollView
        style={{ backgroundColor: '#fff' }}
        ref={scroll => this._onRef('_scroll', scroll)}
        scrollEnabled={!this.state.picker}>

        <View style={styles.mainContainer}>

          <Image
            resizeMode='stretch'
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: '100%',
              height: imageHeight
            }}
            source={require('../components/Assets/Login/login_bg.png')}
          />
          <Image
            style={{ width: '80%', height: 50, resizeMode: 'stretch' }}
            source={require('../components/Assets/Login/logo.png')}
          />
        </View>
        <Container>
          <View style={styles.textContainer}>
            <View >
              <Image source={require('../components/Assets/Login/username.png')} style={styles.ImageStyle} />
              <TextInput
                label='Username'
                style={{ width: '100%' }}
                marginBottom={10}
                paddingTop={0}
                paddingRight={0}
                paddingBottom={5}
                paddingLeft={30}
                fontSize={20}
                placeholder='Username'
                color='#adadad'
                keyboardStyle="numbers-and-punctuation"
                autoCorrect={false}
                value={this.state.username}
                onChangeText={text => {

                  this.setState({
                    username: text
                  })
                }}

              />
            </View>
            <View >
              <Image source={require('../components/Assets/Login/password.png')} style={styles.ImageStyle} />
              <TextInput
                secureTextEntry={true}
                style={{ width: '100%' }}
                marginBottom={10}
                paddingTop={0}
                paddingRight={0}
                paddingBottom={5}
                paddingLeft={30}
                fontSize={20}
                label='Password'
                placeholder='Password'
                color='#adadad'
                value={this.state.password}
                onChangeText={text => {
                  this.setState({
                    password: text
                  })
                }}
              />
            </View>
            <TouchableOpacity onPress={(evt) => {
              this.togglePicker()
              //this._scroll.scrollToEnd()
              this._scrollIntoView(evt.nativeEvent.target, 370, 'up')
            }}>
              <View pointerEvents='none' style={{ backgroundColor: 'transparent', height: 52 }}>
                <Image source={require('../components/Assets/Login/language.png')} style={styles.pickerLeftImageStyle} />
                <TextInput
                  style={{ width: '100%' }}
                  marginBottom={10}
                  paddingTop={10}
                  paddingRight={0}
                  paddingBottom={5}
                  paddingLeft={30}
                  fontSize={20}
                  label='Language'
                  placeholder='English'
                  color='#adadad'
                  value={this.state.languageSelection}
                  editable={false}
                />
                <Image source={require('../components/Assets/Picker/down.png')} style={styles.PickerStyle} />
              </View>
            </TouchableOpacity>

            {/* <SelectionView
              lang="en-US"
              placeholder='English'
              minuteInterval={10}
              showIcon={true}
              showInputIcon={true}
              iconSource={require('../components/Assets/Picker/down.png')}
              iconSourceInputField={require('../components/Assets/Login/language.png')}
              scrollPickerEvent={(evt, height, action) => {
                this._scrollIntoView(evt.nativeEvent.target, height,action)
                //this.scroll.props.scrollIntoView(evt.target)
              }}
              
              onConfirm={(option) => {
                //this.setState({ [name]: option.value })

              }}
              onSelect={(option) => {

              }}

              onClear={() => {

              }}

              customStyles={{
                dateIcon: {
                    width: 15,
                    height: 15,
                    alignSelf:'center'
                },
                dateFieldIcon:{
                  width: 15,
                  height: 15,
                  alignSelf:'center'
                },
                placeholderText:{
                  marginLeft:1
                }
                // ... You can check the source to find the other keys.
            }}
              options={optionTypes}
              
            >
            </SelectionView> */}


          </View>
        </Container>
        <Container>
          <TouchableOpacity
            onPress={this.loginPress.bind(this)}
            style={styles.primaryButton}>
            <Image style={{ width: '100%', height: 50 }} source={require('../components/Assets/Login/login_btn.png')} />
          </TouchableOpacity>

        </Container>
        <Container >
          <View style={{ marginLeft: 12, marginRight: 12, marginTop: 12, flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
            <RadioButton
              isSelected={this.state.isPhysicianSelected ? this.state.isPhysicianSelected : false}
              obj={{ label: 'Physician', value: 'Physician' }}
              index={0}
              fontSize={20}
              fontFamily='Montserrat'
              fontStyle={'normal'}
              labelHorizontal={true}
              buttonColor={colorUtils.THEME_COLOR}
              labelColor={'#585858'}
              style={{ paddingRight: 20 }}
              borderWidth={1}
              buttonSize={10}
              //style={[i !== radiobuttonObject.length - 1 && styles.radioStyle]}
              onPress={(value, index) => {
                this.setState({
                  isPhysicianSelected: true,
                  isPatientSelected: false
                })
              }}
            />
            <RadioButton
              isSelected={this.state.isPatientSelected ? this.state.isPatientSelected : false}
              obj={{ label: 'Patient', value: 'Patient' }}
              index={1}
              fontSize={20}
              fontFamily='Montserrat'
              fontStyle={'normal'}
              borderWidth={1}
              buttonSize={10}
              labelHorizontal={true}
              buttonColor={colorUtils.THEME_COLOR}
              labelColor={'#585858'}
              //style={[i !== radiobuttonObject.length - 1 && styles.radioStyle]}
              onPress={(value, index) => {
                this.setState({
                  isPhysicianSelected: false,
                  isPatientSelected: true
                })
              }}
            />

          </View>
        </Container>
        <Container>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginBottom: 2
          }}>
            <TouchableOpacity onPress={this.onForgotPasswordPress.bind(this)}>
              <Text style={styles.forgotPassword} >Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </Container>
        <Container>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ fontFamily: 'Montserrat', fontSize: 18 }}>Don't have an Account? </Text>
            <TouchableOpacity onPress={this.onForgotPasswordPress.bind(this)}>
              <Text style={styles.headline} >Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Container>
        {this.state.picker && <CustomPicker
          pickerData={optionTypes}
          togglePicker={this.togglePicker}
          setValue={this.setValue}
          selectedValue={this.state.relation}
        />}

      </CustomScrollView>

    )

  }
  onForgotPasswordPress() {

  }


}

const styles = StyleSheet.create({

  mainContainer: {
    paddingTop: 0,
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 8,
    marginLeft: 45,
    marginRight: 45,
    flexDirection: 'column',
    flex: 1
  },
  buttonWhiteText: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Montserrat'
  },
  primaryButton: {
    height: 50,
    backgroundColor: colorUtils.THEME_COLOR,
    width: '77%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  headline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: 'Montserrat',
    color: colorUtils.THEME_COLOR
  },
  forgotPassword: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat'
  },
  ImageStyle: {
    position: 'absolute',
    bottom: Platform.OS == 'android' ? 30 : 40,
    width: 16,
    height: 16,
    marginBottom: 10
  },
  pickerLeftImageStyle: {
    position: 'absolute',
    top: Platform.OS == 'android' ? 30 : 15,
    width: 16,
    height: 16,
    marginBottom: 10
  },
  PickerStyle: {
    position: 'absolute',
    bottom: Platform.OS == 'android' ? 30 : 15,
    width: 16,
    height: 16,
    marginBottom: 10,
    right: 10
  },
});


module.exports = {
  login: LoginScreen,
  x:x
}
