import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import AddPhysician from './AddPhysician';
import * as colorUtils from '../components/utils/colorUtils'
import * as fontUtils  from '../components/utils/fontUtils'


export default class AddPhysicianLane extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/AddLane/lane_name.png')}
                    />
                    <TextInput
                        placeholder='Lane Name'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>
                <View style={styles.laneView}>
                    <Image style={styles.sideImage} />
                    {/* <Text style={{ color: 'grey', marginLeft: 15, fontFamily:fontUtils.FONT_FAMILY, marginRight: 15}}>
                        Names must be lowercases, without spaces or periods, and shorter than 22 characters.
                    </Text> */}
                    <View style={{ marginLeft: 12,marginRight:14,marginTop:5}}><Text style={{fontFamily:fontUtils.FONT_FAMILY,fontSize:13, color: '#888'}}>Names must be lowercases , without spaces or periods, and shorter than 22 characters.</Text></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/common/search_icon.png')}
                    />
                    <TextInput
                        placeholder='Physician Name'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/AddLane/add_memeber.png')}
                    />
                    <TextInput
                        placeholder='Add Members'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../components/Assets/common/add_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'lightgray', alignSelf: 'flex-end' }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    laneView: {
        padding: 10,
        flexDirection: 'row',
    },
    sideImage: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginLeft: 15
    },
    rightIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    TextInputStyleClass: {
        textAlign: 'left',
        height: 50,
        width: '75%',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: colorUtils.fontFamily
    },
});