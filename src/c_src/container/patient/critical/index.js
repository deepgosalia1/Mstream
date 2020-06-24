import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';
//import { Font } from 'expo';

import patienAlertsListJson from '../../../components/Assets/json/criticalalerts.list.json'
import physicianAlertsJson from '../../../components/Assets/json/physician.criticalalerts.json'
import * as colorUtils from '../../../components/utils/colorUtils'


export default class Critical extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "lightgrey",
                }}
            />
        );
    }
    render() {

        let flatListJson = this.state.loggedInUser == 'patient' ? patientAlertsListJson : physicianAlertsJson;

        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{
                    backgroundColor: 'white', height: '16%'

                }}>
                    <View style={{ marginTop: 0 }}>
                        <View style={{ padding: 10, flexDirection: 'row', marginBottom:35,borderBottomWidth: 25, borderBottomColor: '#f0f0f0' }}>
                            <Image
                                style={{ marginTop: 5, width: 70, height: 70, marginLeft: 5 }}
                                source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                            <View style={{ paddingLeft: 15, flexDirection: 'column', paddingTop: 8 }}>
                                <Text style={{ paddingTop: 5, paddingLeft: 5, color: "#088D83", fontSize: 24, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Lorenzo J. Smith</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: -2 }}>
                                    <Image style={{ width: 45, height: 45, alignSelf: 'flex-start', fontStyle: 'normal', marginTop: -7, marginLeft: -3 }} source={require('../../../components/Assets/common/ticket.png')} />
                                    <Text style={{ paddingTop: 2, marginLeft: -5, color: "#5B5B5B", fontSize: 18, fontFamily: 'Montserrat', }}>MRN: #5566889233</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ margin: 3, flex: 1}}>
                        <FlatList
                            data={flatListJson}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => (

                                <View style={styles.laneView}>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('acknowledgeAlert')}
                                    >
                                        <View style={{ flexDirection: 'column', marginTop:5 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ marginTop: 0, color: "##0E1716", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.message}</Text>
                                                <Image style={{ top: 2, width: 15, height: 15, position: 'absolute', right: 0 }} source={require('../../../components/Assets/CriticialAlerts/arrow.png')} />
                                            </View>
                                            <Text></Text>
                                            {/* <Text style={{ marginTop: 0, color: "##0E1716", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.message}</Text> */}
                                            <View style={{ flexDirection: 'row', width: 350,justifyContent: 'space-between', padding: 2 }}>
                                                <Text style={{ marginTop: -5, color: "#757575", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.specialization}</Text>
                                                <Text style={{ marginTop: -5, color: "#757575", fontSize: 12, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1
    },
    laneView: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    sideImage: {
        width: 45,
        height: 45,
        marginLeft: 10,
        alignSelf: 'center'
    },
    infoImageStyle: {
        width: 20,
        height: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginRight: 70
    }
});