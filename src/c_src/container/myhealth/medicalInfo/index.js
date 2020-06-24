import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import myHealthSummaryJSON from './myhealthsummary.json'
import * as colorUtils from '../../../components/utils/colorUtils';
import * as fontUtils from '../../../components/utils/fontUtils';
import Style from './style'
export default class MedicalInfo extends Component {

    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View>
                <TouchableOpacity
                    onPress={params.onSettingsClick}
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Report</Text>
                </TouchableOpacity>
            </View>
        }
    }
    //
    itemclicked = (item) => {
        switch (parseInt(item.id)) {
            case 0:
                this.props.navigation.navigate('medicalInfoCommon')
                break;
            case 1:
                this.props.navigation.navigate('surgeryProcedures')
                break;
            case 2:
                this.props.navigation.navigate('alergies')
                break;
            case 3:
                this.props.navigation.navigate('familyHistory')
                break;
            case 4:
                this.props.navigation.navigate('hospitalAddmission')
                break;
                case 5:
                this.props.navigation.navigate('pharmacy')
                break;
                case 6:
                this.props.navigation.navigate('emergencyContact')
                break;
            default:
                break;
        }
    }
    
    render() {

        return (
            <View style={{ backgroundColor: '#d9d9d9', flex: 1 }}>
                <FlatList
                    data={myHealthSummaryJSON}
                    numColumns={3}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }

    _renderItem = (item) => {
        let healthSummaryAssets = [
            require('./medicalillnes.png'),
            require('./surgery.png'),
            require('./allergies.png'),
            require('./fhistory.png'),
            require('./hadmission.png'),
            require('./hadmission.png'),
            require('./emergency.png'),
        ]
        let data = item.item
        return (
            <View style={Style.itemStyle}>
                <TouchableOpacity
                    onPress={() => this.itemclicked(data)}>
                    <Image
                        style={Style.summaryImageStyle}
                        source={healthSummaryAssets[data.id]} />
                    <Text style={Style.summaryTextStyle}>{data.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}