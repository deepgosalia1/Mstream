import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

import SelectionView from '../bootstrap/Picker/SelectionView';

import * as colorUtils from '../components/utils/colorUtils'
import * as fontUtils from '../components/utils/fontUtils'

var optionTypes =
    [
        {
            "value": "Curren Location",
            "text": "Curren Location"
        },
        {
            "value": "LossAngels",
            "text": "LossAngels"
        }, {
            "value": "Irvin CA",
            "text": "Irvin CA"
        },
        {
            "value": "NewYork CA",
            "text": "NewYork CA"
        },
        {
            "value": "Boston",
            "text": "Boston"
        }
    ]

export default class AdvancedPhysicianSearch extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View>
                {
                    <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onSearchClicked}>
                        <Text style={{ color: 'white', fontWeight: '300', fontSize: 16 }}>Search</Text>
                    </TouchableOpacity>
                }
            </View>
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onSearchClicked: this.onSearchClicked.bind(this),
            updateLocation: this.locationUpdatValue.bind(this),
        });
    }

    onSearchClicked() {

    }
    locationUpdatValue(){
        this.setState({

        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/searchphysician/doctor_name_icon.png')}
                    />
                    <TextInput
                        placeholder='Doctors Name'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                </View>

                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/searchphysician/stethoscope_icon.png')}
                    />
                    <TextInput
                        placeholder='Speciality'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/Dashboard/dropdown.png')}
                    />
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/searchphysician/radius_icon.png')}
                    />
                    <TextInput
                        placeholder='Radius'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />

                </View>

                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/searchphysician/location_icon.png')}
                    />
                    {/* <TextInput
                        placeholder='Location'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} /> */}

                        <SelectionView
                    lang="en-US"
                    placeholder='Location'
                    minuteInterval={10}
                    showIcon={true}
                    showInputIcon={false}
                    showUnderLine={false}
                    iconSource={require('../components/Assets/General/dropdownWhite.png')}
                    scrollPickerEvent={(evt, height, action) => {

                    }}
                    onConfirm={(option) => {
                        
                    }}
                    onSelect={(option) => {

                    }}

                    onClear={() => {

                    }}
                    customStyles={{
                        placeholderText: {
                            marginLeft: 1,
                            width: '70%',
                            color: 'white',
                            text:'Location',
                            bottom: 6,
                            fontWeight: 'bold',
                            fontSize: fontUtils.FONT_SIZE_TITLE,
                            fontFamily: fontUtils.FONT_FAMILY,
                            fontStyle: fontUtils.FONT_STYLE
                        },
                        dateIcon: {
                            width: 15,
                            height: 15,
                            marginRight: 40,
                            marginBottom: 5,
                        },
                        // ... You can check the source to find the other keys.
                    }}
                    options={optionTypes}
                >
                </SelectionView>
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>

            </View>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    TextInputStyleClass: {
        textAlign: 'left',
        height: 50,
        width: '75%',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },
})