import React from 'react'
import { Text, Button, Platform, View, Image, StyleSheet, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
//import { Icon } from 'react-native-elements';
import { Container, Header, Content, Icon } from 'native-base';
import * as colorUtils from '../components/utils/colorUtils'

import DocumentTabNavigator from './DocumentTabBar';

// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

//Side menu 
import SideMenu from "../container/SideMenu"
//Login screesn
import {login,x} from "../container/LoginScreen"

// TabNavigator screens
import Camera from '../container/Camera'
import Record from '../container/Record'
import Notes from '../container/Notes'
import Emergency from '../container/Emergency'

//Dashboard Screens
import Profile from '../container/Profile';

import TimeLines from '../container/timeline/Timelines';
import GetIT from '../container/timeline/GetIT'

//Calendar Module
import Calendar from '../container/calendar/Calendar';
import CalendarView from '../container/calendar/CalendarView';
import CalendarNewTask from '../container/calendar/CalendarNewTask';
import CalendarEditTask from '../container/calendar/CalendarEditTask';
import CalendarYearView from '../container/calendar/CalendarYearView';
import CalendarMonthView from '../container/calendar/CalendarMonthView';
import CalendarTaskView from '../container/calendar/CalendarTaskView';

import Hospitals from '../container/Hospitals'
import ChangePassword from '../container/ChangePassword'
import Documents from '../container/Documents'
import SecretQuestions from '../container/SecretQuesitions'
import PreferLanguage from '../container/PreferLanguage'
import TwoFactorAuthentication from '../container/TwoFactorAuthentication'
import AddPhysician from '../container/AddPhysician'
import SearchPhysician from '../container/SearchPhysician';
import AdvancedPhysicianSearch from '../container/AdvancedPhysicianSearch';
import AddPhysicianLane from '../container/AddPhysicianLane'
import CriticalAlerts from '../container/CriticalAlerts'
import EditStatus from '../container/EditStatus'
import AcknowledgeAlert from '../container/AcknowledgeAlert'
import Dashboard from '../container/Dashboard'
import PrivacyInformation from '../container/PrivacyInformation'
import TermsConditions from '../container/TermsConditions'
import EditProfile from '../container/EditProfile'
import PhysicianInformation from '../container/PhysicianInformation'
import NewPhysicianCreation from '../container/NewPhysicianCreation'
import NotesInput from '../container/NotesInput'

//Documents
import DocumentDashboard from '../container/documents/documentDashboard';
import Recordings from '../container/documents/recordings';
import DocumentNotes from '../container/documents/notes';

//MyFamily
import FamilyInformation from '../container/myfamily/familyInformation';
import SearchFamilyMember from '../container/myfamily/searchfamilymembers';
import SearchMember from '../container/myfamily/searchmembers';
import FamilyPermission from '../container/myfamily/familypermissions';
import AddFamilyMember from '../container/myfamily/addfamilymember';
import FamilyLanes from '../container/myfamily/familyLanes';

//MyHealth
import LegalDocuments from '../container/myhealth/legaldocuments'
import CustomAddLegalDocument from '../container/myhealth/customaddlegaldocument'
import AddLegalDocument from '../container/myhealth/addlegaldocument'
import MyHealthData from '../container/myhealth/healthdata'
import HealthSettings from '../container/myhealth/healthsettings'
import AddDevice from '../container/myhealth/devices'
import MyHealthMedication from '../container/myhealth/myhealthmedication'
import History from '../container/myhealth/history'
import AddMedication from '../container/myhealth/addmedication'
import MedicalInfo from '../container/myhealth/medicalInfo'
import MedicalPortals from '../container/myhealth/medicalportals'
import AddMedicalPortal from '../container/myhealth/addmedicalportal'
import MedicalInfoCommon from '../container/myhealth/medicalInfoCommon'
import SurgeryProcedures from '../container/myhealth/surgeryprocedures'
import Alergies from '../container/myhealth/alergies'
import FamilyHistory from '../container/myhealth/familyhistory'
import HospitalAdmission from '../container/myhealth/hospitaladmission'
import Pharmacy from '../container/myhealth/pharmacy'
import EmergencyContacts from '../container/myhealth/emergencycontacts'
import AddAlergies from '../container/myhealth/addalergies'
import AddFamilyHistory from '../container/myhealth/addfamilyhistory'
import AddMedicalIllness from '../container/myhealth/addmedicalillnes'
import AddEmergencyContact from '../container/myhealth/addemergencycontact'
import AddHospital from '../container/myhealth/addhospital'
import AddPharmacy from '../container/myhealth/addpharmacy'
import Insurance from '../container/myhealth/insurance'
import EditInsurance from '../container/myhealth/editinsurance'

//Patient
import Physicians from '../container/patient/physicians';
import Family from '../container/patient/family';
import PatientInformation from '../container/patient/patientInformation';
import PatientPermit from '../container/patient/patientpermissions';
import PatientTimeline from '../container/patient/patienttimeline';
import PatientCalendar from '../container/patient/patientCalendar';


import Critical from '../container/patient/critical';
import AddPatient from '../container/patient/addpatient';
import SearchPatients from '../container/patient/searchpatients';
import SearchPtnts from '../container/patient/searchptnts';
import PatientAndFamilyLanes from '../container/patient/patientandfamilyLanes';
import Search from '../container/search';
import Health from '../container/Health'
import Medication from '../container/Health/medication';
import HealthData from '../container/Health/healthdata';

import NewTask from '../container/patient/newtask';


import { EventRegister } from 'react-native-event-listeners'
import AddNewRecording from '../container/documents/recordings/AddNewRecording';

import EmergencyPatient from '../container/emergencypatient'
import AddEmergency from '../container/emergencypatient/AddEmergency'

const cameraStack = StackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colorUtils.THEME_COLOR,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      title: 'Home',// Title to appear in status bar
      headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
}, {
    initialRouteName: 'Camera',
    navigationOptions: {
      gesturesEnabled: false
    }
  })

  const insuranceStack = TabNavigator ({
    Current: { screen:Insurance,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
          <Text style={{ fontSize: 18, color:colorUtils.THEME_COLOR, padding: 5, alignSelf: 'center' }}>Current</Text>
          {
            focused && <View style={{
              height: 0,
              width: 0,
              alignSelf: 'center',
              borderLeftColor: 'transparent',
              borderLeftWidth: 25,
              borderRightColor: 'transparent',
              borderRightWidth: 25,
              borderBottomColor: '#f0f0f0',
              borderBottomWidth: 13
            }}></View>
          }
        </View>),
        title: 'Insurance',
      })},
    History: { 
      screen:History,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
          <Text style={{ fontSize: 18, color:colorUtils.THEME_COLOR, padding: 5, alignSelf: 'center' }}>History</Text>
          {
            focused && <View style={{
              height: 0,
              width: 0,
              alignSelf: 'center',
              borderLeftColor: 'transparent',
              borderLeftWidth: 25,
              borderRightColor: 'transparent',
              borderRightWidth: 25,
              borderBottomColor: '#f0f0f0',
              borderBottomWidth: 13
            }}></View>
          }
        </View>),
        title: 'Insurance',
      })}
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: '#fff',  // Color of tab when pressed
      inactiveTintColor: 'grey',
      indicatorStyle: {
        backgroundColor: '#fff',
      },
      style: {
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontSize: Platform.OS == 'ios' ? 20 : 15,
        color:'white'
      },
      showIcon: Platform.OS == 'android' ? false : true,
      showLabel: Platform.OS == 'android' ? true : false
    }
  });
const recordStack = StackNavigator({
  Record: {
    screen: Record,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colorUtils.THEME_COLOR,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      title: 'Home',  // Title to appear in status bar
      headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
}, {
    initialRouteName: 'Record',
    navigationOptions: {
      gesturesEnabled: false
    }

  })

const notesStack = StackNavigator({
  Notes: {
    screen: Notes,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colorUtils.THEME_COLOR,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      title: 'Home',  // Title to appear in status bar
      headerLeft: <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
}, {
    initialRouteName: 'Notes',
    navigationOptions: {
      gesturesEnabled: false
    }
  })

const dashboardStack = StackNavigator({
  Emergency: {
    screen: Emergency,
    navigationOptions: ({ navigation }) => ({
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
      // headerTitle: <TouchableOpacity onPress={() => { navigation.navigate('editStatus') }} style={{ alignSelf: 'center' }}><Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>No Status</Text></TouchableOpacity>,
      // headerLeft: <TouchableOpacity style={{ marginLeft: 10,marginTop:5,height:25,width:100}} onPress={() => navigation.navigate('searchMenu')} ><Image style={{height:25,flex:1,width:null}} source={require('../components/Assets/common/logo.png')}/></TouchableOpacity>,
      // headerRight:<View style={{flexDirection:'row',justifyContent:'center',alignSelf:'flex-end'}}><TouchableOpacity style={{marginRight:10}}><Image style={{height:45,width:35}} source={require('../components/Assets/common/question.png')}/></TouchableOpacity><Icon name="power" style={{ marginRight: 20, color: '#3a3a3a', fontWeight: 'bold',alignSelf:'center' }} onPress={() => navigation.navigate('login')}/></View>
    })
  },
  addNewPhysician: {
    screen: NewPhysicianCreation,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }} style={{ alignSelf: 'center' }}>Add Physician</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {

      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Save</Text></TouchableOpacity>
    })
  },
  physicianInformation: {
    screen: PhysicianInformation,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Physician Information</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'physicians')
          navigation.navigate('DrawerOpen');
        }} />,
    })
  },
  criticalAlerts: {
    screen: CriticalAlerts,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Critical Alerts</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {

      }}><Text style={{ color: 'white', fontSize: 18, marginRight: 10 }}>New</Text></TouchableOpacity>
    })
  },
  notesInput: {
    screen: NotesInput,
    navigationOptions: ({ navigation }) => ({
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
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />,
    })
  },
  newRecording: {
    screen: AddNewRecording,
    navigationOptions: ({ navigation }) => ({
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
      headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: '#3a3a3a', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />,
    })
  },
  privacyInformation: {
    screen: PrivacyInformation,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Privicy</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 18 }} onPress={() => navigation.navigate('')}>UPDATE</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />
    })
  },
  termsConditions: {
    screen: TermsConditions,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>Terms&Conditions</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  acknowledgeAlert: {
    screen: AcknowledgeAlert,
    navigationOptions: ({ navigation }) => ({
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
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Acknowledgement</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />
    })
  },
  editStatus: {
    screen: EditStatus,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Status</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />,
    })
  },
  addPhysicianLane: {
    screen: AddPhysicianLane,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Physician Lane</Text>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'physicians')
          navigation.navigate('DrawerOpen');
        }} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.goBack()
      }}><Text style={{ color: '#3a3a3a', fontSize: 16, marginRight: 10 }}>CREATE</Text></TouchableOpacity>
    })
  },
  addPhysician: {
    screen: AddPhysician,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>Search Physician</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {

      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>SEARCH</Text></TouchableOpacity>
    })
  },
  searchPhysician: {
    screen: SearchPhysician,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Search Physician</Text>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'physicians')
          navigation.navigate('DrawerOpen');
        }} />,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  searchMenu: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
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
    })

  },
  advancedPhysicianSearch: {
    screen: AdvancedPhysicianSearch,
    navigationOptions: ({ navigation }) => ({
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
      title: 'Search Physician',
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerLeft: <Icon type='Ionicons' name="ios-close" style={{ marginLeft: 20, fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  editProfile: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
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
      headerRight: <TouchableOpacity onPress={() => {

      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Update</Text></TouchableOpacity>,
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Edit Profile</Text>,
      //headerLeft: <Icon name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', fontWeight: 'bold' }} onPress={() => navigation.goBack()} />
    })
  },
  profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Profile</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('editProfile')
      }}><Text style={{ color:'#3a3a3a', fontSize: 18, marginRight: 10 }}>Edit</Text></TouchableOpacity>
    })
  },
  twoFactorAuthentication: {
    screen: TwoFactorAuthentication,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>2 Step Auth</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>UPDATE</Text></TouchableOpacity>
    })
  },
  preferLanguage: {
    screen: PreferLanguage,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Prefered Langugae</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 16 }} onPress={() => navigation.navigate('')}>Update</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  hospitals: {
    screen: Hospitals,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Hospitals</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 16 }} onPress={() => navigation.navigate('')}>Edit</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  sQuestions: {
    screen: SecretQuestions,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Secret Questions</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 16 }}>Update</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  changePassword: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Password</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 16 }} onPress={() => navigation.navigate('DrawerOpen')}>Update</Text>,
      //headerLeft: <Icon type='close' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  documents: {
    screen: TabNavigator(
      {
        documentDashboard: {
          screen: DocumentDashboard,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>Documents</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: 'white',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>) : '',
            title: 'Documents',
          })
        },
        recordings: {
          screen: Recordings,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>Recordings</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: 'white',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>) : '',
            title: 'Recordings',
          })
        },
        documentNotes: {
          screen: DocumentNotes,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>Notes</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: 'white',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>) : '',
            title: 'Notes',
          })
        },
      },
      {
        tabBarPosition: 'top',
        tabBarOptions: {
          activeTintColor: '#fff',  // Color of tab when pressed
          inactiveTintColor: 'grey',
          indicatorStyle: {
            backgroundColor: '#fff',
          },
          style: {
            backgroundColor: colorUtils.THEME_COLOR,
          },
          labelStyle: {
            fontSize: Platform.OS == 'ios' ? 20 : 15,
            color: 'white'
          },
          showIcon: Platform.OS == 'android' ? false : true,
          showLabel: Platform.OS == 'android' ? true : false
        }
      }
    ),
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Lisa E. Traynor</Text>,
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    // headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 10, fontSize: 30, color: 'black', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    }),
  },
  timeLine: {
    screen: TimeLines,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Timeline</Text>,
      headerRight: <Text style={{ marginRight: 20, color: '#3a3a3a', fontWeight: '300', fontSize: 16 }} onPress={() => navigation.navigate('getIT')}>Get It</Text>,
     //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  getIT: {
    screen: GetIT,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Timeline</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,

    })
  },
  calendar: {
    screen: Calendar,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <TouchableOpacity onPress={() => { navigation.navigate('calendarYearView') }}><Text style={{ color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>May 2018</Text></TouchableOpacity>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,

    })
  },
  calendarView: {
    screen: CalendarView,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <View style={{ left: Platform.OS == 'android' ? '40%' : '0%' }}><TouchableOpacity onPress={() => { navigation.navigate('calendarMonthView') }}><Text style={{ color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Jun 2018</Text></TouchableOpacity></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },

  calendarNewTask: {
    screen: CalendarNewTask,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>New Task</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  calendarEditTask: {
    screen: CalendarEditTask,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Edit Task</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      // headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  calendarYearView: {
    screen: CalendarYearView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color:colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  calendarMonthView: {
    screen: CalendarMonthView,
    navigationOptions: ({ navigation }) => ({
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
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  calendarTaskView: {
    screen: CalendarTaskView,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>June 2018</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  addMember: {
    screen: AddFamilyMember,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <View style={{ alignSelf: 'center' }}><Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>Add Member</Text></View>,
      headerRight: <View style={{ marginRight: 20 }}><TouchableOpacity onPress={() => { }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Save</Text></TouchableOpacity></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  patientCalendar: {
    screen: PatientCalendar,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <View style={{ left: Platform.OS == 'android' ? '40%' : '0%' }}><TouchableOpacity onPress={() => { navigation.navigate('calendarMonthView') }}><Text style={{ color: '#3a3a3a', fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>2018</Text></TouchableOpacity></View>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  familyInformation: {
    screen: FamilyInformation,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <View style={{ alignSelf: 'center', justifyContent: 'center' }}><Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Family Information</Text></View>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'family')
          navigation.navigate('DrawerOpen');
        }} />,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,

    })
  },
  familyLanes: {
    screen: FamilyLanes,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Family Lanes</Text>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'family')
          navigation.navigate('DrawerOpen');
        }} />,
      headerRight: <View style={{ marginRight: 20 }}><TouchableOpacity onPress={() => { }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Add</Text></TouchableOpacity></View>
    })
  },
  physicians: {
    screen: Physicians,
    navigationOptions: ({ navigation }) => ({
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
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Physicians</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white' }} onPress={() => navigation.goBack()} />,
    })
  },
  critical: {
    screen: Critical,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Critical Messages</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white' }} onPress={() => navigation.goBack()} />,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  patientInformation: {
    screen: PatientInformation,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Patient Information</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,

    })
  },
  emergencyContact: {
    screen: EmergencyContacts,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Emergency Contacts</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()} />,
    })
  },
  pharmacy: {
    screen: Pharmacy,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Pharmacy</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()} />,
    })
  },
  addPharmacy: {
    screen: AddPharmacy,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Pharmacy</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Add</Text></TouchableOpacity>
    })
  },
  addHospital: {
    screen: AddHospital,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Hospital</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Add</Text></TouchableOpacity>
    })
  },
  hospitalAddmission: {
    screen: HospitalAdmission,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf:'center'}}>Hospital Addmission</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()}/>,
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  addFamilyHistory: {
    screen: AddFamilyHistory,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Family History</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Add</Text></TouchableOpacity>
    })
  },
  familyHistory: {
    screen: FamilyHistory,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf:'center'}}>Family History</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()}/>,
    })
  },
  addAlergies: {
    screen: AddAlergies,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Alergies</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E', paddingLeft: 10, paddingRight:10}} onPress={() => navigation.goBack()}/>,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Add</Text></TouchableOpacity>
    })
  },
  alergies: {
    screen: Alergies,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: 'white', fontWeight: 'normal', fontSize: 20 }}>Edit</Text></View>,
      headerTitle:<Text style={{color:colorUtils.THEME_COLOR,fontWeight:'bold', fontSize: 22, alignSelf:'center'}}>Alergies</Text>,
      headerLeft:<Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()} />,
    })
  },
  surgeryProcedures: {
    screen: SurgeryProcedures,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: 'white', fontWeight: 'normal', fontSize: 20 }}>Edit</Text></View>,
      headerTitle: <Text style={{ color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Surgery&Procedures</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E'}} onPress={() => navigation.goBack()} />,
    })
  },
  addEmergencyContact: {
    screen: AddEmergencyContact,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Emergency Contact</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Save</Text></TouchableOpacity>
    })
  },
  editInsurance: {
    screen:EditInsurance,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Insurance</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color:'#3a3a3a', fontSize:18, marginRight:10}}>Save</Text></TouchableOpacity>
    })
  },
  legalDocuments: {
    screen: LegalDocuments,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Legal Documents</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}></Text></TouchableOpacity>
    })
  },
  addLegalDocument: {
    screen: AddLegalDocument,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Document</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Save</Text></TouchableOpacity>
    })
  },
  customAddLegalDocument: {
    screen: CustomAddLegalDocument,
    navigationOptions: ({ navigation }) => ({
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
    })
  },
  addmedicalIllness: {
    screen: AddMedicalIllness,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Add Medical Illness</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <TouchableOpacity onPress={() => {
        navigation.navigate('')
      }}><Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Save</Text></TouchableOpacity>
    })
  },
  medicalInfoCommon: {
    screen: MedicalInfoCommon,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      //headerRight: <View style={{ marginRight:20 }}><Text style={{ color: 'white', fontWeight: 'normal', fontSize: 20 }}>Edit</Text></View>,
      headerTitle: <Text style={{ color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Medicalilness</Text>,
      headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color:'#3E3E3E' }} onPress={() => navigation.goBack()}/>,
    })
  },
  medicalInfo: {
    screen: TabNavigator(
      {
        medicalInfo: {
          screen: MedicalInfo,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center', width: 180, alignSelf: 'center' }}>MyHealth Summary</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: '#f0f0f0',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>),
            title: 'MyHealth Summary',
          })
        },
        insurance: {
          screen: insuranceStack,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>Insurance</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: '#f0f0f0',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>),
            title: 'Insurance',
          })
        }
      },
      {
        tabBarPosition: 'top',
        tabBarOptions: {
          activeTintColor: '#fff',  // Color of tab when pressed
          inactiveTintColor: 'grey',
          indicatorStyle: {
            backgroundColor: '#fff',
          },
          style: {
            backgroundColor: colorUtils.THEME_COLOR,
          },
          labelStyle: {
            fontSize: Platform.OS == 'ios' ? 20 : 15,
            color: 'white'
          },
          showIcon: Platform.OS == 'android' ? false : true,
          showLabel: Platform.OS == 'android' ? true : false
        }
      }
    ),
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{color:colorUtils.THEME_COLOR, fontWeight:'bold', fontSize:22, alignSelf:'center'}}>MedicalInfo</Text>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'myHealth')
          navigation.navigate('DrawerOpen');
        }} />,
      headerRight: <View style={{marginRight:20}}><Text style={{ color:'#3a3a3a', fontWeight:'normal', fontSize:20 }}></Text></View>,
    })
  },
  medicalPortals: {
    screen: MedicalPortals,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor: '#3a3a3a',
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Medical Portals</Text>,
    })
  },
  addMedicalPortal: {
    screen: AddMedicalPortal,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      headerTintColor:'#3a3a3a',
      headerRight: <View style={{ marginRight:20 }}><Text style={{color:'#2F2F2F', fontWeight:'normal', fontSize:20}}>Save</Text></View>,
      headerTitle: <Text style={{ color:colorUtils.THEME_COLOR, fontWeight:'bold', fontSize:22, alignSelf:'center'}}>Add Medical Portals</Text>
    })
  },
  medication: {
    screen: TabNavigator(
      {
        medication: {
          screen: MyHealthMedication,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>Current</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: '#f0f0f0',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>) : '',
            title: 'Medication',
          })
        },
        recordings: {
          screen: History,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: 0 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center' }}>History</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: '#f0f0f0',
                  borderBottomWidth: 13
                }}></View>
              }
            </View>) : '',
            title: 'History',
          })
        },
      },
      {
        tabBarPosition: 'top',
        tabBarOptions: {
          activeTintColor: '#fff',  // Color of tab when pressed
          inactiveTintColor: 'grey',
          indicatorStyle: {
            backgroundColor: '#fff',
          },
          style: {
            backgroundColor: colorUtils.THEME_COLOR,
          },
          labelStyle: {
            fontSize: Platform.OS == 'ios' ? 20 : 15,
            color: 'white'
          },
          showIcon: Platform.OS == 'android' ? false : true,
          showLabel: Platform.OS == 'android' ? true : false
        }
      }
    ),
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Medication</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'myHealth')
          navigation.navigate('DrawerOpen');
        }} />

    })
  },
  health:{
    screen: TabNavigator(
      {
        medicalInfo: {
          screen: Health,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (

              <View style={{ height: 40, width: 100, marginBottom: -8 }}>

                <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center', fontWeight: focused ? 'bold' : 'normal' }}>Medical Info</Text>
                {
                  focused && <View style={{
                    height: 100,
                    width: 100,
                    alignSelf: 'center',
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 25,
                    borderRightColor: 'transparent',
                    borderRightWidth: 25,
                    borderBottomColor: '#e6e6ed',
                    borderBottomWidth: 8
                  }}></View>
                }
              </View>
            ) : '',
            title: 'medical Info'
          })
        },
        medication: {
          screen: Medication,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (

              <View style={{ height: 40, width: 100, marginBottom: -8 }}>

                < Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center', fontWeight: focused ? 'bold' : 'normal' }} > Medication</Text>
                {
                  focused && <View style={{
                    height: 100,
                    width: 100,
                    alignSelf: 'center',
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 25,
                    borderRightColor: 'transparent',
                    borderRightWidth: 25,
                    borderBottomColor: '#e6e6ed',
                    borderBottomWidth: 8
                  }}></View>
                }
              </View >
            ) : '',
            title: 'medication',
          })
        },
        healthData: {
          screen: HealthData,
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: Platform.OS == 'ios' ? ({ focused }) => (<View style={{ height: 40, width: 100, marginBottom: -8 }}>
              <Text style={{ fontSize: 18, color: '#fff', padding: 5, alignSelf: 'center', fontWeight: focused ? 'bold' : 'normal' }}>Health Data</Text>
              {
                focused && <View style={{
                  height: 0,
                  width: 0,
                  alignSelf: 'center',
                  borderLeftColor: 'transparent',
                  borderLeftWidth: 25,
                  borderRightColor: 'transparent',
                  borderRightWidth: 25,
                  borderBottomColor: '#e6e6ed',
                  borderBottomWidth: 8
                }}></View>
              }
            </View>
            ) : '',
            title: 'health Data'
          })
        }
      },
      {
        tabBarPosition: 'top',
        tabBarOptions: {
          activeTintColor: '#fff',  // Color of tab when pressed

          inactiveTintColor: 'black',
          indicatorStyle: {
            backgroundColor: '#fff'
          },
          style: {
            backgroundColor: colorUtils.THEME_COLOR,
          },
          labelStyle: {
            fontSize: Platform.OS == 'android' ? 15 : 20,
            //fontWeight:'bold',
            color: 'white'
          },
          showIcon: Platform.OS == 'android' ? false : true,
          showLabel: Platform.OS == 'android' ? true : false,
        }
      }
    ),
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff',
        // marginTop:-50
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR,
        //height:'30%'
      },
      // headerBackTitleStyle: {
      //   color: ''
      // },
      headerTintColor: 'white',
      header: <View style={{ backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Icon type='Ionicons'
            name={Platform.OS == 'android' ? 'arrow-back' : 'ios-arrow-back'}
            style={{ marginLeft: 20, fontSize: 30, color: '#3a3a3a' }}
            onPress={() => {
              navigation.goBack()
              EventRegister.emit('sideMenuClickedEvent', 'myHealth')
              navigation.navigate('DrawerOpen')
            }} />
          <Text style={{ marginLeft: 130, color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf:'center' }}>{'Health'}</Text></View>
        <View style={{ backgroundColor: 'white' }}><Health /></View></View>,
    })
  },
  emergencyPatient: {
    screen: EmergencyPatient,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Emergency</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white' }} onPress={() => navigation.goBack()} />,
    })
  },
  addEmergency: {
    screen: AddEmergency,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor:'#fff'
      },
      headerTitleStyle: {
        color: colorUtils.THEME_COLOR
      },
      // headerBackTitleStyle: {
      //   color: ''
      // },
      headerTintColor: '#3a3a3a',
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white' }} onPress={() => navigation.goBack()} />,
    })
  },
  family: {
    screen: Family,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Family</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white' }} onPress={() => navigation.goBack()} />,
    })
  },
  searchMember: {
    screen: SearchMember,
    navigationOptions: ({ navigation }) => ({
      navData: 'hii',
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Search Member</Text>,
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          navigation.goBack()
          EventRegister.emit('sideMenuClickedEvent', 'family')
          navigation.navigate('DrawerOpen');
        }} />,      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
    })
  },
  familyPermission: {
    screen: FamilyPermission,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Family Permission</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />

    })
  },
  patientPermission: {
    screen: PatientPermit,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Permission</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />

    })
  },
  patientTimeline: {
    screen: PatientTimeline,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>TimeLine</Text>,
      headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />

    })
  },
  searchFamilyMember: {
    screen: SearchFamilyMember,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Search Member</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight:<TouchableOpacity style={{ marginRight: 15 }} onPress={() => {

      }}><Text style={{ color: '#3a3a3a', fontWeight: 'bold', fontSize: 15 }}>Search</Text></TouchableOpacity>

    })
  },
  searchPtnts: {
    screen: SearchPtnts,
    navigationOptions: ({ navigation }) => ({
      navData: 'hii',
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Search Patient</Text>,
      //headerRight: <View style={{ marginRight: 20 }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}></Text></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
    })
  },
  addPatient: {
    screen: AddPatient,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <View style={{ alignSelf: 'center' }}><Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>Add Patient</Text></View>,
      headerRight: <View style={{ marginRight: 20 }}><TouchableOpacity onPress={() => { }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Save</Text></TouchableOpacity></View>,
      //headerLeft: <Icon type='Ionicons' name="ios-arrow-back" style={{ marginLeft: 20, fontSize: 30, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />
    })
  },
  searchPatients: {
    screen: SearchPatients,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Search Patient</Text>,
      headerRight: <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {

      }}><Text style={{ color: '#3a3a3a', fontWeight: 'bold', fontSize: 15 }}>Search</Text></TouchableOpacity>

    })
  },
  patientAndFamilyLanes: {
    screen: PatientAndFamilyLanes,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>Patient Lane</Text>,
      headerRight: <View style={{ marginRight: 20 }}><TouchableOpacity onPress={() => { }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Add</Text></TouchableOpacity></View>
    })
  },
  newTask: {
    screen: NewTask,
    navigationOptions: ({ navigation }) => ({
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
      headerTitle: <Text style={{ color: colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>New Task</Text>,
      //headerLeft: <Icon type='Ionicons' name="ios-close" style={{ marginLeft: 20, fontSize: 50, color: 'white', paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <View style={{ marginRight: 20 }}><TouchableOpacity onPress={() => { }}><Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Save</Text></TouchableOpacity></View>
    })
  },
}, {
    initialRouteName: 'Emergency',
    navigationOptions: {
      gesturesEnabled: false
    }
  })

const Drawer = DrawerNavigator({
  Tabs: { screen: dashboardStack },
},
  {
    contentComponent: SideMenu,
    contentOptions: {
      activeTintColor: '#000',
    },
    drawerWidth: 300
  })



// const dashboardStack = StackNavigator({
//   dashboard: {
//     screen: Dashboard,
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: '#fff'
//       },
//       headerTitleStyle: {
//         color: colorUtils.THEME_COLOR
//       },
//       // headerBackTitleStyle: {
//       //   color: ''
//       // },
//       headerTintColor: '#3a3a3a',
//       headerTitle: <TouchableOpacity onPress={() => { navigation.navigate('editStatus') }} style={{ alignSelf: 'center' }}><Text style={{ color: '#3a3a3a', fontWeight: 'bold', fontSize: 20 }}>No Status</Text></TouchableOpacity>,
//       headerLeft: <Icon name="search" style={{ marginRight: 20, color: '#3a3a3a', fontWeight: 'bold' }} size={35} onPress={() => navigation.navigate('DrawerOpen')} />,
//       headerRight: <Icon name="lock" style={{ marginRight: 20, color: '#3a3a3a', fontWeight: 'bold' }} onPress={() => navigation.navigate('login')} />
//     })
//   }
// }, {
//     initialRouteName: 'dashboard',
//     navigationOptions: {
//       gesturesEnabled: false
//     }

//   })

const primaryStack = StackNavigator({
  login: { screen: login },
  dashboard: { screen: Drawer },
}, {
    headerMode: 'none',
    initialRouteName: 'login',
    navigationOptions: {
      gesturesEnabled: false
    }
  })

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

//   const defaultGetStateForAction = Drawer.router.getStateForAction;
//   Drawer.router.getStateForAction = (action, state) => {

//     const { params } = this.props.navigation.state;
//     const itemId = params ? params.itemId : null;
//     const otherParam = params ? params.otherParam : null;


//     if(state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerClose') {
//         ///StatusBar.setHidden(false);
//     }

//     if(state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerOpen') {
//        /// StatusBar.setHidden(true);
//     }


//     return defaultGetStateForAction(action, state);
// };

export default primaryStack;