import React from 'react';
import SearchBars from './SearchBars';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Style from './style';

export default class SearchMember extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: '', location: 'Current Location' }
    }
    returnData(name, location) {
        this.setState({ name: name, location: location });
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {
                navigation.navigate('searchFamilyMember', { returnData: params.returnData })
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Search</Text>
            </TouchableOpacity>
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            returnData: this.returnData.bind(this)
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
                    onPress={() => { this.props.navigation.navigate('addMember') }}
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
