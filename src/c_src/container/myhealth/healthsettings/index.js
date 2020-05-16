import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Switch
} from 'react-native';
import Style from './style';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';

var settingsJSON = require('./healthsettings.list.json')
export default class LegalDocuments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            settingsData: settingsJSON,
        }
    }
    
    render() {

        return (
            <View style={Style.containerStyle}>
                <FlatList
                    renderItem={({ item }) => {
                        return <View style={Style.itemStyle}>

                            <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'lightgrey' }}>
                                <Text style={{ fontSize: 18, color: '#282828', fontWeight:'500', fontFamily:FONT_FAMILY,marginLeft:18}}>{item.title}</Text>
                                <Switch style={{ position: 'absolute', end: 0, marginRight:10,alignSelf:'center'}}></Switch>
                            </View>
                        </View>
                    }}
                    backgroundColor={'#fff'}
                    data={this.state.settingsData}
                    keyExtractor={(item, index) => item + index}
                />

            </View>
        )
    }
}