import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Platform
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import calendarListJson from '../../components/Assets/json/calendar.list.json';
import * as fontUtils from '../../components/utils/fontUtils'
import * as colorUtils from '../../components/utils/colorUtils'
import Moment from 'moment';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    var newDate = new Date()
    var requiredFormat = this.getDayName(newDate.getDay()) + ', ' + this.getMonthName(newDate.getMonth()+1) + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    this.state = {
      items: {},
      calendarJsonArray: calendarListJson,
      currentDate: requiredFormat//'Tuesday, June 12, 2018'
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      taskViewEvent: this.taskViewClicked.bind(this),
    });
  }

  taskViewClicked() {
    this.props.navigation.navigate('calendarTaskView')
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <View style={{ flexDirection:'row'}}>
        <TouchableOpacity
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={params.taskViewEvent}>
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

  renderData() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: fontUtils.FONT_FAMILY, padding: 10, fontSize: 20, color: '#000', alignSelf: 'center', color: 'black' }}>
          {this.state.currentDate}
        </Text>

        <FlatList
          style={{ backgroundColor: '#fff', flex: 1 }}
          data={this.state.calendarJsonArray}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
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
              calendarData.allDay && <Text style={{color:'#434343'}}>All-day</Text>
            }
            {
              !calendarData.allDay &&
              <View>
                <Text style={{ color: '#434343' }}>{calendarData.fromTime}</Text>
                <Text style={{ color: '#434343' }}>{calendarData.toTime}</Text>
              </View>
            }
          </View>
          <View style={{ width: 1, height: '100%', backgroundColor: 'red' }}></View>
          <View style={{ flex: 0.8, flexDirection: 'column', paddingTop: 10, paddingBottom: 10, height: '100%', marginLeft: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 16, color: colorUtils.THEME_COLOR }}>{'\u25CF '}</Text>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 16, color: '#000', alignSelf: 'center',fontWeight:'500'}}>{calendarData.title}</Text>
            </View>
            <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 13, color: 'grey', marginLeft: 9 }}>{calendarData.description}</Text>
          </View>
          <Image
            style={{ height: 36, width: 36, padding: 5, alignSelf: 'center', position: 'absolute', end: 0 }}
            source={calendarData.hasAttachments ? require('../../components/Assets/calendar/attachment_icon.png') : null} />

        </TouchableOpacity>
      </View>
    )
  }
  getMonthName(monthNo) {

    switch (monthNo) {
      case 1:
        return 'January'
        break;

      case 2:
        return 'Feburary'
        break;
      case 3:
        return 'March'
        break;
      case 4:
        return 'April'
        break;
      case 5:
        return 'May'
        break;
      case 6:
        return 'June'
        break;
      case 7:
        return 'July'
        break;
      case 8:
        return 'August'
        break;
      case 9:
        return 'September'
        break;

      case 10:
        return 'October'
        break;
      case 11:
        return 'November'
        break;
      case 12:
        return 'December'
        break;

      default:
        break;
    }
  }
  getDayName(day) {
    switch (day) {
      case 0:
        return 'Sunday'
        break;

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

      default:
        break;
    }
  }
  render() {
    var date = new Date();
    Moment.locale('en');
    var dateFormatted = Moment(date).format('YYYY-MM-DD');
    return (
      <View style={{flex:1}}>
        <Agenda
          items={this.state.items}
          //loadItemsForMonth={this.loadItems.bind(this)} backgroundColor:'#F1F1F1'
          selected={dateFormatted}
          hideKnob={true}
          renderEmptyData={this.renderData.bind(this)}
          //renderItem={this.renderItem.bind(this)}
          //renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          onDayPress={(selectedDate) => {
            var newDate = new Date(selectedDate.dateString)
            var requiredFormat = this.getDayName(newDate.getDay()) + ', ' + this.getMonthName(selectedDate.month) + ' ' + selectedDate.day + ', ' + selectedDate.year;
            this.setState({
              currentDate: requiredFormat
            })
          }}
          theme={{
            textDayHeaderFontSize:9,
            'stylesheet.agenda.main': {
              weekday: {
                width: 32,
               // textAlign: 'center',
                fontSize: 12,
                color: '#323232',
                fontWeight:"bold",
                marginBottom:8,
                fontFamily:fontUtils.FONT_FAMILY
              }
            },
            'stylesheet.day.basic':{
              text: {
                marginTop: Platform.OS === 'android' ? 4 : 6,
                fontSize: 18,      
                marginLeft:5,
                marginRight:5,
               fontFamily:fontUtils.FONT_FAMILY,
                //fontWeight: '500',
                color:'#323232',
              },
              selectedText: {
                color:'#fff',
                fontWeight:'bold'
              }
            }
          }}
        />

        <TouchableOpacity
          style={{ position: 'absolute', end: 0, bottom: 0, }}
          onPress={() => { this.props.navigation.navigate('calendarNewTask') }}>
          <Image
            style={{ width: 56, height: 56, margin:20}}
            source={require('../../components/Assets/common/add_icon.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 7; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < 1; j++) {
            this.state.items[strTime].push({
              // name: 'Item for ' + strTime,
              name: 'Appointment with Dr.Raghu',
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    //let calendarData = item.item;
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('calendarEditTask') }}
          style={{ flex: 1, flexDirection: 'row' }}
        >
          <View style={{ flex: 0.2, paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', marginRight: 5, flexDirection: 'column' }}>
            <View>
              <Text style={{ color: '#434343' }}>11:00 AM</Text>
              <Text style={{ color: '#434343' }}>12:00 AM</Text>
            </View>

          </View>
          <View style={{ width: 1, height: '100%', backgroundColor: 'red' }}></View>
          <View style={{ flex: 0.8, flexDirection:'column', paddingTop:10, paddingBottom:10, height:'100%', marginLeft:5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 18, color: colorUtils.THEME_COLOR }}>{'\u25CF '}</Text>
              <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 15, color: '#000', alignSelf: 'center' }}>{item.name}</Text>
            </View>
            <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 12, color: 'grey', marginLeft: 15 }}>Regular Consulation</Text>
          </View>
          <Image
            style={{ height: 36, width: 36, padding: 5, alignSelf:'center', position: 'absolute', end: 0 }}
            source={require('../../components/Assets/calendar/attachment_icon.png')} />
        </TouchableOpacity>
        <View style={{ width:'100%', height:1, backgroundColor:'grey' }} />
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text></Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  eventTitleStyle: {
    color: 'black',
    fontFamily: fontUtils.FONT_FAMILY,
    fontSize: 18
  },
  eventTypeStyle: {
    color: 'lightgrey',
    fontFamily: fontUtils.FONT_FAMILY,
    fontSize: 12
  },
  emptyDate: {
    height: 0,
    flex: 1,
    paddingTop: 0
  }
});
