import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  Image
} from 'react-native'
import * as colorUtils from '../../components/utils/colorUtils'
import * as fontUtils from '../../components/utils/fontUtils'
import getITListItemsJSON from './getit.list.json';

export default class GetIT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: getITListItemsJSON,
    }
  }

  renderSectionListItem = (item) => {
    return (
      <FlatList
        data={this.state.listData}
        renderItem={this.renderFlatListItem}
      />
    )
  }

  renderXrayReport = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FDEFEF', flex: 1 }}>
          <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 3, color: '#93112A' }}>Dr Willams shared your Xray Reports</Text>
          <Text style={{ fontSize: 10, marginRight: 5, color: '#93112A' }}>10:30 AM</Text>
        </View>
        <View style={{ backgroundColor: '#FDEFEF', flexDirection: 'row', padding: 3 }}>
          <Image style={styles.xrayStyles} source={require('./xray1.png')} />
          <Image style={styles.xrayStyles} source={require('./xray2.png')} />
        </View>
      </View>
    )
  }
  renderHealthLane = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ECFAF9', flex: 1 }}>
          <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 3, color: '#10695B' }}>My Family Health Lane</Text>
          <Text style={{ fontSize: 10, marginRight: 5, color: '#10695B' }}>10:30 AM</Text>
        </View>

        <View style={{ flexDirection: 'column', backgroundColor: '#ECFAF9', flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.healthLaneIconStyles} source={require('../myfamily/familySideMenu/user_icon.png')} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.healthLaneTextStyles}>Me</Text>
              <Text style={styles.healthLaneTextStyles}>Hello Doctor I have some problem</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#ECFAF9', flex: 1, marginTop: 5, marginBottom: 5 }}>
            <Image style={styles.healthLaneIconStyles} source={require('../myfamily/familySideMenu/user_icon.png')} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.healthLaneTextStyles}>Tanya J Prakash</Text>
              <Text style={styles.healthLaneTextStyles}>Please consult this coming friday</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  renderMedication = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ backgroundColor: '#E6F9C9', flex: 1}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#E6F9C9', flex: 1 }}>
            <Text style={styles.medicationTextStyles}>Robert Dupisis-Gastronterology</Text>
            <Text style={styles.medicationTextStyles}>10:30 AM</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#E6F9C9', flex:1}}>
            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <Image style={styles.healthLaneIconStyles} source={require('./playgetit.png')} />
              <Text style={styles.medicationTextStyles}>Medication</Text>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#E6F9C9', flex:1}}>
              <Image style={styles.healthLaneIconStyles} source={require('./playgetit.png')} />
              <Text style={styles.medicationTextStyles}>Robert Dupisis-Gastronterology</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  renderXrayBloodReports = (item) => {
    return (

      <View style={styles.flatListItemStyle}>
        <View style={{ backgroundColor: '#F8F2D4', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F8F2D4', flex: 1 }}>
            <Text style={styles.xrayBloodReportTextStyles}>Whyne N.Pumerey Nurelogy</Text>
            <Text style={styles.xrayBloodReportTextStyles}>10:30 AM</Text>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: '#F8F2D4', flex: 1 }}>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <Image style={styles.healthLaneIconStyles} source={require('./xrayReport.png')} />
              <Text style={styles.xrayBloodReportTextStyles}>X'Ray Report</Text>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#F8F2D4', flex: 1,alignItems:'center' }}>
              <Image style={styles.healthLaneIconStyles} source={require('./xrayReport.png')} />
              <Text style={styles.xrayBloodReportTextStyles}>Blood Report</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderActivity = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ backgroundColor: '#FDEFEF', flex: 1 }}>

          <View style={{ flexDirection: 'row', marginLeft: 3 }}>
            <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./activity.png')} />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FDEFEF', flex: 1 }}>
                <Text style={styles.activityTextStyles}>Activity</Text>
                <Text style={styles.activityTextStyles}>03:00 PM</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FDEFEF', marginLeft: 25 }}>
            <Text style={styles.activityChildItemsStyles}>Steps 8200</Text>
            <Text style={styles.activityChildItemsStyles}>Distance 2KM</Text>
          </View>
        </View>
      </View>
    )
  }
  renderBloodPreasure = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ backgroundColor: '#ECFAF9'}}>
          <View style={{ flexDirection: 'row', marginLeft: 3 }}>
            <Image style={{ width: 20, height: 23, marginTop: 5 }} source={require('./bloodpreasure.png')} />
            <View style={{ flexDirection: 'column',flex:1}}>
              <View style={{ flexDirection:'row', alignItems: 'center',backgroundColor: '#ECFAF9',margin:5,justifyContent: 'space-between',flex:1}}>
                <Text style={styles.bloodPreasureTextStyles}>Blood Preasure</Text>
                <Text style={styles.bloodPreasureTextStyles}>05:00 PM</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFAF9', marginLeft:25 }}>
            <Text style={styles.systematicTextStyles}>Systalic 120/80</Text>
            <Text style={styles.systematicTextStyles}>Pulse 100 Beats</Text>
          </View>
        </View>
      </View>
    )
  }

  renderDoctorAppointments = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
         <View style={{ backgroundColor:'#E6F9C9', flex: 1 }}>
          <View style={{ flexDirection:'row', marginLeft: 3 }}>
            <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./appointment.png')} />
            <View style={{ flexDirection:'column', flex: 1 }}>
              <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#E6F9C9', flex:1}}>
                <Text style={styles.medicationTextStyles}>Consulation With Dr.Willams</Text>
                <Text style={styles.medicationTextStyles}>05:00 PM</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6F9C9', marginLeft: 25 }}>
            <Text style={styles.doctorAppointChildTextStyles}>10 June 2018 at 10:30 am Friday</Text>
          </View>
        </View>
      </View>
    )
  }

  renderMedicalReminders = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ backgroundColor:'#F8F2D4', flex: 1 }}>
          <View style={{ flexDirection:'row', marginLeft: 3 }}>
            <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./medicine.png')} />
            <View style={{ flexDirection:'column', flex: 1 }}>
              <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F8F2D4', flex: 1 }}>
                <Text style={styles.xrayBloodReportTextStyles}>Acebutolol (Oral Capsul)</Text>
                <Text style={styles.xrayBloodReportTextStyles}>05:00 PM</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F2D4', marginLeft: 25 }}>
            <Text style={styles.acebutololChildItemTextStyles}>13 April 2018 - 20 April 2018</Text>
          </View>
        </View>
      </View>
    )
  }

  renderMedicalInfo = (item) => {
    return (
      <View style={styles.flatListItemStyle}>
        <View style={{ flexDirection:'row', alignItems:'center', backgroundColor: '#FDEFEF',justifyContent: 'space-between', flex: 1}}>
          <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 3, color: '#93112A' }}>Added Diabetic to medicalillness</Text>
          <Text style={{ fontSize: 10, marginRight: 5, color: '#93112A' }}>10:30 AM</Text>
        </View>
        <View style={{flexDirection:'column',backgroundColor:'#FDEFEF'}}>
          <Text style={{ fontSize: 10, marginLeft:5, marginTop: 3, color: '#93112A' }}>Added Asthma to Allergies</Text>
          <Text style={{ fontSize: 10, margin:5, color: '#93112A' }}>Added John's Medicals in Pharmacy</Text>
        </View>
      </View>
    )
  }
  renderFlatListItem = (item) => {

    switch (parseInt(item.item.id)) {
      case 0:
        return this.renderXrayReport(item.item)
        break;
      case 1:
        return this.renderHealthLane(item.item)
        break;
      case 2:
        return this.renderMedication(item.item)
        break;
      case 3:
        return this.renderXrayBloodReports(item.item)
        break;
      case 4:
        return this.renderActivity(item.item)
        break;
      case 5:
        return this.renderBloodPreasure(item.item)
        break;
      case 6:
        return this.renderDoctorAppointments(item.item)
        break;
      case 7:
        return this.renderMedicalReminders(item.item)
        break;
      case 8:
        return this.renderMedicalInfo(item.item)
        break;
      default:
        break;
    }

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
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection:'row',flex:1}}>
        <Image source={require('./time.png')} style={{width:46}}/>
        <SectionList
          renderItem={this.renderSectionListItem}
          renderSectionHeader={({section:{title}}) => (
            <Text style={styles.sectionTextStyles}>29 June 2018,Friday</Text>
          )}
          sections={[
            { title:'Title1', data: [''] }
          ]}
          keyExtractor={(item, index) => item + index}
          style={styles.sectionListStyles}
        />
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sectionTextStyles: {
    fontSize: 20,
    margin: 6,
    color: colorUtils.THEME_COLOR,
    fontFamily: fontUtils.FONT_FAMILY,
  },
  sectionListStyles: {
    backgroundColor: 'transparent',
    marginLeft:4,
    width: '88%'
  },
  xrayStyles: {
    width: 40,
    height: 40,
    marginLeft:5,
    marginTop:5,
    marginBottom:5
  },
  healthLaneIconStyles: {
    width: 20,
    height: 20,
    margin:5
  },
  healthLaneTextStyles: {
    fontSize: 10,
    color: '#10665D',
    marginTop:3,
    marginLeft:5, 
    fontFamily:fontUtils.FONT_FAMILY
  },
  medicationTextStyles: { fontSize: 10,marginRight:5,marginLeft:5,marginTop:5,marginBottom:2, color: '#4B6E1E',alignSelf:'center',fontFamily:fontUtils.FONT_FAMILY},
  doctorAppointChildTextStyles:{fontSize: 10, marginLeft:7,marginBottom:5, color: '#4B6E1E',alignSelf:'center',fontFamily:fontUtils.FONT_FAMILY},
  xrayBloodReportTextStyles: { color: '#6F5A12', fontSize:10, marginTop:3,marginLeft:5,marginRight:3,alignSelf:'center',fontFamily:fontUtils.FONT_FAMILY},
  acebutololChildItemTextStyles:{color: '#6F5A12', fontSize:10,marginLeft:5,marginBottom:5,alignSelf:'center',fontFamily:fontUtils.FONT_FAMILY},
  activityTextStyles: { color:'#941B2B',fontSize: 10,marginLeft:3,marginRight:5,marginTop:5,fontFamily:fontUtils.FONT_FAMILY},
  activityChildItemsStyles:{color:'#941B2B',fontSize: 10,marginLeft:5,marginBottom:5,fontFamily:fontUtils.FONT_FAMILY},
  bloodPreasureTextStyles:{
    fontSize: 10,
    color: '#10665D',
    marginLeft:3, 
    fontFamily:fontUtils.FONT_FAMILY,
  },
  systematicTextStyles:{
    fontSize: 10,
    color: '#10665D',
    marginLeft:5, 
    fontFamily:fontUtils.FONT_FAMILY,
    marginBottom:5
  },
  flatListItemStyle: {
    backgroundColor: 'lightgray',
    marginTop:5,
    marginLeft: 6,
    width: "97%",
  }
})