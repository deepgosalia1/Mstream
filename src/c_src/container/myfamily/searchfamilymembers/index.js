import React from 'react';
import SearchBar from './SearchBar';
import Map from './Map';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import MemberData from './MemberData';
import Style from './style';
import Geocoder from 'react-native-geocoder';

var familymembers = require('./familymembers.json');

export default class SearchFamilyMember extends React.Component {

    constructor(props) {
        super(props)
        this.state = { searchdatastate: familymembers, showMap: false }
    }

    componentWillMount() {
       /* familymembers.map((member) => {
            Geocoder.geocodeAddress(member.address).then(res => {
                member.lat=res[0].position.lat
                member.lng=res[0].position.lng
            })
        })*/
        this.getGeocode().done
    }

    async getGeocode() {
        try {
            for (i = 0; i < familymembers.length; i++) {

                let memberData = familymembers[i]
                await Geocoder.geocodeAddress(memberData.address).then(res => {
                    memberData.lat = res[0].position.lat
                    memberData.lng = res[0].position.lng
                })
            }

        } catch (err) {
            console.log(err)
        }
    }

    search = (text) => {
        var searchdata = []
        familymembers.map((member) => {
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
                    data={familymembers}
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
                <MemberData
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
