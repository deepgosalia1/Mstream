import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Style from './style';
var flatListData = require('./emergencycontacts.json')
import { FONT_FAMILY } from '../../../components/utils/fontUtils';

export default class EmergencyContacts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listdata: flatListData,
            showDeleteIcon: false,
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
        return (
            <View style={Style.containerStyle}>
                <FlatList
                    renderItem={({ item, index }) => {
                        return <View style={Style.itemStyle}>

                            <View style={{ flexDirection: 'row' }}>
                                {this.state.showDeleteIcon == true ? <Image key={index} style={{ width: 20, height: 20, alignSelf: 'center' }} source={this.getDeleteImage(item)}></Image> : null}

                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                        <Image style={Style.leftIconStyle} source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                                            <Text style={Style.titleStyle}>{item.name}</Text>
                                            <Text style={Style.relationStyle}>{item.relation}</Text>
                                        </View>
                                        {/* <Image
                                            style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 7, position: 'absolute', end: 0 }}
                                            source={require('../../../components/Assets/hospitals/hospitalUnCheck.png')} /> */}
                                    </View>

                                    <View
                                        style={{
                                            height: 1,
                                            width: "100%",
                                            backgroundColor: "lightgray",
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', marginRight:10}}>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Image style={Style.phoneIconStyle} source={require('./cellphone.png')} />
                                            <Text style={styles.phoneNumberStyle}>{item.phone}</Text>
                                        </View>
                                        <View
                                            style={{
                                                height: 35,
                                                width: 1,
                                                marginLeft:40,
                                                backgroundColor: "lightgrey",
                                            }}
                                        />
                                        <View style={{ alignItems: 'center', flexDirection: 'row'}}>
                                            <Image style={Style.phoneIconStyle} source={require('./phonecall.png')} />
                                            <Text style={styles.phoneNumber2Style}>{item.phone2}</Text>
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
                    onPress={() => { this.props.navigation.navigate('addEmergencyContact') }}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}