import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './style';
var flatListData = require('./hospitaladmission.list.json')
import { THEME_COLOR } from '../../../components/utils/colorUtils';
import { FONT_FAMILY } from '../../../components/utils/fontUtils';

export default class HospitalAdmission extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listdata: flatListData,
            showDeleteIcon: false
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({
            onEditClicked: this.onEditClicked.bind(this),
            onDoneClicked: this.onDoneClicked.bind(this),
            showEdit: true,
            showDone: false
        });
    }
    onDoneClicked() {
        this.props.navigation.setParams({
            showEdit: true,
            showDone: false
        });
        this.setState({
            showDeleteIcon: false
        })
    }

    onEditClicked() {
        this.setState({
            showDeleteIcon: true
        })
        this.props.navigation.setParams({
            showEdit: false,
            showDone: true,
        });
    }
    getDeleteImage(item) {
        switch (item.showDelete) {
            case "DELETE_ICON":
                if (this.state.showDeleteIcon) {
                    return require('../../../components/Assets/Status/delete.png')
                }
                break;
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let showEdit = params.showEdit;
        let showDone = params.showDone;
        return {
            headerRight: <View>
                {
                    showEdit && <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onEditClicked}>
                        <Text style={{ color: '#3E3E3E', fontWeight: '500', fontSize: 18 }}>Edit</Text>
                    </TouchableOpacity>
                }
                {
                    showDone && <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onDoneClicked}>
                        <Text style={{ color: '#3E3E3E', fontWeight: '500', fontSize: 18 }}>Done</Text>
                    </TouchableOpacity>
                }
            </View>

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
        //#f5f5f5
        return (
            <View style={Style.containerStyle}>
                <FlatList
                    renderItem={({ item, index }) => {
                        return <View style={Style.itemStyle}>
                            <View style={{ flexDirection: 'row' }}>

                                {this.state.showDeleteIcon == true ? <Image key={index} style={{ width: 20, height: 20, alignSelf: 'center' }} source={this.getDeleteImage(item)}></Image> : null}
                                <View style={{ flexDirection: 'column', flex: 1 }}>

                                    <Text style={{
                                        color: THEME_COLOR,
                                        fontSize: 18,
                                        fontFamily: FONT_FAMILY,
                                        fontWeight: '400',
                                        margin: 4
                                    }}>{item.title}</Text>
                                    <Text style={{ color: 'gray', fontSize: 14, marginLeft: 5 }}>Bethesada Maryaland</Text>

                                    {this.FlatListItemSeparator()}

                                    <View style={{ flexDirection:'row', alignItems: 'center', padding:5}}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image style={{ width: 20, height: 20 }} source={require('../../../components/Assets/TimeLines/calendar.png')} />
                                                    <Text style={Style.dateStyle}>{item.admissiondate}</Text>
                                                </View>
                                                <Text style={Style.textStyle}>Admission Date</Text>
                                            </View>

                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image style={{ width: 20, height: 20 }} source={require('../../../components/Assets/TimeLines/calendar.png')} />
                                                    <Text style={Style.dateStyle}>{item.dischargedate}</Text>
                                                </View>
                                                <Text style={Style.textStyle}>Discharge Date</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'column', flex: 1 }}>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image style={{ width: 20, height: 20 }} source={require('../../../components/Assets/TimeLines/calendar.png')} />
                                                <Text style={Style.dateStyle}>{item.diagnosedate}</Text>
                                            </View>

                                            <Text style={Style.textStyle}>Diagnose Date</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }}
                    backgroundColor={'transparent'}
                    data={this.state.listdata}
                    extraData={this.state}
                    //ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={(item, index) => item + index}
                />

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => { this.props.navigation.navigate('addHospital') }}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}