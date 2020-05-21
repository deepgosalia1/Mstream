import { Calendar } from 'react-native-calendars'; // 1.5.3
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,Platform } from 'react-native';
import React from 'react';
import * as fontUtils from '../../components/utils/fontUtils'
import calendarListJson from '../../components/Assets/json/calendar.list.json';
import * as colorUtils from '../../components/utils/colorUtils'
import Moment from 'moment';
import { HAS_INTERNET } from '../../components/utils/Preferences';

export default class CalendarMonthView extends React.Component {

  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
    var date = new Date();
    Moment.locale('en');
    var dateFormatted = Moment(date).format('YYYY-MM-DD');
    var newDate = new Date()
    var requiredFormat = this.getDayName(newDate.getDay()) + ', ' + this.getMonthName(newDate.getMonth()+1) + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    this.state = {
      calendarJsonArray: calendarListJson,
      
      currentDate: requiredFormat,
      currentDates: {
        currentDate: '2018-06-01',
        minDate: '2018-06-01',
        maxDate: '2018-06-30'
      }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <TouchableOpacity
        onPress={() => { navigation.navigate('calendarYearView', { returnData: params.returnData }) }}>
        <Text style={{ color:colorUtils.THEME_COLOR, fontWeight: 'bold', fontSize: 22 }}>2018</Text>
      </TouchableOpacity>,
      headerRight: <View style={{ flexDirection: 'row' }}>
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
      </View>,

    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      returnData: this.returnData.bind(this),
      taskViewEvent: this.goToTaskViewClicked.bind(this)
    })
  }

  goToTaskViewClicked() {
    this.props.navigation.navigate('calendarTaskView')
  }
  returnData(item) {
    let cloneState = _.cloneDeep(this.state.currentDates)
    cloneState.currentDate = item.item.current;
    cloneState.minDate = item.item.minDate;
    cloneState.maxDate = item.item.maxDate;
    var uDate = new Date(item.item.current)
    let requiredFormat = this.getDayName(uDate.getDate()) + ', ' + this.getMonthName(uDate.getMonth()) + ' ' + uDate.getDate() + ', ' + uDate.getFullYear();

    this.setState({
      currentDates: cloneState,
      currentDate: requiredFormat
    })
  }

  render() {

    var date = new Date();
    Moment.locale('en');
    var dateFormatted = Moment(date).format('YYYY-MM-DD');
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={this.state.currentDates.currentDate}//{'2018-06-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={this.state.currentDates.minDate}//{'2018-06-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={this.state.currentDates.maxDate}//{'2018-06-30'}
          // Handler which gets executed on day press. Default = undefined
          // onDayPress={day => {
          //   console.log('selected day', day);

          // }}

          onDayPress={this.onDayPress}

          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM'}

          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out {returnData: this.returnData.bind(this)}
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // markedDates={{ [this.state.selected]: { selected: true,  selectedColor: colorUtils.THEME_COLOR, textColor: 'white' } }}
          markingType={'custom'}
          markedDates={{

            [this.state.selected]: { selected: true, disableTouchEvent: true, selectedColor: colorUtils.THEME_COLOR, textColor: '#fff' },
            [dateFormatted]: {
              customStyles: {
                container: {
                  backgroundColor: colorUtils.THEME_COLOR,
                },
                text: {
                  color: '#fff',
                },
              },
            }
          }}
          theme={{
            textSectionTitleColor: 'black',
            selectedDayBackgroundColor: colorUtils.THEME_COLOR,
            // selectedDayTextColor: '#fff',
            calendarBackground:'#fff',
            dayTextColor: 'black',
            textDisabledColor: '#ababab',
            selectedDotColor: '#ffffff',
            // monthTextColor: 'black',
            textDayFontSize: 18,
            textDayFontFamily: fontUtils.FONT_FAMILY,
            textDayFontStyle: fontUtils.FONT_BOLDSTYLE,
            textMonthFontFamily: fontUtils.FONT_FAMILY,
            textDayHeaderFontFamily: fontUtils.FONT_FAMILY,
            textMonthFontWeight: 'bold',
            textMonthFontSize: 20,
            textDayHeaderFontSize: 12,
            'stylesheet.calendar.header': {
              header: {
                flexDirection: 'row',
              }
            },
            'stylesheet.day.basic':{
              text: {
                marginTop: Platform.OS === 'android' ? 4 : 6,
                fontSize: 16,
                fontFamily:fontUtils.FONT_FAMILY,
                fontWeight: '600',
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
          style={{ fontFamily: fontUtils.FONT_FAMILY, padding: 10, fontSize: 20, fontWeight: 'bold', color: '#000', alignSelf: 'center', color: colorUtils.THEME_COLOR }}
          onPress={() => { this.props.navigation.navigate('calendarView') }}>
          <Text style={{ fontFamily: fontUtils.FONT_FAMILY, padding: 10, fontSize: 20, fontWeight: 'bold', color: '#000', alignSelf: 'center', color: colorUtils.THEME_COLOR }}>
            {this.state.currentDate}
          </Text>
        </TouchableOpacity>

        <FlatList
          style={{ backgroundColor: '#fff', flex: 1 }}
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
    );

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
  onDayPress(day) {

    var newDate = new Date(day.dateString)
    var requiredFormat = this.getDayName(newDate.getDay()) + ', ' + this.getMonthName(day.month) + ' ' + day.day + ', ' + day.year;
    this.setState({
      selected: day.dateString,
      currentDate: requiredFormat
    });
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
              calendarData.allDay && <Text style={{ color: '#434343' }}>All-day</Text>
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
}
const styles = StyleSheet.create({
  currentDateTextStyle: {
    backgroundColor: 'grey',
    marginLeft: 15,
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: fontUtils.FONT_FAMILY
  }
})
