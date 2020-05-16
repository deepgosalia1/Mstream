import React from 'react';
import SearchBar from './SearchBar';
import Map from './Map';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import PatientData from './PatientData';
import Style from './style';
import Geocoder from 'react-native-geocoder';

var patients = require('./patients.json');

export default class SearchPatients extends React.Component {

    constructor(props) {
        super(props)
        this.state = { searchdatastate: patients, showMap: false }
        showPhysicianSearch: this.props.navigation.state.params ? this.props.navigation.state.params.showPhysicianSearch : ''
    }
    componentWillMount() {
        /* patients.map((member) => {
             Geocoder.geocodeAddress(member.address).then(res => {
                 member.lat=res[0].position.lat
                 member.lng=res[0].position.lng
             })
         })*/
        this.getGeocode().done
    }
    async getGeocode() {
        try {
            for (i = 0; i < patients.length; i++) {

                let patientdata = patients[i]
                await Geocoder.geocodeAddress(patientdata.address).then(res => {
                    patientdata.lat = res[0].position.lat
                    patientdata.lng = res[0].position.lng
                })
            }

        } catch (err) {
            console.log(err)
        }
    }

    search = (text) => {
        var searchdata = []
        patients.map((member) => {
            if (member.name.toLowerCase().indexOf(text.text.toLowerCase()) != -1) {
                searchdata.push(member);
            }
        })
        this.setState({ searchdatastate: searchdata })
    }

    toggleshowMap = () => {
        this.setState({
            showMap: !this.state.showMap
        });
    }

    changeName = (name, location) => {
        this.props.navigation.state.params.returnData(name, location)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={Style.containerStyle}>
                <SearchBar
                    data={patients}
                    search={this.search}
                    toggleMap={this.toggleshowMap}
                    showMap={this.state.showMap}

                />
                {this.state.showMap && <Map
                    data={this.state.searchdatastate}
                />}
                {this.state.showMap && <TouchableOpacity style={Style.draggerStyle} onPress={() => { this.toggleshowMap() }}>
                    <Image
                        source={require('../../../components/Assets/common/drag_icon.png')}
                        style={Style.draggerImageStyle}
                    />
                </TouchableOpacity>
                }
                <PatientData
                    data={this.state.searchdatastate}
                    changeName={this.changeName}
                />
                <TouchableOpacity style={Style.plusIconContainerStyle}>
                    <Image
                        source={require('../../../components/Assets/common/add_icon.png')}
                        style={Style.plusIconStyle}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
