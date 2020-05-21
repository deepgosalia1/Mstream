import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
//import { Font } from 'expo';

import patientAlertsListJson from '../components/Assets/json/criticalalerts.list.json'
import physicianAlertsJson from '../components/Assets/json/physician.criticalalerts.json'
import * as colorUtils from '../components/utils/colorUtils'


export default class CriticalAlerts extends React.Component {

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
            <View style={styles.container}>
                <View style={{ margin: 3, flex: 1 }}>
                    <FlatList
                        data={flatListJson}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) => (

                            <View style={styles.laneView}>

                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('acknowledgeAlert')}
                                >
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ marginTop: 2, color: "#127265", fontSize: 18, fontWeight: '500', alignSelf: 'flex-start', fontFamily: 'Montserrat-Medium', fontStyle: 'normal' }}>{item.name}</Text>
                                            <Image style={{ top: 2, width: 20, height: 20, position: 'absolute', right: 0 }} source={require('../components/Assets/CriticialAlerts/arrow.png')} />
                                        </View>
                                        <Text style={{ marginTop: 2, color: "##0E1716", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.message}</Text>
                                        <View style={{ flexDirection: 'row', width: 350, justifyContent: 'space-between', padding: 2 }}>
                                            <Text style={{ marginTop: 2, color: "#616161", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.specialization}</Text>
                                            <Text style={{ marginTop: 2, color: "#616161", fontSize: 12, fontFamily: 'Montserrat', fontStyle: 'normal' }}>{item.date}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
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
        flexDirection:'row',
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