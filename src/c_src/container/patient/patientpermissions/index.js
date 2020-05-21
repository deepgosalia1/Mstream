import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import style from './style';
import Switches from './switch';

export default class PatientPermit extends Component {
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

    renderTouchableOpacity() {
        return (
            <View style={style.renderMainViewDatePickerStyle}>

                <View style={{borderBottomWidth:0.8,alginItems:'flex-start'}}>
                    <TouchableOpacity style={style.renderMainViewTouchableStyle}>
                        <Image style={style.renderMainViewTouchableImageStyle} source={require('../../../components/Assets/common/calendar2.png')} />
                        <Text style={style.renderMainViewTouchableTextStyle} >02/05/2018</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginTop: 10 }}>    -    </Text>
                </View>
                <View style={{borderBottomWidth:0.8,alginItems:'flex-start'}}>
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
                     <View style={{ padding: 10, flexDirection: 'row' }}>
                    <Image
                        style={{ marginTop: 5, width: 70, height: 70 ,marginLeft:5}}
                        source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column',paddingTop:8 }}>
                        <Text style={{ paddingTop:5,paddingLeft:5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal'}}>Lorenzo J. Smith</Text>
                        <View style={{ flexDirection: 'row',alignSelf:'flex-start',marginLeft:-2 }}>
                            <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal',marginTop:-7,marginLeft:-3 }} source={require('../../../components/Assets/common/ticket.png')} />
                            <Text style={{ paddingTop :2 ,marginLeft:-5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>MRN: #5566889233</Text>
                        </View>
                    </View>
                </View>


                    <View style={{ backgroundColor: '#fff', height: '100%' }}>
                        {/*first card*/}
                        <View style={[style.card2style,{paddingBottom:20}]}>
                            <View style={[style.renderMainViewImageViewStyle]}>
                                <Image style={style.renderMainViewImageStyle} source={require('../../../components/Assets/common/permission_family.png')} />
                            </View>
                            <View style={style.renderMainViewTextViewStyle}>
                                <Text style={style.renderMainViewTextStyle}>Communicate with family</Text>
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