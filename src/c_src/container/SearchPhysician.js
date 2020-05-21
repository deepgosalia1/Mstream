import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import * as colorUtils from '../components/utils/colorUtils'
import * as fontUtils from '../components/utils/fontUtils'


export default class SearchPhysician extends React.Component {

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
                        <Text style={{ color: 'white', fontWeight: '300', fontSize: 18 }}>Search</Text>
                    </TouchableOpacity>
                }
            </View>
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onSearchClicked: this.onSearchClicked.bind(this),
        });
    }
    //searchPatients
    onSearchClicked() {
        const { navigate } = this.props.navigation;
        let showPhysicianSearch = true
        navigate('addPhysician',{showPhysicianSearch})
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/common/search_icon.png')}
                    />
                    <TextInput
                        placeholder='Doctor`s Name'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                    <TouchableOpacity
                        onPress={() => { navigate('advancedPhysicianSearch') }}
                    >
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../components/Assets/searchphysician/filter_icon.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Image
                        style={{ width: 36, height: 36 }}
                        source={require('../components/Assets/searchphysician/location_icon.png')}
                    />
                    <TextInput
                        placeholder='Location'
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass} />
                </View>
                <View
                    style={{ width: '80%', marginRight: 15, height: 1, backgroundColor: 'grey', alignSelf: 'flex-end' }}>
                </View>
                <Image
                    style={{ width: 56, height: 56, position: 'absolute', end: 0, bottom: 0, margin: 20 }}
                    source={require('../components/Assets/common/add_icon.png')}
                />

            
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
        fontFamily:fontUtils.FONT_FAMILY
    },
})