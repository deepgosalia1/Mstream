import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  View,
  Alert,
  ImageBackground,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  Platform,
  Linking,
  CameraRoll
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
import SQLite from 'react-native-sqlite-2';
import * as colorUtils from '../components/utils/colorUtils';
import * as fontUtils from '../components/utils/fontUtils';

import { EventRegister } from 'react-native-event-listeners'
import { Icon } from 'native-base';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, SVGImage, SVGText, Line } from 'react-native-svg'
import Images from '../components/Assets/images'
import CustomSrollview from '../components/Custom components/CustomSrollview';

var options = {
  title: 'Select From',
  quality: 0.8,
  imageFileType: 'png',
  maxWidth: 600,
  maxHeight: 600,
  storageOptions: {
    skipBackup: true,
   // folder: 'pictures',
    waitUntilSaved: true
  }
};

export default class Emergency extends React.Component {

  constructor(props) {
    super(props);
    //const { navigation } = this.props.navigation;
    this.state = {

      FlatListItems: [
        { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
        // { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
      ],
      //loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
      loggedInUser : global.x ? 'patient' : 'physician'
    }

  //  this.props.navigation.setParams({ logInUser: this.state.loggedInUser })
  }


  FlatListItemSeparator = () => {
   
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "lightgrey",
        }}
      />
    );
  }

  GetItem(item) {
    console.log(item);
  }

  renderHeader = () => {
  
    return <TouchableOpacity
      onPress={() => this.props.navigation.navigate('criticalAlerts', { loggedInUser: this.state.loggedInUser })}>
      <View style={{
        flex: 1, height: 40, flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEE9EE'
      }}>
        <Image style={styles.button} source={require('../components/Assets/Dashboard/bell.png')}/>
        <Text style={{ color: '#D2173C', fontSize: 17, fontWeight: 'bold' }}> 10 New Critical Alerts</Text>
      </View>
    </TouchableOpacity>

  };

  _onDocumentsClicked() {
    EventRegister.emit('sideMenuClickedEvent', 'documents')
    this.props.navigation.navigate('DrawerOpen')
  }

  _onProfileClicked() {
    //this.props.navigation.navigate('profile')
    Alert.alert('profileclicked');
  }

  _onTimeLinesClicked() {
    this.props.navigation.navigate('timeLine')
  }

  _onPhysiciansClicked() {
    EventRegister.emit('sideMenuClickedEvent', 'physicians')
    this.props.navigation.navigate('DrawerOpen');
  }

  _onMyFamilyClicked() {
    EventRegister.emit('sideMenuClickedEvent', 'family')
    this.props.navigation.navigate('DrawerOpen');
  }

  _onMyHealthClicked() {
    EventRegister.emit('sideMenuClickedEvent', 'myHealth')
    this.props.navigation.navigate('DrawerOpen');
  }

  _onCalendarClicked() {
    this.props.navigation.navigate('calendar');
  }

  getLoggedInUserCriticalAlerts() {

    if (this.state.loggedInUser == 'patient') {
      return [{
        "name": "Father - John D. Doe",
        "message": "Call immediately,I have low blood sugar",
        "date": "13/05/2018 11:00 AM",
        "specialization": "Jaswant Grawd M.D,MBBS",
        "id": "0"
      }, {
        "name": "Mother - Robert P. Watson",
        "message": "Call immediately,I am going to faint",
        "date": "13/05/2018 11:00 AM",
        "specialization": "Jaswant Grawd M.D,MBBS",
        "id": "0"
      }]
    }
    else {
      return [{
        "name": "Patient - John D. Doe",
        "message": "Call immediately,I have low blood sugar",
        "date": "13/05/2018 11:00 AM",
        "specialization": "Jaswant Grawd M.D,MBBS",
        "id": "0"
      }, {
        "name": "Patient - Robert P. Watson",
        "message": "Call immediately,I am going to faint",
        "date": "13/05/2018 11:00 AM",
        "specialization": "Jaswant Grawd M.D,MBBS",
        "id": "0"
      }]
    }

  }
  renderListItem(item) {
    console.log('item', item)

    return (

      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <FlatList
            data={this.getLoggedInUserCriticalAlerts()}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <View style={styles.laneView}>
              
                <TouchableOpacity
                  onress={() => 
                    this.props.navigation.navigate('acknowledgeAlert', { loggedInUser: this.state.loggedInUser })}
                >
                  <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row', width: 310, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ marginTop: 2, color: "#127265", fontSize: 18, fontWeight: '500', fontFamily: fontUtils.FONT_FAMILY, fontStyle: 'normal' }}>{item.name}</Text>
                    </View>

                    <Text style={{ color: "black", fontSize: 16, fontFamily: fontUtils.FONT_FAMILY, fontStyle: 'normal' }}>{item.message}</Text>
                    <View style={{ flexDirection: 'row', width: 350, justifyContent: 'space-between' }}>
                      <Text style={{ marginTop: 2, color: "#616161", fontSize: 14, fontFamily: fontUtils.FONT_FAMILY, fontStyle:'normal'}}>{item.specialization}</Text>
                      <Text style={{ marginTop: 3, color: "#616161", fontSize: 12, fontFamily: fontUtils.FONT_FAMILY, fontStyle:'normal'}}>{item.date}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    )
  }
  componentWillMount() {

    console.log('loggedin', this.props.navigation)
    //this.props.navigation.setParams({ logInUser: this.state.loggedInUser })
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    {console.log('Emergency')}
  
    return {
     
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      // headerBackTitleStyle: {
      //   color: ''
      // },
      headerTintColor: '#3a3a3a',
      headerTitle: !global.x ? <TouchableOpacity onPress={() => { navigation.navigate('editStatus') }} style={{ alignSelf: 'center' }}><Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>No Status</Text></TouchableOpacity> : <View />,
      headerLeft: <TouchableOpacity style={{ marginLeft: 10, height: 45, width: 45 }} onPress={() => navigation.navigate('searchMenu')} ><Image style={{ height: 45, flex: 1, width: 45 }} source={require('../components/Assets/common/logo_icon.png')} /></TouchableOpacity>,
      headerRight: <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end' }}>
        <TouchableOpacity>
          <Image style={{ marginLeft: 20, height: 40, width: 40 }} source={require('../components/Assets/common/questionmark.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Image source={require('../components/Assets/common/logout2.png')} style={{ height: 40, width: 40, marginRight: 10 }} />
        </TouchableOpacity>
      </View>
    }
  }

  dashboardOptionClicked(index) {

    if (this.state.loggedInUser == 'patient') {
      switch (index) {
        case 0:
          this.props.navigation.navigate('calendarView')
          break;

        case 1:
          this._onMyFamilyClicked();
          // this.props.navigation.navigate('searchMember')
          break;
        case 2:
          this._onDocumentsClicked()
          break;

        case 3:
          this.props.navigation.navigate('timeLine')
          break;

        case 4:
          this._onPhysiciansClicked();
          break;

        case 5:
          this.props.navigation.navigate('profile', { loggedInUser: this.state.loggedInUser })
          break;

        default:
          break;
      }
    }
    else {
      switch (index) {
        case 0:
          this.props.navigation.navigate('calendarView')
          break;
        case 1:
          this._onDocumentsClicked()
          break;
        case 2:
          this.props.navigation.navigate('timeLine')
          break;
        case 3:
          this._onPhysiciansClicked()
          break;
        case 4:
          this.props.navigation.navigate('profile', { loggedInUser: this.state.loggedInUser })
          break;
        default:
          break;
      }

    }
  }
  centerButtonClicked() {
    //Alert.alert('center clicked')
    let customEventText = this.state.loggedInUser == 'patient' ? 'myHealth' : 'paitent';
    EventRegister.emit('sideMenuClickedEvent', customEventText);
    this.props.navigation.navigate('DrawerOpen')
  }
  getPDBTextXAxis(index) {

    switch (index) {
      case 2:
        return -7
        break;

      case 3:
        return 5
        break;

      default:
        return 0;
        break;
    }
  }
  getPhyDBTextXAxis(index) {

    switch (index) {
      case 0:
        return 5
        break;

      case 1:
        return -7
        break;

      case 3:
        return 10
        break;

      default:
        return 0;
        break;
    }
  }
  setImageHeight(index) {

    switch (index) {
      case 2:
        return -7
        break;

      default:
        return 40;
        break;
    }
  }

  patientBadgeCircleAxis(index) {
    switch (index) {
      case 1:
        return -17
        break;

      default:
        return -16;
        break;
    }
  }

  getBadgeColor(index) {

    if (this.state.loggedInUser == 'patient') {
      if (index == 0 || index == 1 || index == 2 || index == 4)
        return 'red'
      else
        return 'transparent'
    }
    else {
      if (index == 0 || index == 1 || index == 3)
        return 'red'
      else
        return 'transparent'
    }
  }
  showBadgeText(index) {

    if (this.state.loggedInUser == 'patient') {
      if (index == 0 || index == 1 || index == 2 || index == 4)
        return '2'
      else
        return ''
    }
    else {
      if (index == 0 || index == 1 || index == 3)
        return '2'
      else
        return ''
    }

  }
  render() {
    // {console.log('Emergency')}
    const data = [
      {
        key: 1,
        amount: 20,
        text: 'Calendar',
        svg: { fill: '#ECB422' },//Yellow
      },
      {
        key: 2,
        amount: 20,
        text: 'My Family',
        svg: { fill: '#147D70' } //Green
      },
      {
        key: 3, //
        amount: 20,
        text: 'Documents',
        svg: { fill: '#EC8A2B' } //Oranger
      },
      {
        key: 4,
        amount: 20,
        text: 'Timelines',
        svg: { fill: '#745963' } //Maroon
      },
      {
        key: 5,
        amount: 20,
        text: 'Physicians',
        svg: { fill: '#FC513C' } //Red
      },
      {
        key: 6, //
        amount: 20,
        text: 'Profile',
        svg: { fill: '#30BCDB' } //Sky Blue
      }
    ]

    const physicianData = [
      {
        key: 1,
        amount: 20,
        text: 'Calendar',
        svg: { fill: '#1AC588' },//Calendar
      },
      {
        key: 2, //
        amount: 20,
        text: 'Documents',
        svg: { fill: '#D69311' } //Documents
      },
      {
        key: 3,
        amount: 20,
        text: 'Timeline',
        svg: { fill: '#198FB4' } //Timelines
      },
      {
        key: 4,
        amount: 20,
        text: 'Physicians',
        svg: { fill: '#BE1C43' } //Physicians
      },
      {
        key: 5, //
        amount: 20,
        text: 'Profile',
        svg: { fill: '#316885' } //Profile
      }
    ]

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (

          <G
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
          >
            <SVGImage
              x={Platform.OS == 'ios' ? -20 : -20}
              y={Platform.OS == 'ios' ? 25 : -30}
              width={35}
              height={35}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              backgroundColor='red'
              href={this.state.loggedInUser == 'patient' ? Images.memes[index + 1] : Images.physicianMemes[index + 1]}
            />
            <Circle
              r={50}
              fill={'transparent'}
              onPressIn={this.dashboardOptionClicked.bind(this, index)}
            />
            <SVGText
              key={index}
              //x={5}
              x={this.state.loggedInUser == 'patient' ? this.getPDBTextXAxis(index) : this.getPhyDBTextXAxis(index)}
              y={Platform.OS == 'ios' ? 20 : 20}
              fill={'white'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={12}//{Platform.OS == 'ios' ? 13 : 12}
              fontFamily={fontUtils.FONT_FAMILY}
              fontWeight='bold'
              stroke={'white'}
              strokeWidth={0.1}
            >
              {data.text}
            </SVGText>

            <Circle
              r={8}
              x={13}
              y={-17}
              width={5}
              fill={this.getBadgeColor(index)}
            />
            <SVGText
              key={index}
              x={13}
              //x={this.state.loggedInUser == 'patient' ? this.getPDBTextXAxis(index): this.getPhyDBTextXAxis(index)}
              y={Platform.OS == 'ios' ? this.patientBadgeCircleAxis(index) : 20}
              fill={'white'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={Platform.OS == 'ios' ? 12 : 12}
              fontWeight='bold'
              stroke={'white'}
              strokeWidth={0.1}
            >
              {this.showBadgeText(index)}
            </SVGText>
          </G>
        )
      })
    }
  
    return (
      
      <View style={styles.MainContainer}>
        <View style={{ backgroundColor: 'transparent', height: '37%' }}>
          <FlatList
            data={this.state.FlatListItems}
            keyExtractor={(item, index) => item + index}
            ListFooterComponent={this.renderHeader}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        </View>
        <View style={{
          backgroundColor: 'transparent', height: '50%', paddingBottom: 15,
        }}>
          <PieChart
            style={{ height: '100%' }}
            valueAccessor={({ item }) => item.amount}
            data={this.state.loggedInUser == 'patient' ? data : physicianData}
            spacing={0}
            padAngle={0.15}
            outerRadius={'100%'}
          >
            <Labels />
          </PieChart>

          <TouchableOpacity style={{ height: '31.5%', width: '31.5%', position: 'absolute', top: '31.5%', left: '31.5%', right: '31.5%', bottom: '31.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }} onPress={() => { this.centerButtonClicked() }}>
            <View style={{ flexDirection: 'column', alignSelf: 'center', left: '10%' }}>
              {
                this.state.loggedInUser == 'patient' ? <Image style={{ width: 60, height: 60, resizeMode: 'stretch' }} source={require('../components/Assets/Patientdashboard/my_health_icon.png')} />
                  : <Image style={{ width: 60, height: 48, resizeMode: 'stretch' }} source={require('../components/Assets/Dashboard/patients.png')} />
              }
            </View>
            {
              this.state.loggedInUser == 'patient' ?
                <Text style={{ color: colorUtils.THEME_COLOR, alignSelf: 'center', left: '10%', fontSize: Platform.OS == 'ios' ? 16 : 22, fontFamily: fontUtils.FONT_FAMILY }}>My Health</Text>
                : <Text style={{ color: colorUtils.THEME_COLOR, alignSelf: 'center', left: '10%', fontSize: Platform.OS == 'ios' ? 16 : 22, fontFamily: fontUtils.FONT_FAMILY }}>Patients</Text>
            }
          </TouchableOpacity>
        </View>


        <View style={{ height: '13%', width: '100%' }}>
          <View style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 5, marginBottom: 5 }} />
          {
            this.state.loggedInUser == 'patient' ?
            <View style={styles.bottomContainer}>
              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => {
                  ImagePicker.launchCamera(options, (response) => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else {
                      let navigation = this.props.navigation
                      navigation.navigate('customAddLegalDocument', {
                        location: response.uri,
                        filename: response.filename,
                        iosPath: response.uri,
                        iosUrl: response.uri
                      })
                    }
                  });
                }}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/camera-icon.png')} />
                  <Text style={styles.bottomTextStye}>Camera</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('newRecording')}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/record-icon.png')} />
                  <Text style={styles.bottomTextStye}>Record</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('notesInput')}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/notes.png')} />

                  <Text style={styles.bottomTextStye}>Notes</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('emergencyPatient')}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/emergency-icon.png')} />
                  <Text style={styles.bottomTextStye}>Emergency</Text>
                </TouchableOpacity>
              </View>

            </View>
          
          
            // this.state.loggedInUser == 'physician' &&
           : <View style={styles.bottomContainer}>
              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => {
                  ImagePicker.launchCamera(options, (response) => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else {
                      let navigation = this.props.navigation
                      navigation.navigate('customAddLegalDocument', {
                        location: response.uri,
                        filename: response.filename,
                        iosPath: response.uri,
                        iosUrl: response.uri
                      })
                    }
                  });
                }}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/camera-icon.png')} />
                  <Text style={styles.bottomTextStye}>Camera</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('newRecording')}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/record-icon.png')} />
                  <Text style={styles.bottomTextStye}>Record</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('notesInput')}>
                  <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/notes.png')} />
                  <Text style={styles.bottomTextStye}>Notes</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomView}>
                <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/fev_icon.png')} />
                <Text style={styles.bottomTextStye}>Favorites</Text>
              </View>

            </View>
          }
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    // Setting up View inside content in Vertically center.
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  bottomTextStye: {
    fontSize: Platform.OS == 'ios' ? 12 : 16,
    color: 'black',
    padding: 5,
    fontFamily: fontUtils.FONT_FAMILY,
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