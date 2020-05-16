import React, { Component } from 'react';
//https://www.speridian.com/about_us
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image
} from 'react-native';
import * as colorUtils from '../components/utils/colorUtils';


export default class PrivacyInformation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.privicyCheckUpViewStyle}>
          <Image
            style={{ background: 'red', margin: 10, width: 20, height: 20, }}
            source={require('../components/Assets/Privacy/privicy1.png')} />
          <Text style={styles.privicyCheckUpTitleStyle}>Privicy Checkup</Text>
          <Switch value={true} style={styles.swtichStyle}></Switch>
        </View>
        <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
          <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} />
          <Text style={styles.dataTextStyle}>Turn on this setting to recieve privacy related notifications</Text>
        </View>

        <View
          style={{
            height: 1,
            marginTop: 15,
            width: "100%",
            backgroundColor: "lightgrey",
          }}
        />
        <View>

          <View style={styles.privicyCheckUpViewStyle}>
            <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} source={require('../components/Assets/Privacy/privicy2.png')} />
            <Text style={styles.whoSeeProfileInfoStyle}>Who can see my profile info?</Text>
            <Switch value={true} style={styles.swtichStyle}></Switch>
          </View>

          <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} />
            <Text style={styles.dataTextStyle2}>Turn on this setting to updates from doctors</Text>
          </View>

          <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} />
            <Text style={{ marginLeft: 9, fontFamily: 'Montserrat', fontSize: 20, fontStyle: 'normal', color: colorUtils.THEME_COLOR }}>Who can see my stuff?</Text>
          </View>

          <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text style={{ marginLeft: 35, fontFamily: 'Montserrat', fontSize: 18, fontStyle: 'normal', color: 'grey' }}>Who can see your future posts?</Text>
            <Image style={{ background: 'red', width: 20, height: 20, marginRight: 10 }} />
          </View>
          <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Text style={{ marginLeft: 35, fontFamily: 'Montserrat', fontSize: 15, fontStyle: 'normal', color: 'grey' }}>Doctors can view your posts</Text>
          </View>
          <View
            style={{
              height: 1,
              marginTop: 15,
              width: "100%",
              backgroundColor: "lightgrey",
            }}
          />

        </View>
        <View style={styles.privicyCheckUpViewStyle}>
          <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} source={require('../components/Assets/Privacy/privicy3.png')} />
          <Text style={styles.privicyCheckUpTitleStyle}>Data Policy</Text>
          <Switch value={true} style={styles.swtichStyle}></Switch>
        </View>
        <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
          <Image style={{ background: 'red', margin: 10, width: 20, height: 20, }} />
          <Text style={styles.dataTextStyle}>Turn on this setting to exchange of data through app</Text>
        </View>

        <View
          style={{
            height: 1,
            marginTop: 15,
            width: "100%",
            backgroundColor: "lightgrey",
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  privicyCheckUpViewStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  privicyCheckUpTitleStyle: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    alignSelf: 'center'
  },
  whoSeeProfileInfoStyle: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    alignSelf: 'center'
  },
  privicyCheckUpSwitchStyle: {
    marginRight: 5,
  },
  swtichStyle: {
    position: 'absolute',
    end: 0,
    alignSelf: 'center'
  },
  dataTextStyle: {
    marginRight: 25,
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  dataTextStyle2: {
    marginRight: 25,
    color: 'grey',
    fontSize: 14,
    fontFamily: 'Montserrat',
  }
})