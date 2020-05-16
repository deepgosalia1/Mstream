import React, { Component } from 'react'

//import { RNCalendar, CalendarList, Agenda } from 'react-native-calendars';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import calendarListJson from '../../components/Assets/json/calendar.list.json';
import * as fontUtils from '../../components/utils/fontUtils'
import * as colorUtils from '../../components/utils/colorUtils'

export default class Calendar extends React.Component {


  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={params.onSearchClicked}>
          <Image
            source={require('../../components/Assets/common/list_icon_white.png')}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={params.onSearchClicked}>
          <Image
            source={require('../../components/Assets/common/search_icon_white.png')}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
      </View>
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      calendarJsonArray: calendarListJson
    }
  }

  render() {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var day = new Date().getDay();

    function getDayName(day_) {
      switch (day_) {
        case 1:
          return 'Monday'
          break;

        case 2:
          return 'Tuesday'

          break;
        case 3:
          return 'Wednesday'

          break;
        case 4:
          return 'Thursday'

          break;
        case 5:
          return 'Friday'

          break;
        case 6:
          return 'Saturday'

          break;
        case 7:
          return 'Sunday'

          break;

        default:
          break;
      }
    }

    if (month.toString().split('').length == 1) { month = "0" + month }

    var dateFormatted = getDayName(day) + ", " + month + " " + date + "," + year;

    return (
      <View style={{ flex: 1 }}>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('calendarMonthView') }}>
          <Text style={{ fontFamily: fontUtils.FONT_FAMILY, padding: 10, fontSize: 24, color: '#000', alignSelf: 'center' }}>
            Wednesday, May 30, 2018
        </Text>
        </TouchableOpacity>
        <FlatList
          style={{ backgroundColor: '#fff' }}
          data={this.state.calendarJsonArray}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
        <TouchableOpacity
          style={{ position: 'absolute', end: 0, bottom: 0, }}
          onPress={() => { this.props.navigation.navigate('calendarNewTask') }}>
          <Image
            style={{ width: 56, height: 56, margin: 20 }}
            source={require('../../components/Assets/common/add_icon.png')}
          />
        </TouchableOpacity>

      </View>
    )
  }

  _renderSeparator = () => {
    return (
      <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }} />
    )
  }

  _renderItem = (item) => {
    let calendarData = item.item;
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('calendarEditTask') }}
          style={{ flex: 1, flexDirection: 'row', }}
        >
          <View style={{ flex: 0.2, paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', marginRight: 5, flexDirection: 'column' }}>
            {
              calendarData.allDay && <Text >All-day</Text>
            }
            {
              !calendarData.allDay &&
              <View>
                <Text style={{ color: 'grey' }}>{calendarData.fromTime}</Text>
                <Text style={{ color: 'grey' }}>{calendarData.toTime}</Text>
              </View>
            }
          </View>
          <View style={{ width: 1, height: '100%', backgroundColor: 'red' }}></View>
          <View style={{ flex: 0.8, flexDirection: 'column', paddingTop: 10, paddingBottom: 10, height: '100%', marginLeft: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 18, color: colorUtils.THEME_COLOR }}>{'\u25CF '}</Text>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 18, color: '#000', alignSelf: 'center' }}>{calendarData.title}</Text>
            </View>
            <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 14, color: 'grey' }}>{calendarData.description}</Text>
          </View>
          <Image
            style={{ height: 36, width: 36, padding: 5, alignSelf: 'center', position: 'absolute', end: 0 }}
            source={calendarData.hasAttachments ? require('../../components/Assets/calendar/attachment_icon.png') : null} />

        </TouchableOpacity>
      </View>
    )
  }
}