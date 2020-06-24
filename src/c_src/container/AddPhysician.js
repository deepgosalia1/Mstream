import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Map from '../container/myfamily/searchfamilymembers/Map'
import Geocoder from 'react-native-geocoder';
import Style from '../container/myfamily/searchfamilymembers/style';
import physicianSearchjson from '../components/Assets/json/physicianSearch.list.json'
import SearchBar from '../container/myfamily/searchfamilymembers/SearchBar';


export default class AddPhysician extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchdatastate: physicianSearchjson, showMap: false }
    }
    componentWillMount() {
         this.getGeocode().done
     }

     async getGeocode() {
        try {
            for (i = 0; i < physicianSearchjson.length; i++) {

                let physicianData = physicianSearchjson[i]
                await Geocoder.geocodeAddress(physicianData.address).then(res => {
                    physicianData.lat = res[0].position.lat
                    physicianData.lng = res[0].position.lng
                })
            }

        } catch (err) {
            console.log(err)
        }
    }

    search = (text) => {
        var searchdata = []
        physicianSearchjson.map((physician) => {
            if (physician.name.toLowerCase().indexOf(text.text.toLowerCase()) != -1) {
                searchdata.push(physician);
            }
        })
        this.setState({ searchdatastate: searchdata })
    }

    toggleshowMap = () => {
        this.setState({
            showMap: !this.state.showMap
        });
    }
    render() {
        return (
            <View style={styles.container}>

                <SearchBar
                    data={physicianSearchjson}
                    search={this.search}
                    toggleMap={this.toggleshowMap}
                    showMap={this.state.showMap}
                    style={{backgroundColor:'#fff'}}
                />
                {this.state.showMap && <Map
                    data={this.state.searchdatastate}
                />}
                {this.state.showMap && <TouchableOpacity style={Style.draggerStyle} onPress={() => { this.toggleshowMap() }}>
                    <Image
                        source={require('../components/Assets/common/drag_icon.png')}
                        style={Style.draggerImageStyle}
                    />
                </TouchableOpacity>
                }
            
                <FlatList
                    data={physicianSearchjson}
                    renderItem={({ item }) => (

                        <View style={styles.laneView}>
                            <View style={{ flexDirection: 'column' }}>
                                <Image style={styles.sideImage} source={require('../components/Assets/CriticialAlerts/critical_profile.png')} />
                                <Text style={styles.distanceStyle}>{item.distance}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                                <Text style={styles.physicianNameStyle}>{item.name}</Text>
                                <Text style={styles.specializationStyle}>{item.specialization}</Text>
                                <Text style={styles.addressStyle}>{item.address}</Text>
                                <Text style={styles.pincodeStyle}>{item.pincode}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />

                <TouchableOpacity
          style={{ position: 'absolute', end: 0, bottom: 0, }}
          onPress={() => {this.props.navigation.navigate('addNewPhysician')}}>
          
          <Image
            style={{ width: 56, height: 56, margin: 20 }}
            source={require('../components/Assets/common/add_icon.png')}
          />
        </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EBEAEB',
    },
    laneView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 5,
        padding: 10
    },
    physicianNameStyle: {
        marginTop: 2,
        color: "#127265",
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal'
    },
    specializationStyle: { marginTop: 5, color: "#0d2220", fontSize: 18, fontFamily: 'Montserrat', fontStyle: 'normal' },
    addressStyle: { marginTop: 5, color: "#757575", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' },
    pincodeStyle: { marginTop: 2, color: "#757575", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' },
    sideImage: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'center'
    },
    distanceStyle: {
        backgroundColor: 'lightgrey',
        color: 'black',
        alignSelf: 'center',
        fontSize: 12,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    TextInputStyleClass: {
        textAlign: 'left',
        height: 50,
        width: '60%',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },

});