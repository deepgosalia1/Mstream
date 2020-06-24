import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Switch, Platform
} from 'react-native'
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';
import CustomScrollView from '../../../components/Custom components/CustomSrollview';
import ImagePicker from 'react-native-image-picker';

var imagePickerOptions = {
    title: 'Add Image',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class NewTask extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { params = {} } = navigation.state;
    //     return {
    //         headerRight: <View style={{ flexDirection: 'row' }}>
    //             <TouchableOpacity
    //                 style={{ paddingLeft: 10, paddingRight: 10 }}>
    //                 <Text style={{ fontFamily: fontUtils.FONT_FAMILY, color: 'white', fontSize: 14 }}>SAVE</Text>
    //             </TouchableOpacity>
    //         </View>
    //     }
    // }
    constructor(props) {
        super(props)
        this.state = { imageSource: [], switchState: false }
    }

    _onRef = (property, view) => {
        this[property] = view
    }

    renderTextInputDivider = () => {
        return (
            <View
                style={styles.textInputDividerStyle}>
            </View>
        )
    }

    changeSwitchState = (val) => {
        this.setState({ switchState: val })
    }

    pickImage = () => {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            let source = { uri: response.uri };
            data = this.state.imageSource
            data.push(source)
            this.setState({
                imageSource: data
            });
        });
    }

    render() {
        return (
            <CustomScrollView
                style={{ backgroundColor: '#fff' }}
                ref={scroll => this._onRef('_scroll', scroll)}>
                <View style={styles.container}>

                    {this.renderSingleRow('Task', require('../../../components/Assets/calendar/task_icon.png'), false, 1)}

                    {this.renderSingleRow('Add Notes', require('../../../components/Assets/calendar/note_icon.png'), true, 12)}

                    {this.renderSingleRow('Patients', require('../../../components/Assets/common/search_icon.png'), false, 1)}

                    <Text style={styles.headingStyle}>Add Files</Text>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#888', marginBottom: 10, paddingBottom: 10 }}>
                        <TouchableOpacity
                            style={{ marginLeft: 15, flexDirection: 'row', padding: 10 }}
                            onPress={this.pickImage}>
                            <Image
                                style={{ width: 60, height: 60, alignSelf: 'flex-start' }}
                                source={require('../../../components/Assets/common/add_icon.png')}>
                            </Image>
                        </TouchableOpacity>
                        {this.state.imageSource.map((eachimage) => {
                            return (
                                <Image
                                    style={{ width: 60, height: 60, alignSelf: 'center', margin: 5 }}
                                    source={eachimage}>
                                </Image>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.headingStyle}>Reminder</Text>
                        <View style={{ position: 'absolute', end: 0, flexDirection: 'row' }}>
                            <Text style={[styles.headingStyle,{color:'#888'}]}>All-Day</Text>
                            <Switch style={{ marginRight: 15, alignSelf: 'center' }}
                                onValueChange={this.changeSwitchState}
                                value={this.state.switchState} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        
                        {this.renderSingleRow('Start', require('../../../components/Assets/calendar/calendar_icon.png'), false, 1)}
                        
                        {this.renderSingleRow('End', require('../../../components/Assets/calendar/calendar_icon.png'), false, 1)}
                    
                    </View>
                    
                    {this.renderSingleRow('Reminder', require('../../../components/Assets/calendar/reminder_icon.png'), false, 1, true)}
                
                </View>
            </CustomScrollView>
        )
    }

    renderSingleRow = (header, source, multiline, numberOfLines, showArrow) => {
        return (
            <View style={styles.rowStyles}>
                <Image
                    style={styles.rightImageStyle}
                    source={source}
                />
                <View style={styles.textViewStyles}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder={header}
                            placeholderTextColor='#888'
                            multiline={multiline}
                            numberOfLines={numberOfLines}
                            fontSize={12}
                            underlineColorAndroid='transparent'
                            style={[Platform.OS == 'android' ? styles.TextInputStyleClassAndroid : styles.TextInputStyleClass, multiline && { height: 80 }]} />
                        {showArrow && <Image
                            style={{ position: 'absolute', end: 0, width: 16, height: 16, marginRight: 10, alignSelf: 'center' }}
                            source={require('../../../components/Assets/calendar/arrow_down_icon.png')} />}
                    </View>
                    {this.renderTextInputDivider()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    textInputDividerStyle: {
        width: '100%',
        marginLeft: 15,
        marginRight: 5, marginBottom: 15,
        height: 0.5, backgroundColor: '#888',
        alignSelf: 'flex-end'
    },
    TextInputStyleClass: {
        textAlign: 'left',
        width: '100%',
        fontSize: 20,
        marginRight: 10,
        marginBottom: 10,
        color: colorUtils.THEME_COLOR,
        fontFamily: fontUtils.FONT_FAMILY
    },
    TextInputStyleClassAndroid: {
        textAlign: 'left',
        width: '100%',
        fontSize: 20,
        marginRight: 10,
        color: colorUtils.THEME_COLOR,
        fontFamily: fontUtils.FONT_FAMILY,
        textAlignVertical: 'top'
    },
    headingStyle: {
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 20,
        color: colorUtils.THEME_COLOR,
        padding: 10, marginLeft: 15,
        fontWeight: '500'
    },
    rowStyles: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: 5, paddingRight: 20,
        paddingTop: 10,
        flex: 1
    },
    rightImageStyle: {
        width: 36,
        height: 36,
        alignSelf: 'flex-start',
        marginTop: Platform.OS=='android' ? 10 : 0
    },
    textStyles: {
        fontWeight: 'bold',
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 20
    },
    textViewStyles: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    }
})