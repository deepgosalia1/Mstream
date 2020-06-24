import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import style from './style'
import { THEME_COLOR } from '../../../components/utils/colorUtils';
import { FONT_FAMILY } from '../../../components/utils/fontUtils'
import { Dropdown } from 'react-native-material-dropdown';

var members = require('./members.json');

class familyLanes extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedMember: '', focussed: false, searchdatastate: members }
    }

    render() {

        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={style.renderViewStyle}>
                    <Image
                        style={style.renderViewImageStyle}
                        source={require('../../../components/Assets/common/lane_name.png')}
                    />
                    <View style={{ flexDirection: 'row', borderBottomColor: '#888', borderBottomWidth: 0.5, flex: 1, height: 45 }}>
                        <TextInput
                            style={style.renderViewTextInputStyle}
                            underlineColorAndroid='transparent'
                            placeholder={'Lane Name'}
                            placeholderTextColor='#888'
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 60, marginRight: 14, marginTop: 0 }}>
                    <Text
                        style={{ fontFamily: FONT_FAMILY, fontSize: 12, color: '#888' }}>Names must be lowercases , without spaces or periods, and shorter than 22 characters.
                    </Text>
                </View>


                <View style={{ marginTop: 10 }}>
                    <View style={style.renderViewStyle}>
                        <Image
                            style={style.renderViewImageStyle}
                            source={require('../../../components/Assets/common/add_memeber.png')}
                        />
                        <View style={{ flexDirection: 'row', flex: 1, height: 45
                        //,justifyContent:'flex-start',alignItems:'flex-start' 
                        }}>
                            <Dropdown
                                //defaultValue={this.state.selectedMember}
                                //style={{ flexDirection: 'row', width: '80%' }}
                                //onSelect={(index) => this.setState({ selectedMember: this.state.searchdatastate[index].name })}
                                containerStyle={{ color: '#000', flex: 8, fontSize: 22, borderBottomColor: '#888',marginTop: Platform.OS=='android' ? -26 : -27 }}
                                label='Add Member'
                                //labelFontSize={()=> {20}}
                                data={this.state.searchdatastate}
                                selectedItemColor='#888'
                                fontSize={22}
                            />
                            {/* <TextInput
                                    style={[style.renderViewTextInputStyle, { color: '#000' }]}
                                    underlineColorAndroid='transparent'
                                    placeholder={'Add Member'}
                                    value={this.state.selectedMember}
                                    placeholderTextColor='#888'
                                    onChangeText={(text) => {
                                        this.search(text)
                                        this.setState({ selectedMember: text })
                                    }
                                    }
                                /> */}
                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc',marginTop:1}}>
                                <TouchableOpacity style={{ flex: 1 }}><Image source={require('../../../components/Assets/common/add_icon.png')} style={{ height: 36, width: 36 }} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default familyLanes;