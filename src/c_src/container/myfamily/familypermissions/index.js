import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import style from './style';
import Switches from './switch';

export default class Permit extends Component {
    state = {
        switch1Value: false,
        switch2Value: false,
        switch3value: false
    };
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + value)
    }
    toggleSwitch2 = (value) => {
        this.setState({ switch2Value: value })
        console.log('Switch 2 is: ' + value)
    }
    toggleSwitch3 = (value) => {
        this.setState({ switch3Value: value })
        console.log('Switch 3 is: ' + value)
    }
    toggleSwitch4 = (value) => {
        this.setState({ switch4Value: value })
        console.log('Switch 4 is: ' + value)
    }

    renderPermissionsHeader() {
        return (
            <View style={style.renderViewHeader}>
                <Text style={style.renderHeaderText}>Permissions</Text>
            </View>
        );
    }
    renderTouchableOpacity() {
        return (
            <View style={style.renderMainViewDatePickerStyle}>
                {/* <Text>Calaender to put here</Text> */}

                <View>
                    <TouchableOpacity style={style.renderMainViewTouchableStyle}>
                        <Image style={style.renderMainViewTouchableImageStyle} source={require('../../../components/Assets/common/calendar2.png')} />
                        <Text style={style.renderMainViewTouchableTextStyle} >02/05/2018</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginTop: 10 }}> -   </Text>
                </View>
                <View>
                    <TouchableOpacity style={style.renderMainViewTouchableStyle}>
                        <Image style={style.renderMainViewTouchableImageStyle} source={require('../../../components/Assets/common/calendar2.png')} />
                        <Text style={style.renderMainViewTouchableTextStyle} >02/05/2018</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                {/* <View> */}
                <View style={style.renderView}>
                    <View style={{ marginTop: -10 }}>
                        <View style={{ backgroundColor: '#fff', padding: 15, flexDirection: 'row' }}>
                            <Image
                                style={{ marginTop: 20, width: 65, height: 65 }}
                                source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                            <View style={{ paddingLeft: 15, flexDirection: 'column' }}>
                                <Text style={{ padding: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: "bold" }}>Lorenzo J. Smith</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ padding: 2, width: 15, height: 15, alignSelf: 'center', fontFamily: 'Montserrat', fontStyle: 'normal' }} source={require('../../../components/Assets/profile/stethas_icon.png')} />
                                    <Text style={{ padding: 5, color: "black", fontSize: 18 }}>Physician</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ padding: 2, width: 15, height: 15, alignSelf: 'center', fontFamily: 'Montserrat', fontStyle: 'normal' }} source={require('../../../components/Assets/profile/location.png')} />
                                    <Text style={{ padding: 5, color: "#5B5B5B", fontSize: 18 }}>Irvin, CA</Text>
                                </View>
                            </View>
                            <Image
                                style={{ marginRight: 25, width: 42, height: 42, alignSelf: 'center', position: 'absolute', end: 0 }}
                                source={require('../../../components/Assets/General/lane_icon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'lightgrey' }}>

                            <View style={{ flex: 1, flexDirection: 'row'}}>
                                <Image
                                    style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                                    source={require('../../../components/Assets/profile/home_icon.png')} />
                                <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Home</Text>
                                    <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666 66666</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 0.01,
                                    height: '100%',
                                    alignSelf: 'center',
                                    backgroundColor: "white",
                                }}
                            />

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                                    source={require('../../../components/Assets/profile/work_icon.png')} />
                                <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Work</Text>
                                    <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666 66666</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/*permissions header*/}
                    {this.renderPermissionsHeader()}
                    <View style={{ backgroundColor: '#fff', height: '100%' }}>
                        {/*first card*/}
                        <View style={style.card2style}>
                            <View style={style.renderMainViewImageViewStyle}>
                                <Image style={style.renderMainViewImageStyle} source={require('../../../components/Assets/common/permission_family.png')} />
                            </View>
                            <View style={style.renderMainViewTextViewStyle}>
                                <Text style={style.renderMainViewTextStyle}>Communicate with Physician</Text>
                                {this.renderTouchableOpacity()}
                            </View>
                            <View style={style.renderMainViewSwtichesViewStyle}>
                                <Switches
                                    toggleSwitch={this.toggleSwitch1}
                                    switchValue={this.state.switch1Value} />
                            </View>
                        </View>


                        {/*second card*/}
                        <View style={style.card2style}>
                            <View style={style.renderMainViewImageViewStyle}>
                                <Image style={style.renderMainViewImageStyle} source={require('../../../components/Assets/common/clinical_view.png')} />
                            </View>
                            <View style={style.renderMainViewTextViewStyle}>
                                <Text style={style.renderMainViewTextStyle}>View Clinical Data</Text>
                                <View style={style.card2calender}>
                                    {/* calender 2 */}
                                    <Text style={style.card2calendertext}>Requested</Text>
                                </View>
                            </View>
                            <View style={style.renderMainViewSwtichesViewStyle}>
                                <Switches
                                    toggleSwitch={this.toggleSwitch2}
                                    switchValue={this.state.switch2Value} />
                            </View>
                        </View>



                        {/*third card*/}

                        <View style={style.card2style}>
                            <View style={style.renderMainViewImageViewStyle}>
                                <Image style={style.renderMainViewImageStyle} source={require('../../../components/Assets/common/calendar_main.png')} />
                            </View>
                            <View style={style.renderMainViewTextViewStyle}>
                                <Text style={style.renderMainViewTextStyle}>Update Calendar</Text>
                                {this.renderTouchableOpacity()}
                            </View>
                            <View style={style.renderMainViewSwtichesViewStyle}>
                                <Switches
                                    toggleSwitch={this.toggleSwitch3}
                                    switchValue={this.state.switch3Value} />
                            </View>
                        </View>

                        {/*4th card*/}
                        <View style={style.card4View}>
                            <View style={style.renderMainViewImageViewStyle4}>
                                <Image style={style.renderMainViewImageStyle} source={require('../../../components/Assets/common/clinical_view.png')} />
                            </View>
                            <View style={style.renderMainViewTextViewStyle}>
                                <Text style={style.renderMainViewTextStyle}>View Health Data</Text>
                            </View>
                            <View style={style.renderMainViewSwtichesViewStyle}>
                                <Switches
                                    toggleSwitch={this.toggleSwitch4}
                                    switchValue={this.state.switch4Value} />
                            </View>
                        </View>

                    </View>

                </View>
                {/* </View> */}
            </ScrollView>

        );
    }
}