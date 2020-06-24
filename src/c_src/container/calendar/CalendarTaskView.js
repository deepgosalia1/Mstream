import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    SectionList
} from 'react-native';
import calendarListJson from '../../components/Assets/json/calendar.taskview.json';
import * as fontUtils from '../../components/utils/fontUtils'
import * as colorUtils from '../../components/utils/colorUtils'
import Moment from 'moment';


export default class CalendarTaskView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: {},
            calendarJsonArray: calendarListJson,
            currentDate: 'Tuesday, June 13, 2018'
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    onPress={params.taskViewEvent}>
                    <Image
                        source={require('../../components/Assets/common/calendar_main.png')} // calendar_icon.png
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
            headerTitle: <Text>June 2018</Text>

        }
    }

    _renderSeparator = () => {
        return (
            <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }} />
        )
    }

    renderSectionItem = (item) => {

        let calendarData = item;
        return (
            <View style={{ flex: 1, padding: 5, backgroundColor: 'white' }}>
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
                    <View style={{ width:1, height:'100%', backgroundColor:'red'}}></View>
                    <View style={{ flex:0.8, flexDirection:'column', paddingTop:10, paddingBottom:10, height:'100%', marginLeft:5}}>
                        <View style={{ flexDirection:'row' }}>
                            <Text style={{fontFamily:fontUtils.FONT_FAMILY, fontSize:16, color:colorUtils.THEME_COLOR}}>{'\u25CF '}</Text>
                            <Text style={{fontFamily:fontUtils.FONT_FAMILY, fontSize:16, color:'black', alignSelf:'center', fontWeight:'500' }}>{calendarData.title}</Text>
                        </View>
                        <Text style={{ fontFamily:fontUtils.FONT_FAMILY, fontSize:13, color:'gray', marginLeft: 9 }}>{calendarData.description}</Text>
                    </View>
                    <Image
                        style={{ height: 36, width: 36, padding: 5, alignSelf: 'center', position: 'absolute', end: 0 }}
                        source={calendarData.hasAttachments ? require('../../components/Assets/calendar/attachment_icon.png') : null} />

                </TouchableOpacity>
            </View>
        )

    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <SectionList
                    renderItem={({ item }) => {
                        return this.renderSectionItem(item)
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontFamily: fontUtils.FONT_FAMILY, width: '100%', textAlign: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', color: colorUtils.THEME_COLOR, alignSelf: 'center', backgroundColor: '#F5F5F5' }}>
                            {title}
                        </Text>
                    )}
                    sections={this.state.calendarJsonArray}
                    keyExtractor={(item, index) => item + index}
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
}