import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import Style from './style';

export default class Map1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.data[0].lat,
            longitude: this.props.data[0].lng,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
            latlng: []
        }
    }

    renderMarkers(member) {
        return (

            <Marker
                coordinate={{
                    latitude: member.lat,
                    longitude: member.lng
                }}
                image={require('../assets/map_pinter.png')}>
                <Callout style={Style.calloutStyle}>
                    <Text style={Style.markerTextStyle}>{member.name}</Text>
                </Callout>
            </Marker>
        );
    }

    render() {
        let latlng = this.state.latlng;
        return (
            <View style={Style.mapContainer}>
                <MapView provider={PROVIDER_GOOGLE} style={Style.mapStyle} initialRegion={this.state}>
                    {this.props.data.map((member) => {
                        passdata = {
                            lat: member.lat,
                            lng: member.lng,
                            name: member.name
                        }
                        return (
                            this.renderMarkers(passdata)
                        )
                    })}
                </MapView>
            </View>
        );
    }
}

const styles = {
    
};