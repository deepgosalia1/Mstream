import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker, Platform, FlatList, ScrollView, LayoutAnimation } from 'react-native'
import { THEME_COLOR } from '../utils/colorUtils'
import { FONT_FAMILY } from '../utils/fontUtils';
import FlatListDemo from '../../container/SideMenuOld';

export default class CustomPicker extends Component {
    constructor(props) {
        super(props)
        this.imageSource = this.props.imageSource
        this.state = { selectedValue: this.props.selectedValue, pickerClick: false }
    }

    componentWillMount() {
        LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <View style={styles.renderViewStyle}>
                {Platform.OS == 'android' ? <View style={styles.pickerContainer}>
                    <ScrollView style={{ height: 200 }}>
                        <FlatList
                            data={this.props.pickerData}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => {
                                        this.props.setValue(item.text)
                                        this.props.togglePicker()
                                    }}><Text style={styles.pickerDataStyle}>{item.text}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View> :
                    <View style={styles.pickerContainer}>
                        <View style={{ flexDirection: 'row', width: '100%', zIndex: 2, alignItems: 'center' }}>
                            <TouchableOpacity
                                title='Select'
                                style={{ flex: 1, justifyContent: 'center', margin: 10, alignItems: 'flex-start' }}
                                onPress={() => {
                                    this.props.setValue(this.state.selectedValue)
                                    console.log(this.state.selectedValue)
                                    this.props.togglePicker()
                                }}
                            ><Text style={{ fontSize: 25, color: THEME_COLOR }}>Select</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title='Select'
                                style={{ flex: 1, justifyContent: 'center', margin: 10, alignItems: 'flex-end' }}
                                onPress={() => { this.props.togglePicker() }}
                            ><Text style={{ fontSize: 25, color: THEME_COLOR }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <Picker
                            selectedValue={this.state.selectedValue}
                            //style={styles.renderPickerStyle}
                            style={styles.pickerStyle}
                            //itemStyle={{ height: 150, fontSize: 25 }}
                            onValueChange={(itemValue) => this.setState({ selectedValue: itemValue })}>
                            {this.props.pickerData.map((data) => {
                                return (
                                    <Picker.Item label={data.text} value={data.value} />
                                )
                            })}
                        </Picker>
                    </View>}
            </View >
        )
    }
}

const styles = {
    renderViewStyle: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100%',
        justifyContent: 'flex-end'
    },
    pickerContainer: {
        backgroundColor: '#fff',
    },
    pickerStyle: {
        width: '100%',
        marginTop: -20
    },
    pickerDataStyle: {
        fontSize: 22,
        color: '#000',
        margin: 10
    }
}