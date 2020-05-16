import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image,TouchableOpacity} from 'react-native'
//import Health from '../Health';
import medicationData  from './medication.list.json'
import * as colorUtils from '../../../components/utils/colorUtils';
import * as fontUtils  from '../../../components/utils/fontUtils';

export default class Medication extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View>
              <TouchableOpacity
                        onPress={params.onSettingsClick}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Image style={{width:35,height:35}} source={require('./rightcalendar.png')}/>
                    </TouchableOpacity>
            </View>
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#d9d9d9',marginBottom:10 }}>
                <FlatList
                    data={medicationData}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                                <View style={{ flex: 0.5, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                     <Image source={require('./capsules.png')} style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }} />
                                    <Text style={{ padding: 5, color: colorUtils.THEME_COLOR, fontFamily: fontUtils.FONT_FAMILY, fontSize: 22 }}>{item.name}
                                        <Text style={{ padding: 5, color: 'grey', fontFamily: fontUtils.FONT_FAMILY, fontSize: 16 }}>{'\n'}{item.type}
                                        </Text>
                                    </Text>
                                    <View style={{flex:1,backgroundColor:'white',marginTop:10,padding:5,marginBottom:15,alignContent:'flex-end',marginRight:15}}>
                                    
                                   <Text style={{flex:1,alignSelf: 'flex-end',padding:5,backgroundColor:'#e8e8e9', color: '#565656', fontWeight: 'bold' }}>{item.amount}</Text>
                                   
                                   </View>
                                </View>

                                <Text style={{ fontFamily: fontUtils.FONT_FAMILY, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, paddingRight: 10, fontSize: 16 }}>{item.time}
                                    <Text style={{ flex: 1, alignContent: 'flex-end', fontFamily: fontUtils.FONT_FAMILY, padding: 5, paddingLeft: 20, fontSize: 12 }}>{'  '}{item.duration}
                                    </Text>
                                </Text>

                                <View style={{ backgroundColor: '#edf1f0', flex: 1, flexDirection: 'row' }}>
                                    <Image source={require('./specicality_icon.png')} style={{ width: 25, height: 25, marginTop: 8, marginLeft: 10 }} />
                                    <Text style={{ fontFamily: fontUtils.FONT_FAMILY, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, paddingRight: 10, fontSize: 16 }}>Alice W. Lough</Text>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={this._keyExtractor}
                />

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => { this.props.navigation.navigate('addMedication')}}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}