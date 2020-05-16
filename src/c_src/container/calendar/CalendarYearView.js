import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { Calendar, CALENDAR_MODE } from 'react-native-calendars';
import calendarEventsJSON from '../../components/Assets/json/calendarevents.list.json';
import * as fontUtils from '../../components/utils/fontUtils'
import SelectionView from '../../bootstrap/Picker/SelectionView';
import Moment from 'moment';
import * as colorUtils from '../../components/utils/colorUtils'

var optionTypes =
    [
        {
            "value": "2018",
            "text": "2018"
        },
        {
            "value": "2019",
            "text": "2019"
        }, {
            "value": "2020",
            "text": "2020"
        },
        {
            "value": "2022",
            "text": "2022"
        },
        {
            "value": "2023",
            "text": "2023"
        }
    ]

export default class CalendarYearView extends Component {
    constructor(props) {
        super(props);

        Moment.locale('en');

        //listData = this.getYearMonths(new Date().getFullYear)
        this.state = {
            items: {},
            showCalendar: false,
            calendarObject: {},
            selectedYear: 2018,
            yearCalendarData: this.getYearMonths(2018)
        };
        this.getYearMonths = this.getYearMonths.bind(this);

    }
    componentDidMount() {
        this.props.navigation.setParams({
            firstDateEvent: this.getFirstDateOfMonth.bind(this),
            lastDateEvent: this.getLastDateOfMonth.bind(this),
            updateState: this.updateCalendar.bind(this),
        });
    }
    getYearMonths(year) {

        let listData = [];
        for (var i = 1; i <= 12; i++) {
            let object = {}
            object.minDate = Moment(this.getFirstDateOfMonth(year, i)).format('YYYY-MM-DD');
            object.maxDate = Moment(this.getLastDateOfMonth(year, i)).format('YYYY-MM-DD');
            object.current = Moment(this.getFirstDateOfMonth(year, i)).format('YYYY-MM-DD');
            listData.push(object)
        }

        return listData;
    }
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
            </View>,

            headerTitle: <View style={{ flexDirection: 'row' }}>

                <SelectionView
                    lang="en-US"
                    placeholder='2018'
                    minuteInterval={10}
                    showIcon={true}
                    showInputIcon={false}
                    showUnderLine={false}
                    iconSource={require('../../components/Assets/General/dropdownWhite.png')}
                    scrollPickerEvent={(evt, height, action) => {
                        //this._scrollIntoView(evt.nativeEvent.target, height,action)
                        //this.scroll.props.scrollIntoView(evt.target)
                    }}
                    onConfirm={(option) => {
                        //this.setState({ [name]: option.value })

                        params.updateState(option)


                    }}
                    onSelect={(option) => {

                        // this.setState({
                        //     selectedYear:option.value
                        // })
                    }}

                    onClear={() => {

                    }}

                    customStyles={{
                        dateText: {
                            marginLeft: 4,
                            bottom: 6,
                            width:'50%',
                            color:colorUtils.THEME_COLOR,
                            fontSize: fontUtils.FONT_SIZE_TITLE,
                            fontFamily: fontUtils.FONT_FAMILY,
                            fontStyle: fontUtils.FONT_STYLE,
                            fontWeight: 'bold'
                        },
                        placeholderText: {
                            marginLeft: 1,
                            width: '50%',
                            color:colorUtils.THEME_COLOR,
                            bottom: 6,
                            fontWeight: 'bold',
                            fontSize: fontUtils.FONT_SIZE_TITLE,
                            fontFamily: fontUtils.FONT_FAMILY,
                            fontStyle: fontUtils.FONT_STYLE
                        },
                        dateIcon: {
                            width: 15,
                            height: 15,
                            marginRight: 40,
                            marginBottom: 5,
                        },
                        // ... You can check the source to find the other keys.
                    }}

                    options={optionTypes}
                >
                </SelectionView>

            </View>
        }
    }

    updateCalendar(option) {
        let listData = [];
        for (var i = 1; i <= 12; i++) {
            let object = {}
            object.minDate = Moment(this.getFirstDateOfMonth(option.value, i)).format('YYYY-MM-DD');
            object.maxDate = Moment(this.getLastDateOfMonth(option.value, i)).format('YYYY-MM-DD');
            object.current = Moment(this.getFirstDateOfMonth(option.value, i)).format('YYYY-MM-DD');
            listData.push(object)
        }

        this.setState({
            selectedYear: option.value,
            yearCalendarData: listData
        })
    }
    getLastDateOfMonth = (Year, Month) => {
        return (new Date(Year, Month, 0));
    }

    getFirstDateOfMonth = (Year, Month) => {
        return (new Date(Year, Month - 1, 1))
    }

    render() {

        return (
            <View style={{ flex: 1, height: '80%' }}>
                {/*
                    this.state.showCalendar &&
                    <Calendar
                        markingType={'custom'}
                        markedDates={{
                            [this.state.dateFormatted]: {
                                customStyles: {
                                    container: {
                                        backgroundColor: 'green',
                                    },
                                    text: {
                                        color: 'white',
                                    },
                                },
                            }
                        }}
                        // Initially visible month. Default = Date()
                        current={this.state.calendarObject.current}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={this.state.calendarObject.minDate}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={this.state.calendarObject.maxDate}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMMM'}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                    />
                    */ }
                {
                    <FlatList
                        style={{ backgroundColor: '#fff', padding: 10 }}
                        numColumns={3}
                        data={this.state.yearCalendarData}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={this._renderSeparator}
                        keyExtractor={(item, index) => index}
                        removeClippedSubviews={false}
                    />
                }
                {
                    <TouchableOpacity
                        style={{ position: 'absolute', end: 0, bottom: 0, }}
                        onPress={() => { this.props.navigation.navigate('calendarNewTask') }}>
                        <Image
                            style={{ width: 56, height: 56, margin: 20 }}
                            source={require('../../components/Assets/common/add_icon.png')}
                        />
                    </TouchableOpacity>
                }
            </View>

        );
    }
    getMonthAndYear(item) {
        let selecteCalendar = item.item;
        return selecteCalendar;//dateFormatted = Moment(date).format('YYYY-MM-DD');
    }

    _renderItem = (item) => {
        let dates = item.item;
        var date = new Date();

        var dateFormatted = "";
        if (item.index == new Date().getMonth()) {
            dateFormatted = Moment(date).format('YYYY-MM-DD');
        }
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log('check the item', item)
                    this.props.navigation.state.params.returnData(item);
                    this.props.navigation.goBack();
                }}
                style={{ flex: 1, marginTop: 10, }}>
                <Calendar
                    markingType={'custom'}
                    markedDates={{
                        [dateFormatted]: {
                            customStyles: {
                                container: {
                                    backgroundColor: colorUtils.THEME_COLOR,
                                },
                                text: {
                                    color: 'white',
                                },
                            },
                        }
                    }}
                    // Initially visible month. Default = Date()
                    current={dates.current}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={dates.minDate}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={dates.maxDate}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    //calendarMode = {CALENDAR_MODE.YEARLY_VIEW} 
                    markingType={'custom'}
                    markedDates={{

                        [this.state.selected]: { selected: true, disableTouchEvent: true, selectedColor: colorUtils.THEME_COLOR, textColor: '#fff' },
                        [dateFormatted]: {
                            customStyles: {
                                container: {
                                    backgroundColor: colorUtils.THEME_COLOR,
                                },
                                text: {
                                    color: 'white',
                                },
                            },
                        }
                    }}
                    theme={{
                        textSectionTitleColor: 'black',
                        selectedDayBackgroundColor: colorUtils.THEME_COLOR,
                        selectedDayTextColor: 'white',
                        textDisabledColor: '#d9e1e8',
                        selectedDotColor: '#ffffff',
                        monthTextColor: 'black',
                        calendarBackground:'#fff',
                        textDayFontSize: 7,
                        textDayFontFamily: fontUtils.FONT_FAMILY,
                        textDayFontStyle: fontUtils.FONT_BOLDSTYLE,
                        textMonthFontFamily: fontUtils.FONT_FAMILY,
                        textDayHeaderFontFamily: fontUtils.FONT_FAMILY,
                        textMonthFontWeight: 'bold',
                        textMonthFontSize: 12,
                        textDayHeaderFontSize: 9,
                        'stylesheet.calendar.main': {
                            monthView: {
                                padding:2,
                              },
                        },
                        'stylesheet.calendar.header': {
                            header: {
                                flexDirection: 'row',
                            },
                            week: {
                                marginTop: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-around'

                            },
                            monthText: {
                                color: 'black',
                                fontWeight: 'bold',
                                marginLeft: 3
                            },
                            dayHeader: {
                                width: 14,
                                margin: 2,
                                textAlign: 'center',
                                fontSize: 5,
                                fontFamily: fontUtils.FONT_FAMILY
                            },
                        },
                        'stylesheet.day.single': {
                            text: {
                                //marginTop: Platform.OS === 'android' ? 4 : 2,
                                //marginBottom:2,
                                margin: 2,
                                fontSize: 8
                            },
                            base: {
                                width: 14,
                                height: 14,
                                alignItems: 'center',
                            }
                        }
                    }}

                />
            </TouchableOpacity>
        )
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
        //fontFamily:fontUtils.FONT_FAMILY,
        fontSize: 18
    },
    eventTypeStyle: {
        color: 'lightgrey',
        //fontFamily:fontUtils.FONT_FAMILY,
        fontSize: 12
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
