import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import * as colorUtils from '../components/utils/colorUtils'
import { Icon } from 'react-native-elements';
import { Row } from 'native-base';
import { EventRegister } from 'react-native-event-listeners'
import * as fontUtils from '../components/utils/fontUtils';
import jsondata from './myfamily/familySideMenu/contact.list.json'
import jsondata2 from './myfamily/familySideMenu/contact.list2.json'
import physicianMenuJSON from '../components/Assets/json/physicians.menu.json';

export default class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideMenuData: ''
    }
  }

  componentWillMount() {
    this.listener = EventRegister.addEventListener('sideMenuClickedEvent', (data) => {
      this.setState({
        sideMenuData: data
      })
    })
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener)
  }

  render() {
    let sideMenuData = this.state.sideMenuData;
    return (
      <View style={styles.container}>
        <View style={{ top: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom: -10 }}>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerClose') }}>
              <Image style={{ height: 25, width: 25 }} source={require('../components/Assets/SideMenu/home.png')} />
            </TouchableOpacity>

            {
              sideMenuData == 'physicians' &&
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                < Text style={{ fontSize: 20, color: 'white' }}>Recent</Text>
                <Image source={require('../components/Assets/SideMenu/arrow_down.png')} style={{ height: 20, width: 20, marginLeft: 5 }} />
              </TouchableOpacity>
            }
            {
              sideMenuData == 'paitent' &&
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                < Text style={{ fontSize: 20, color: 'white' }}>Recent</Text>
                <Image source={require('../components/Assets/SideMenu/arrow_down.png')} style={{ height: 20, width: 20, marginLeft: 5 }} />
              </TouchableOpacity>
            }{
              sideMenuData == 'family' &&
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                < Text style={{ fontSize: 20, color: 'white' }}>Recent</Text>
                <Image source={require('../components/Assets/SideMenu/arrow_down.png')} style={{ height: 20, width: 20, marginLeft: 5 }} />
              </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('') }}>
              <Image style={{ height: 25, width: 25 }} source={require('../components/Assets/SideMenu/search.png')} />
            </TouchableOpacity>
          </View>

          {
            sideMenuData == 'physicians' && <SectionList style={styles.sectionListStyle}
              renderItem={({ item, index, section }) => (

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('physicianInformation') }}>
                  <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>

                    {
                      item.iconActive ? <Image style={styles.physicianIconStyle} source={require('../components/Assets/CriticialAlerts/critical_profile.png')} /> : <Image style={styles.physicianIconStyle} source={require('./myfamily/familySideMenu/user_icon.png')} />
                    }

                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.sectionItemStyle}>{item.physicianName}</Text>
                      <Text style={styles.specializationStyle}>{item.specialization}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                  <Text style={styles.sectionTextStyles}>{title}</Text>

                  <TouchableOpacity onPress={() => { title == 'Physician Lanes' ? this.props.navigation.navigate('addPhysicianLane') : this.props.navigation.navigate('searchPhysician') }}>
                    <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                  </TouchableOpacity>
                </View>
              )}
              sections={physicianMenuJSON}
              keyExtractor={(item, index) => item + index}
            />
          }

          {
            sideMenuData == 'documents' &&
            <View>

              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('documents') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/documents/document_icon.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: 'white', fontSize: 22, marginLeft: 10, alignSelf: 'center' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('documents') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/documents/document_icon.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: 'white', fontSize: 22, marginLeft: 10, alignSelf: 'center' }}>Untitled</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10, }}>
                <Text style={styles.sectionTextStyles}>Physicians</Text>

                <TouchableOpacity onPress={() => { }}>
                  <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>
              <FlatList
                style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, marginTop: -10 }}
                data={[{}, {}, {}]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('documents') }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Image style={styles.physicianIconStyle} source={require('../components/Assets/CriticialAlerts/critical_profile.png')} />
                      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={styles.sectionItemHeaderStyle}>Silvia T. Atlas</Text>
                        <Text style={styles.sectionItemStyle}>Gastroenterologists</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          }
          {
            //myHealth 
            sideMenuData == 'myHealth' &&
            <View style={{ top: 15 }}>

              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('medicalInfo') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/MyHealth/medical_info.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, marginLeft: 10, alignSelf: 'center', fontWeight: '500' }}>Medical Info</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('medicalPortals') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/MyHealth/medication.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, marginLeft: 10, alignSelf: 'center', fontWeight: '500' }}>Medical Portals</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('medication') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/MyHealth/medication.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, marginLeft: 10, alignSelf: 'center', fontWeight: '500' }}>Medications</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('healthData') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/MyHealth/health_data.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, marginLeft: 10, alignSelf: 'center', fontWeight: '500' }}>Health Data</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('legalDocuments') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <Image
                    style={{ height: 36, width: 36 }}
                    source={require('../components/Assets/MyHealth/leagal_documents.png')}
                  />
                  <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, marginLeft: 10, alignSelf: 'center', fontWeight: '500' }}>Legal Documents</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('addDevice') }}
                  style={{ flexDirection: 'row', margin: 5, }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image
                      style={{ height: 36, width: 36 }}
                      source={require('../components/Assets/MyHealth/devices.png')}
                    />
                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: '#fff', fontSize: 20, alignSelf: 'center', marginLeft: 7, fontWeight: '500' }}>Devices</Text>

                    <Image style={{ marginLeft: 130, width: 30, height: 30 }} source={require('../components/Assets/SideMenu/addbutton.png')} />
                  </View>
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ width: '100%', marginBottom: 20, marginTop: -10 }}
                data={[{ 'name': 'Inbody', 'id': 0 }, { 'name': 'Fitbit', 'id': 1 }]}
                backgroundColor={'#058070'}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('') }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>

                      <Image style={styles.physicianIconStyle} source={require('../components/Assets/MyHealth/fitbit.png')} />
                      <Text style={styles.sectionItemHeaderStyle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          }
          {
            sideMenuData == 'family' &&
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 8, marginTop: 20 }}>
                <Text style={styles.sectionTextStyles}>Family Lanes</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('familyLanes') }}>
                  <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, marginTop: -10 }}
                data={[{ name: 'Name1', relation: 'Brother', }, { name: 'Name2', relation: 'Brother', }]}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                      <Image style={styles.physicianIconStyle2} source={require('./myfamily/familySideMenu/user_icon.png')} />
                      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={styles.sectionItemHeaderStyle}>{item.name}</Text>
                        <Text style={styles.sectionItemStyle}>{item.relation}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                <Text style={styles.sectionTextStyles}>Family Members</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('searchMember') }}>
                  <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, marginTop: -10 }}
                data={[{ name: 'Lorenzo J Smith', relation: 'Father' }, { name: 'John Davidson', relation: 'Father' }, { name: 'Teena Dijo', relation: 'Mother' }, { name: 'John Sena', relation: 'Brother' }]}
                renderItem={({ item }) => (

                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('familyInformation'), { item } }}>
                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                      <Image style={styles.physicianIconStyle} source={require('./myfamily/familySideMenu/user_icon.png')} />
                      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={styles.sectionItemHeaderStyle}>{item.name}</Text>
                        <Text style={styles.sectionItemStyle}>{item.relation}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          }
          {
            sideMenuData == 'paitent' &&
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 8, marginTop: 20 }}>
                <Text style={styles.sectionTextStyles}>Patient &amp; Family Lanes</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('patientAndFamilyLanes') }}>
                  <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, marginTop: -10 }}
                data={[{ name: 'Name1', relation: 'Brother', }, { name: 'Name2', relation: 'Brother', }]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('patientInformation') }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Image style={styles.physicianIconStyle2} source={require('./myfamily/familySideMenu/user_icon.png')} />
                      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={styles.sectionItemHeaderStyle}>{item.name}</Text>
                        <Text style={styles.sectionItemStyle}>{item.relation}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                <Text style={styles.sectionTextStyles}>Patients</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('searchPtnts') }}>
                  <Image style={styles.sectionIcon} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, marginTop: 0 }}
                data={[{ name: 'Name1', relation: 'Mother' }, { name: 'Name2', relation: 'Father' }, { name: 'Name3', relation: 'Sister' }, { name: 'Name4', relation: 'Sister' }]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('patientInformation') }}>
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                      <Image style={styles.physicianIconStyle} source={require('./myfamily/familySideMenu/user_icon.png')} />
                      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                        <Text style={styles.sectionItemHeaderStyle}>{item.name}</Text>
                        <Text style={styles.sectionItemStyle}>{item.relation}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          }
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colorUtils.THEME_COLOR,
  },
  sectionListStyle: {
    marginLeft: 10,
    top: 30,
    marginTop: 0
  },
  sectionItemHeaderStyle: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
    fontFamily: fontUtils.FONT_FAMILY,
    alignSelf: 'flex-start'
  },
  sectionItemStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    fontFamily: fontUtils.FONT_FAMILY,
    alignSelf: 'flex-start'
  },
  specializationStyle: {
    marginLeft: 10,
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
    fontFamily: fontUtils.FONT_FAMILY,
    alignSelf: 'flex-start'
  },
  physicianIconStyle2: {
    width: 25,
    height: 25,
    marginLeft: 5,
    alignSelf: 'center'
  },
  physicianIconStyle: {
    width: 30,
    height: 30,
    marginLeft: 2,
    alignSelf: 'center'
  },
  sectionIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  sectionTextStyles: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontFamily: fontUtils.FONT_FAMILY
  }
})