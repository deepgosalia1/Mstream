import React from 'react';
import SearchBars from './SearchBars';
import { View, Image, TouchableOpacity, Alert, Text, Platform } from 'react-native';
import Style from './style';
import { Container, Header, Content, Icon } from 'native-base';
import { EventRegister } from 'react-native-event-listeners'

export default class SearchPtnts extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: '', location: 'Current Location', loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : '' }
    }
    returnData(name, location) {
        this.setState({ name: name, location: location });
    }

    BackButtonClicked = () => {
        //Alert.alert('center clicked')
        this.props.navigation.goBack()
        let customEventText = this.state.loggedInUser == 'patient' ? '' : 'paitent';
        EventRegister.emit('sideMenuClickedEvent', customEventText);
        this.props.navigation.navigate('DrawerOpen')
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
                onPress={() => {
                    params.BackButtonClicked()
                }} />,
            headerRight:<TouchableOpacity style={{marginRight:15}} onPress={() => {
                navigation.navigate('searchPatients', { returnData: params.returnData })
            }}><Text style={{ color: '#3a3a3a', fontWeight: 'bold', fontSize: 15, alignSelf: 'flex-start' }}>Search</Text></TouchableOpacity>
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            returnData: this.returnData.bind(this),
            BackButtonClicked: this.BackButtonClicked.bind(this)
        })
    }

    render() {
        return (
            <View style={Style.containerStyle}>
                <SearchBars
                    name={this.state.name}
                    location={this.state.location}
                />
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('addPatient') }}
                    style={Style.plusIconContainerStyle} >
                    <Image
                        source={require('../../../components/Assets/common/add_icon.png')}
                        style={Style.plusIconStyle}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
