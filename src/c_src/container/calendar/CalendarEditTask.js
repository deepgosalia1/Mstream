import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Switch
} from 'react-native'
import * as fontUtils from '../../components/utils/fontUtils';
import * as colorUtils from '../../components/utils/colorUtils';
import CustomScrollView from '../../components/Custom components/CustomSrollview';

export default class CalendarEditTask extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: 'white', fontSize: 14 }}>UPDATE</Text>
                </TouchableOpacity>
            </View>
        }
    }

    constructor(props) {
        super(props)
    }

    _onRef = (property, view) => {
        this[property] = view
    }

    renderTextInputDivider = () => {
        return (
            <View
                style={{ width: '100%', marginLeft: 15, marginRight: 5, marginBottom: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
            </View>
        )
    }

    render() {
        return (
            <CustomScrollView
                style={{ backgroundColor: '#fff' }}
                ref={scroll => this._onRef('_scroll', scroll)}>
                <View style={styles.container}>
                    {this.renderSingleRow('Task', 'Appointment with Dr. Elisa', require('../../components/Assets/calendar/task_icon.png'), false, 1)}
                    {this.renderSingleRow('Add Notes', 'Regular checkup in Williams Hospital', require('../../components/Assets/calendar/note_icon.png'), true, 2)}
                    {this.renderSingleRow('Patients', 'Roberts D Sparks', require('../../components/Assets/common/search_icon.png'), false, 1)}
                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 24, color: colorUtils.THEME_COLOR, padding: 10, fontWeight: '600', marginLeft: 15 }}>Add Files</Text>
                    <View style={{ marginLeft: 15, flexDirection: 'row', padding: 10,borderWith:1,borderColor:'lightgray' }}>
                        <Image
                            style={{ width: 72, height: 72, alignSelf: 'flex-start'}}
                            source={require('../../components/Assets/common/add_icon.png')}>
                        </Image>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 24, color: colorUtils.THEME_COLOR, padding: 10, fontWeight: '400', marginLeft: 15 }}>Reminder</Text>
                        <View style={{ position: 'absolute', end: 0, flexDirection: 'row' }}>
                            <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 24, color: colorUtils.THEME_COLOR, padding: 10, fontWeight: '400', marginLeft: 15 }}>All-Day</Text>
                            <Switch style={{ marginRight: 15,alignSelf:'center' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        {this.renderSingleRow('Start', '10/02/2018', require('../../components/Assets/calendar/calendar_icon.png'), false, 1)}
                        {this.renderSingleRow('End', '10/02/2018', require('../../components/Assets/calendar/calendar_icon.png'), false, 1)}
                    </View>
                    {this.renderSingleRow('Reminder', '09:45 PM', require('../../components/Assets/calendar/reminder_icon.png'), false, 1, true)}
                </View>
            </CustomScrollView>
        )
    }

    renderSingleRow = (header, value, source, multiline, numberOfLines, showArrow) => {
        return (
            <View style={styles.rowStyles}>
                <Image
                    style={styles.rightImageStyle}
                    source={source}
                />
                <View style={styles.textViewStyles}>
                    <Text style={styles.textStyles}>{header}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            multiline={multiline}
                            numberOfLines={numberOfLines}
                            value={value}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass} />
                        {showArrow && <Image
                            style={{ position: 'absolute', end: 0, width: 16, height: 16, marginRight: 10, alignSelf: 'center' }}
                            source={require('../../components/Assets/calendar/arrow_down_icon.png')} />}
                    </View>
                    {this.renderTextInputDivider()}
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    TextInputStyleClass: {
        textAlign: 'left',
        width: '100%',
        fontSize: 20,
        marginRight: 10,
        marginBottom:7,
        color: colorUtils.THEME_COLOR,
        fontFamily: fontUtils.FONT_FAMILY
    },
    rowStyles: {
        flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20, flex: 1
    },
    rightImageStyle: {
        width: 36, height: 36, alignSelf: 'flex-start'
    },
    textStyles: {
        fontWeight:'600', fontFamily: fontUtils.FONT_FAMILY, fontSize:18,color:'#737373'
    },
    textViewStyles: {
        flexDirection: 'column', flex: 1, marginLeft: 10
    }
})