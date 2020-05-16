import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils';
import { FONT_FAMILY } from '../../../components/utils/fontUtils'
import { Dropdown } from 'react-native-material-dropdown'; 
import { Container, Header, Content, Icon } from 'native-base';
import { EventRegister } from 'react-native-event-listeners'

var members = require('./members.json');

class PatientAndFamilyLanes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMember: '', focussed: false, searchdatastate: members, loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
        }
    }
    BackButtonClicked = () => {
        //Alert.alert('center clicked')
        this.props.navigation.goBack()
        let customEventText = this.state.loggedInUser == 'patient' ? '' : 'paitent';
        EventRegister.emit('sideMenuClickedEvent', customEventText);
        this.props.navigation.navigate('DrawerOpen')
    }

    componentDidMount() {
        this.props.navigation.setParams(
            { BackButtonClicked: this.BackButtonClicked.bind(this) }
        )
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
                onPress={() => {
                    params.BackButtonClicked()
                }} />
        }
    }

    render() {

        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.renderViewStyle}>
                    <Image
                        style={style.renderViewImageStyle}
                        source={require('../../../components/Assets/common/lane_name.png')}
                    />
                    <View style={{ flexDirection: 'row', borderBottomColor: '#888', borderBottomWidth: 0.5, flex: 1, height: 45 }}>
                        <TextInput
                            style={style.renderViewTextInputStyle}
                            underlineColorAndroid='transparent'
                            placeholder={'Lane Name'}
                            placeholderTextColor='#888'
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 60, marginTop: 15 }}>
                    <Text
                        style={{ fontFamily: FONT_FAMILY, fontSize: 12, color: '#888' }}>Names must be lowercases , without spaces or periods, and shorter than 22 characters.
                    </Text>
                </View>
                <View style={style.renderViewStyle}>
                    <Image
                        style={style.renderViewImageStyle}
                        source={require('../../../components/Assets/common/search_icon.png')}
                    />
                    <View style={{ flexDirection: 'row', borderBottomColor: '#888', flex: 1, height: 45 }}>
                        <Dropdown
                            //defaultValue={this.state.selectedMember}
                            //style={{ flexDirection: 'row', width: '80%' }}
                            //onSelect={(index) => this.setState({ selectedMember: this.state.searchdatastate[index].name })}
                            containerStyle={{ color: '#000', flex: 8, marginTop: -19, fontSize: 22, borderBottomColor: '#888', marginTop: -27, borderBottomWidth: Platform.OS == 'android' ? 0.5 : 0 }}
                            label='Add Patient'
                            data={this.state.searchdatastate}
                            fontSize={22}
                            selectedItemColor='#888' />
                        {/* <TextInput
                            style={style.renderViewTextInputStyle}
                            underlineColorAndroid='transparent'
                            placeholder={'Patient Name'}
                            placeholderTextColor='#888'
                        /> */}
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/add_memeber.png')}
                        />
                        <View style={{ flexDirection: 'row', flex: 1, height: 45 }}>
                            <Dropdown
                                //defaultValue={this.state.selectedMember}
                                //style={{ flexDirection: 'row', width: '80%' }}
                                //onSelect={(index) => this.setState({ selectedMember: this.state.searchdatastate[index].name })}
                                containerStyle={{ color: '#000', flex: 8, marginTop: -19, fontSize: 22, borderBottomColor: '#888', marginTop: Platform.OS == 'android' ? -26 : -27 }}
                                label='Add Member'
                                data={this.state.searchdatastate}
                                fontSize={22}
                                selectedItemColor='#888'
                            />
                            {/* <TextInput
                                style={[style.renderViewTextInputStyle, { color: '#000' }]}
                                underlineColorAndroid='transparent'
                                placeholder={'Add Member'}
                                placeholderTextColor='#888'
                            /> */}

                            <View style={{ borderBottomWidth: Platform.OS == 'ios' ? 0.5 : 0.7, borderBottomColor: '#AAA' }}>
                                <TouchableOpacity style={{ flex: 1 }}><Image source={require('../../../components/Assets/common/add_icon.png')} style={{ height: 36, width: 36 }} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default PatientAndFamilyLanes;